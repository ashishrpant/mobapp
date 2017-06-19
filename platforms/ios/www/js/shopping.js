/**
 * Created by ash on 5/26/17.
 */


class Shopping {

  ViewCart() {
    // $.ajax({
    //     type          : "POST",
    //     url           : url+'loadCart.php',
    //
    //     contentType   : "application/x-www-form-urlencoded;",
    // }).done(function(response) {
    //
    // });

    var response = '{"success":true,"cart_items":' +
      '[{"id":"14809","serial_number":"S086MMHF-12","order_quantity":"1","price_per_unit":"38","user_id":"0","session_id":"362727890cfc59f5de51d2d99233fb67","date_added":"05/24/2017 20:56:48","price_breakdown":" 1-9 $38.00, 10-24 $36.10, 25-49 $34.20, 50-99 $32.30, 100-249 $30.40, 250-499 $28.50, 500+ $26.60 USD each","valid_usa":"0"' +
      '},' +
      '{"id":"14810","serial_number":"V086FFHF-12","order_quantity":"1","price_per_unit":"196","user_id":"0","session_id":"362727890cfc59f5de51d2d99233fb67","date_added":"05/24/2017 21:25:11","price_breakdown":" 1-9 $196.00, 10-24 $186.20, 25-49 $176.40, 50-99 $166.60, 100-249 $156.80, 250-499 $147.00, 500+ $137.20 USD each","valid_usa":"0"}' +
      ']' +
      '}';


    response = (JSON.parse(response));
    var param_div     = '';

    var shopping_cart        = '';
    var shopping_cart_head   = '';
    var shopping_cart_body   = '';
    var shopping_cart_foot   = '';

    var sub_total = 0;

    shopping_cart_head = '<div class="rc--shopping_cart">';

    $.each(response["cart_items"], function(ind, cartItems) {
      param_div = param_div + '<div>';
      sub_total = sub_total + (cartItems.price_per_unit * cartItems.order_quantity);

      shopping_cart_body = shopping_cart_body +
        // Serial Number
        '<div class="rc_shopping_cart--items">' +
        '<div class="shopping_cart--sn"><strong>SN:</strong> ' + cartItems.serial_number + '</div> ' +
        '<table id="cart" class="table table-condensed">' +
        '<thead>' +
        '<tr>' +
        '<th class="shopping_cart--table_header">Quantity</th>' +
        '<th class="shopping_cart--table_header text-center">Unit Price ($)</th>' +
        '<th class="shopping_cart--table_header text-center">Disc Price ($)</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td data-th="Quantity">' +
        '<input type="number" class="shopping_cart--quantity form-control text-center" value="1">' +
        '</td>' +
        '<td data-th="Price" class="text-center">' + cartItems.price_per_unit + '</td>' +
        '<td data-th="Price" class="text-center">' + cartItems.price_per_unit + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<div class="btn-group" role="group" aria-label="Cart Actions">' +
        '<button type="button" class="btn btn-default"><i class="fa fa-refresh"></i></button>' +
        '<button type="button" class="btn btn-default"><i class="fa fa-trash-o"></i></button>' +
        '</div>' +
        '</td>' +
        '<td data-th="Subtotal" class="text-right">Subtotal:</td>' +
        '<td data-th="Subtotal">' + sub_total + '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>';
    });

    shopping_cart_foot = '<div class="shopping_cart--sn"><strong>Total $</strong> ' + sub_total + '</div> ' +
      '<div class="btn-group" role="group" aria-label="Cart Actions">' +
      '<a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a>' +
      '<a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></button>' +
      '</div>';


    var main_content = '<div class="page-wrapper">' +
      '<div class="page-header"><h4>YOUR CART</h4></div>' +

      shopping_cart_head +
      shopping_cart_body +
      shopping_cart_foot +
      '</div>'

    // Load Other page header and hide big logo
    $("#inner").show().addClass('rc--inner_header');
    $("#home").hide();
    $('#navbar').collapse('hide');
    $('#nav_child').show();
    $("#load-container").html(main_content);
  }

