/*
 * This class is only used for Reverse Engineering When USER searchs for Particular serial numbers.
 * @param {string} username ; holds the username posted from the form.
 * @param {string} password ; hold the password posted from the form.
 */


class Search {

    SearchReverSe(){

        serial_number    =   $('#search').val();
        form_attribute   =   $('#search_form').val();
        /*
         * POSTING DATA ONTO THE FORM
         */

        $.ajax({
            type          : "POST",
            url           : url+'search_api.php',
            contentType   : "application/x-www-form-urlencoded;",
            //  dataType      : "json",
            data          : { "serial_number":serial_number, "action":form_attribute}
        }).done(function(response){
            //response = response.replace(/^\s*/,'').replace(/\s*$/,'');

            //if(response == 'fail'){
            //("#search_result").html("Invalid access to the system.");
            //}else{
            $("#search_result").html(response);
            //}

        }).fail(function(jqXHR,textStatus){
            alert("Request failed");
        });
        //$("#show_msg").html('This is great');

    }

    LoadFormList(platformType){

        console.log(platformType);
        var id;

        var connectorsArray         = '';
        var cableArray              = '';
        var PhaseMatchArray         = '';
        var LengthMatchArray        = '';
        var DataMatchArray          = '';
        var JacketArray             = '';

        if(platformType==0){
            var checked                 = 'checked';
            var checked2                = '';
            var checked1                = '';
        }else if(platformType==1){
            var checked1                = 'checked';
            var checked2                = '';
            var checked                 = '';
        }else{
            var checked2                = 'checked';
            var checked                 = '';
            var checked1                = '';
        }




        $.ajax({
            type          : "POST",
            url           : url+'load_json.php',
            contentType   : "application/x-www-form-urlencoded;",
            dataType: "json",
            async: false,
            data          : { "platformType":platformType}
        }).done(function(response){

            // $("#search_result").html('<div class="control-group"><label title="CHOOSE: 086 platform (up to 65 GHz), 047 platform (up to 110 GHz), or 141 platform (up to 27 GHz)">Diameter: </label><div class="radio">' +
            var form_param = ('<form id="form">' +
            '<div class="form-group">' +
            '<label for="diameter_cable" class="search--normal_label">Diameter</label>' +
            '<div class="btn-group clearfix" data-toggle="buttons">' +
            '<label class="btn btn-default btn-md active">' +
            '<input type="radio" ' +  checked +' name="diameter_cable" id="diameter_cable" required="" diameter_uuid_val="0" value="0" onclick="SearchAPI.LoadFormList(0);">' +
            '086' +
            '</label>' +

            '<label class="btn btn-default btn-md">' +
            '<input type="radio" ' +  checked1 +' diameter_uuid_val="1" name="diameter_cable" id="diameter_cable" required="" value="1" onclick="SearchAPI.LoadFormList(1)";>' +
            '047' +
            '</label>' +

            '<label class="btn btn-default btn-md">' +
            '<input type="radio" ' +  checked2 +' diameter_uuid_val="2" name="diameter_cable" id="diameter_cable" required="" value="2" onclick="SearchAPI.LoadFormList(2)";>' +
            '141' +
            '</label>' +
            '</div>' +
            '</div>');

            $.each(response["connectorList"], function(ind, connectorList) {
                //console.log(connectorList);
                connectorsArray = connectorsArray+"<option value='"+(connectorList.id)+"'>"+(connectorList.connector_name)+"</option>";
            });
            form_param = form_param+('<div class="form-group">' +
                '<label for="connector_1">Connector 1  <small>*</small></label>' +
                '<select name="connector_1" class="form-control" id="connector_1">' + connectorsArray + '</select>' +
                '</div>');

            form_param = form_param+('<div class="form-group">' +
                '<label for="connector_2">Connector 2  <small>*</small></label>' +
                '<select name="connector_2" class="form-control" id="connector_2">' + connectorsArray + '</select>' +
                '</div>');

            $.each(response["cableList"], function(ind, cableList) {
                //console.log(connectorList);
                cableArray = cableArray+"<option value='"+(cableList.id)+"'>"+(cableList.cable_name)+"</option>";
            });


            form_param = form_param + ('<div class="form-group">' +
                '<label for="cable_name">Cable Type  <small>*</small></label>' +
                '<select name="cable_name" class="form-control" id="cable_name">' + cableArray + '</select>' +
                '</div>');

            form_param = form_param + ('<div class="form-group">' +
                '<label for="Length">Length  <small>*</small></label>' +
                '<input title="The Length should be more then 2inches OR 5cm" type="text" name="length_dia" id="length_dia" class="form-control" value="12">' +
                '</div>');

            $.each(response["lengthList"], function(ind, lengthList) {
                //console.log(connectorList);
                LengthMatchArray = LengthMatchArray+"<option value='"+(lengthList.id)+"'>"+(lengthList.length_title)+"</option>";
            });
            form_param = form_param+('<div class="form-group">' +
                '<label for="lengthList">Unit Of Measure <small>*</small></label>' +
                '<select name="lengthList" class="form-control" id="lengthList">' + LengthMatchArray + '</select>' +
                '</div>');

            $.each(response["phaseMatchList"], function(ind, phaseMatchList) {
                PhaseMatchArray = PhaseMatchArray+"<option value='"+(phaseMatchList.id)+"'>"+(phaseMatchList.phase_type)+"</option>";
            });

            form_param = form_param+('<div class="form-group">' +
                '<label for="phase_mat">Phase Matching  <small>*</small></label>' +
                '<select name="phase_mat" class="form-control" id="phase_mat"><option value="-23">None</option>' + PhaseMatchArray + '</select>' +
                '</div>');

            $.each(response["jacketList"], function(ind, jacketList) {
                JacketArray = JacketArray+"<option value='"+(jacketList.id)+"'>"+(jacketList.jacket_type)+"</option>";
            });

            form_param = form_param + ('<div class="form-group">' +
                '<label for="jacket_type">Jacket <small>*</small></label>' +
                '<select name="jacket_type" class="form-control" id="jacket_type"><option value="-23">None</option>' + JacketArray + '</select>' +
                '</div>');

            $.each(response["testData"], function(ind, testData) {
                DataMatchArray = DataMatchArray+"<option value='"+(testData.id)+"'>"+(testData.test_data_title)+"</option>";
            });

            form_param = form_param+('<div class="form-group">' +
                '<label for="test_data_val">Test Data  <small>*</small></label>' +
                '<select name="test_data_val" class="form-control" id="test_data_val">' + DataMatchArray + '</select>' +
                '</div>');

            form_param = form_param+('<div class="form-group">' +
                '<input type="button" onclick="SearchAPI.FormGenerator();" name="submit_frm" id="submit_frm" value="Submit" class="btn btn-primary" />&nbsp;' +
                '<input type="submit" name="res" id="res" value="Clear" class="btn btn-default" />' +
                '</div>' +
                '</form>')

            $("#search_result").html(form_param);

        }).fail(function(jqXHR,textStatus){
            alert("Request failed");
        });
    }