  AddCart(){

    var PricePerUnit                    = "";
    var PartNumber                      = '';
    var Description                     = '';
    var PriceCap                        = '';
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
    var Connector_2                     = '';
    var Calc_2                          = '';
    var Calc_3                          = '';
    var Calc_4                          = '';
    var Calc_5                          = '';
    var Calc_6                          = '';
    var Calc_7                          = '';
    var Calc_8                          = '';
    var LengthDia                       = '';
    var JacketVal                       = '';
    var TestDataVal                     = "";
    var RotatingImages1                 = "";
    var RotatingImages2                 = "";
    var Connector_Desc_1                = "";
    var Connector_Desc_2                = "";
    var CableType                       = "";
    var PhaseMatch                      = "";

    CableType                           = $("#addToCart").attr("CableType");
    PartNumber                          = $("#addToCart").attr("PartNumber");
    PricePerUnit                        = $("#addToCart").attr("PricePerUnit");
    Description                         = $("#addToCart").attr("Description");
    PriceCap                            = $("#addToCart").attr("PriceCap");
    Overall_End_To_End                  = $("#addToCart").attr("Overall_End_To_End");
    Between_Ref_Planes                  = $("#addToCart").attr("Between_Ref_Planes");
    C1_Ref_Plane                        = $("#addToCart").attr("C1_Ref_Plane");
    C2_Ref_Plane                        = $("#addToCart").attr("C2_Ref_Plane");
    Frequency_Range                     = $("#addToCart").attr("Frequency_Range");
    Insertion_Loss                      = $("#addToCart").attr("Insertion_Loss");
    Less_Connectors                     = $("#addToCart").attr("Less_Connectors");
    Minimum_Inside_Bend_Radius          = $("#addToCart").attr("Minimum_Inside_Bend_Radius");
    Return_Loss                         = $("#addToCart").attr("Return_Loss");
    Solder                              = $("#addToCart").attr("Solder");
    Connector_Desc_1                    = $("#addToCart").attr("Connector_Desc_1");
    Connector_Desc_2                    = $("#addToCart").attr("Connector_Desc_2");
    Calc_2                              = $("#addToCart").attr("Calc_2");
    Calc_3                              = $("#addToCart").attr("Calc_3");
    Calc_4                              = $("#addToCart").attr("Calc_4");
    Calc_5                              = $("#addToCart").attr("Calc_5");
    Calc_6                              = $("#addToCart").attr("Calc_6");
    Calc_7                              = $("#addToCart").attr("Calc_7");
    Calc_8                              = $("#addToCart").attr("Calc_8");
    LengthDia                           = $("#addToCart").attr("LengthDia");
    JacketVal                           = $("#addToCart").attr("JacketVal");
    TestDataVal                         = $("#addToCart").attr("TestDataVal");
    RotatingImages1                     = $("#addToCart").attr("rotating_images_1");
    RotatingImages2                     = $("#addToCart").attr("rotating_images_2");
    PhaseMatch                          = $("#addToCart").attr("PhaseMatch");

    var ParamsSendingToCartPage = "";
    ParamsSendingToCartPage     = {
      "PartNumber":PartNumber,
      "PricePerUnit":PricePerUnit,
      "Description":Description,
      "PriceCap":PriceCap,
      "Overall_End_To_End":Overall_End_To_End,
      "Between_Ref_Planes":Between_Ref_Planes,
      "C1_Ref_Plane":C1_Ref_Plane,
      "C2_Ref_Plane":C2_Ref_Plane,
      "Frequency_Range":Frequency_Range,
      "Insertion_Loss":Insertion_Loss,
      "Less_Connectors":Less_Connectors,
      "Minimum_Inside_Bend_Radius":Minimum_Inside_Bend_Radius,
      "Return_Loss":Return_Loss,
      "Solder":Solder,
      "Connector_1":Connector_1,
      "Connector_2":Connector_2,
      "Connector_Desc_1":Connector_Desc_1,
      "Connector_Desc_2":Connector_Desc_2,
      "Calc_2":Calc_2,
      "Calc_3":Calc_3,
      "Calc_4":Calc_4,
      "Calc_5":Calc_5,
      "Calc_5":Calc_5,
      "Calc_5":Calc_5,
      "Calc_6":Calc_6,
      "Calc_7":Calc_7,
      "Calc_8":Calc_8,
      "LengthDia":LengthDia,
      "JacketVal":JacketVal,
      "TestDataVal":TestDataVal,
      "RotatingImages1":RotatingImages1,
      "RotatingImages2":RotatingImages2,
      "CableType":CableType,
      "PhaseMatch":PhaseMatch
    };

    $.ajax({
      type          : "POST",
      url           : url+'addToCart.php',
      contentType   : "application/x-www-form-urlencoded;",
      data          : ParamsSendingToCartPage

    }).done(function(response) {
      console.log(response);
    });

  }
}