    FormGenerator(){
        var id;

        var connector2Check         = '';
        var connector1Check         = '';
        var cableCheck              = '';
        var lengthCheck             = '';
        var phaseCheck              = '';
        var testCheck               = '';
        var jacketCheck             = '';

        var connectorsArray1        = '';
        var connectorsArray2        = '';
        var cableArray              = '';
        var PhaseMatchArray         = '';
        var LengthMatchArray        = '';
        var DataMatchArray          = '';
        var JacketArray             = '';

        /**
         * data {string}; contains all the elements from the form.
         */
        var data = $('#form').serialize().split("&");
        var diameter_cable = $("#submit_frm").attr('diameter_uuid_val');

        //console.log(data);

        //console.log(diameter_cable);

        /**
         * Converting the serialized data into JSON string.
         */

        var obj={};
        for(var key in data)
        {
            obj[data[key].split("=")[0]] = data[key].split("=")[1];
        }


        //console.log(obj);

        var cable_name          = obj.cable_name;
        var connector_1         = obj.connector_1;
        var connector_2         = obj.connector_2;
        var diameter_cable      = obj.diameter_cable;
        var length_dia          = obj.length_dia;
        var phase_mat           = obj.phase_mat;
        var lengthList          = obj.lengthList;
        var test_data_val       = obj.test_data_val;
        var jacket_type        = obj.jacket_type;

        if(diameter_cable==0){
            var checked                 = 'checked';
            var checked2                = '';
            var checked1                = '';
        }else if(diameter_cable==1){
            var checked1                = 'checked';
            var checked2                = '';
            var checked                 = '';
        }else{
            var checked2                = 'checked';
            var checked                 = '';
            var checked1                = '';
        }


        /**
         * this ajax call will fetch all the details of the elements posted from the form
         */

        $.ajax({
            type          : "POST",
            url           : url+'loadDescription.php',
            contentType   : "application/x-www-form-urlencoded;",
            dataType: "json",
            async: false,
            data          : { "diameter_cable":diameter_cable,
                "cable_name":cable_name,
                'connector_1':connector_1,
                'connector_2':connector_2,
                'diameter_cable':diameter_cable,
                'length_dia':length_dia,
                'phase_mat':phase_mat,
                'lengthList':lengthList,
                'jacket_type':jacket_type,
                'test_data_val':test_data_val}
        }).done(function(response){

            //
            console.log(response);
            var technical_spec='';
            technical_spec = ('<h4 class="search--title">Technical Specs</h4>');


            var PartNumber                      = '';
            var Description                     = '';
            var PriceCap                        = '';
            var PricePerUnit                    = '';
            var Overall_End_To_End              = '';
            var Between_Ref_Planes              = '';
            var C1_Ref_Plane                    = '';
            var C2_Ref_Plane                    = '';
            var Frequency_Range                 = '';
            var Insertion_Loss                  = '';
            var Less_Connectors                 = '';
            var Minimum_Inside_Bend_Radius      = '';
            var Return_Loss                     = '';
            var Solder                          = '';
            var Connector_1                     = '';
            var Connector_2                      = '';
            var Cable_Type                      = '';


            var rotating_images_1       = response['connector_1'].tech_spec_drawing;
            var rotating_images_2       = response['connector_2'].rotating_images;

            PartNumber                  = response['technical_spec'].serial_number;
            Description                 = response['technical_spec'].description_generator;
            PriceCap                    = response['technical_spec'].price_breakdown;
            PricePerUnit                = response['technical_spec'].new_price;

            Overall_End_To_End          = response['technical_spec'].Overall_end_to_end;
            Between_Ref_Planes          = response['technical_spec'].Between_Ref_Planes;
            C1_Ref_Plane                = response['technical_spec'].C1_Ref_Plane;
            C2_Ref_Plane                = response['technical_spec'].C2_Ref_Plane;
            Frequency_Range             = response['technical_spec'].Frequency_Range;
            Insertion_Loss              = response['technical_spec'].Insertion_Loss;
            Less_Connectors             = response['technical_spec'].Less_Connectors;
            Minimum_Inside_Bend_Radius  = response['technical_spec'].Minimum_Inside_Bend_Radius;
            Return_Loss                 = response['technical_spec'].Return_Loss;
            Solder                      = response['technical_spec'].Solder;
            Between_Ref_Planes          = response['technical_spec'].Between_Ref_Planes;
            Connector_1                 = response['technical_spec'].Connector_1;
            Connector_2                 = response['technical_spec'].Connector_2;
            Cable_Type                  = response['technical_spec'].Cable_Type;

            $('.nav a[href="#search_result_array"]').tab('show');
            technical_spec = technical_spec +
                             '<div class="technical_spec--image_container">' +
                               '<img src="https://rfcoax.com/uploads/connectors/drawings/' + rotating_images_1+'" width="50"/>' +
                               '<img src="https://rfcoax.com/img/mid_cable.jpg" width="150"/>' +
                               '<img src="https://rfcoax.com/uploads/connectors/images/' + rotating_images_2+'" width="50"/>' +
                            '</div>' +
                            '<ul class="list-group">' +
                              '<li class="list-group-item">' +
                                '<strong>Part Number: </strong>' + PartNumber +
                              '</li>' +
                              '<li class="list-group-item">' +
                                '<strong>Description: </strong>' + Description +
                              '</li>' +
                              '<li class="list-group-item">' +
                                '<strong>Price: </strong>' + PriceCap +
                              '</li>' +
                              '<li class="list-group-item">' +
                                '<strong>Manufacturing Lead Time: </strong> <br>Most orders <7 business days. Large orders of 100+ units total may be 2-3 weeks. Parts are always in stock to build any order quantity.' +
                              '</li>' +
                            '</ul>' +
                            '<div class="alert alert-info" role="alert">' +
                                '<strong>NOTE:</strong> : All prices are per <strong>EACH</strong> cable.' +
                            '</div>' +
                            '<div class="btn-group" role="group">' +
                              '<input type="button" onclick="Shopping.AddCart();" partNumber = "' + PartNumber + '" pricePerUnit = "' + PricePerUnit + '" name = "addToCart" id = "addToCart" value="Add to cart" class="btn btn-primary" />' +
                              '<input type="button" name="technical_drawing" id="technical_drawing" value="View Technical Drawing" class="btn btn-default" />' +
                            '</div>';



            technical_spec = technical_spec +
                '<h4 class="search--title"> Production Specification</h4>' +
                '<ul class="list-group">' +
                '<li class="list-group-item"><span class="badge primary">in/cm</span>Length Dimensions: </li>' +
                '<li class="list-group-item"><span class="badge primary">' + Overall_End_To_End+'</span>Overall end-to-end:</li>' +
                '<li class="list-group-item"><span class="badge primary">' + Between_Ref_Planes+'</span>Between Ref. Planes:</li>' +
                '<li class="list-group-item"><span class="badge primary">' + Less_Connectors+'</span>Less Connectors:</li>' +
                '<li class="list-group-item"><span class="badge primary">' + C1_Ref_Plane+'</span>C1 Ref. Plane (R/P):</li>' +
                '<li class="list-group-item"><span class="badge primary">' + C1_Ref_Plane+'</span>C2 Ref. Plane (R/P):</li>' +
                '<li class="list-group-item"><strong>Frequency Range: </strong>' + Frequency_Range+'</li>' +
                '</ul>' +
                '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Return Loss</h3></div>' +
                '<div class="panel-body">' + Return_Loss+'</div></div>' +
                '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Insertion Loss(up to above frequency limit):</h3></div>' +
                '<div class="panel-body">' + Insertion_Loss+'</div></div>' +
                '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Connector 1</h3></div>' +
                '<div class="panel-body">' + Connector_1+'</div></div>' +
                '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Connector 2</h3></div>' +
                '<div class="panel-body">' + Connector_2+'</div></div>' +
                '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Cable Type</h3></div>' +
                '<div class="panel-body">' + Cable_Type+'</div></div>' +
                '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Minimum Inside Bend Radius</h3></div>' +
                '<div class="panel-body">' + Minimum_Inside_Bend_Radius+'</div></div>' +
                '<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Solder</h3></div>' +
                '<div class="panel-body">' + Solder+'</div></div>';
            $("#search_result_array").html(technical_spec);

        });

        $.ajax({
            type          : "POST",
            url           : url+'load_json.php',
            contentType   : "application/x-www-form-urlencoded;",
            dataType: "json",
            async: false,
            data          : { "platformType":diameter_cable}
        }).done(function(response){

            // $("#search_result").html('<div class="control-group"><label title="CHOOSE: 086 platform (up to 65 GHz), 047 platform (up to 110 GHz), or 141 platform (up to 27 GHz)">Diameter: </label><div class="radio">' +
            var form_param = '';
            form_param = ('<div class="page-header"><h4>DESIGN YOUR CABLE</h4></div>');

            form_param = form_param+('<form id="form"><div class="form-group"><label for="diameter_cable">Diameter</label></div><div class="form-group"><div class="btn-group" data-toggle="buttons"><label class="btn btn-default btn-md"><input type="radio" ' +  checked +' name="diameter_cable" id="diameter_cable" required="" diameter_uuid_val="0" value="0" onclick="SearchAPI.LoadFormList(0);">086</label><label class="btn btn-default btn-md"><input type="radio" ' +  checked1 +' diameter_uuid_val="1" name="diameter_cable" id="diameter_cable" required="" value="1" onclick="SearchAPI.LoadFormList(1)";>047</label><label class="btn btn-default btn-md"><input type="radio" ' +  checked2 +' diameter_uuid_val="2" name="diameter_cable" id="diameter_cable" required="" value="2" onclick="SearchAPI.LoadFormList(2)";>141</label></div></div>');

            $.each(response["connectorList"], function(ind, connectorList) {
                //console.log(connectorList);
                if(connectorList.id==connector_1){
                    connector1Check = "selected";
                }else{
                    connector1Check = "";
                }

                connectorsArray1 = connectorsArray1+"<option value='"+(connectorList.id)+"' "+connector1Check+">"+(connectorList.connector_name)+"</option>";
            });
            form_param = form_param+('<div class="form-group"><label for="connector_1">Connector 1  <small>*</small></label><select name="connector_1" class="form-control" id="connector_1">' + connectorsArray1 + '</select></div>');
            $.each(response["connectorList"], function(ind, connectorList) {
                if(connectorList.id==connector_2){
                    connector2Check = "selected";
                }else{
                    connector2Check = "";
                }
                connectorsArray2 = connectorsArray2+"<option value='"+(connectorList.id)+"' "+connector2Check+">"+(connectorList.connector_name)+"</option>";
            });

            form_param = form_param+('<div class="form-group"><label for="connector_2">Connector 2  <small>*</small></label><select name="connector_2" class="form-control" id="connector_2">' + connectorsArray2 + '</select></div>');


            $.each(response["cableList"], function(ind, cableList) {
                //console.log(connectorList);
                if(cableList.id==cable_name){
                    cableCheck = "selected";
                }else{
                    cableCheck = "";
                }
                cableArray = cableArray+"<option value='"+(cableList.id)+"' "+cableCheck+">"+(cableList.cable_name)+"</option>";
            });

            // var diameter_cable = obj.diameter_cable;
            // var length_dia = obj.length_dia;
            // var phase_mat = obj.phase_mat;
            // var test_data_val = obj.test_data_val;
            form_param = form_param+('<div class="form-group"><label for="cable_name">Cable Type  <small>*</small></label><select name="cable_name" class="form-control" id="cable_name">' + cableArray + '</select></div>');
            form_param = form_param+('<div class="form-group"><label for="Length">Length  <small>*</small></label><input title="The Length should be more then 2inches OR 5cm" type="text" name="length_dia" id="length_dia" class="form-control" value="12"></div>');



            $.each(response["lengthList"], function(ind, lengthList) {
                //console.log(connectorList);

                if(lengthList.id==lengthList){
                    lengthCheck = "selected";
                }else{
                    lengthCheck = "";
                }

                LengthMatchArray = LengthMatchArray+"<option value='"+(lengthList.id)+"' "+lengthCheck+">"+(lengthList.length_title)+"</option>";
            });
            form_param = form_param+('<div class="form-group"><label for="phase_mat">Unit Of Measure <small>*</small></label><select name="lengthList" class="form-control" id="lengthList">' + LengthMatchArray + '</select></div>');


            $.each(response["phaseMatchList"], function(ind, phaseMatchList) {
                //console.log(connectorList);
                if(phaseMatchList.id==phase_mat){
                    phaseCheck = "selected";
                }else{
                    phaseCheck = "";
                }

                PhaseMatchArray = PhaseMatchArray+"<option value='"+(phaseMatchList.id)+"' "+phaseCheck+">"+(phaseMatchList.phase_type)+"</option>";
            });
            form_param = form_param+('<div class="form-group"><label for="phase_mat">Phase Matching  <small>*</small></label><select name="phase_mat" class="form-control" id="phase_mat">' + PhaseMatchArray + '</select></div>');

            $.each(response["jacketList"], function(ind, jacketList) {

                if(jacketList.id==jacket_type){
                    jacketCheck = "selected";
                }else{
                    jacketCheck = "";
                }
                //console.log(connectorList);
                JacketArray = JacketArray+"<option value='"+(jacketList.id)+"' "+jacketCheck+">"+(jacketList.jacket_type)+"</option>";
            });
            form_param = form_param+('<div class="form-group"><label for="jacket_type">Jacket <small>*</small></label><select name="jacket_type" class="form-control" id="jacket_type"><option value="-23">None</option>' + JacketArray + '</select></div>');


            $.each(response["testData"], function(ind, testData) {
                //console.log(connectorList);
                if(testData.id==test_data_val){
                    testCheck = "selected";
                }else{
                    testCheck = "";
                }

                DataMatchArray = DataMatchArray+"<option value='"+(testData.id)+"' "+testCheck+">"+(testData.test_data_title)+"</option>";
            });
            form_param = form_param+('<div class="form-group"><label for="test_data_val">Test Data  <small>*</small></label><select name="test_data_val" class="form-control" id="test_data_val">' + DataMatchArray + '</select></div>');
            form_param = form_param+('<div class="form-group"><input type="button" onclick="SearchAPI.FormGenerator();" name="submit_frm" id="submit_frm" value="Submit" class="btn btn-success" />&nbsp;<input type="submit" name="res" id="res" value="Clear" class="btn btn-default" /></div></form>')

            $("#search_result").html(form_param);



        }).fail(function(jqXHR,textStatus){
            alert("Request failed");
        });

    }

}
