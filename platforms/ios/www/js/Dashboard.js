/**
 * Created by ash on 6/7/17.
 */

class Dashboard {

  GoToDashBoard(loginName){

    //console.log(loginName);
    $.ajax({
      type          : "POST",
      url           : localurl+'getDashBoard.html',
      contentType   : "application/x-www-form-urlencoded;"
    }).done(function(response) {
      $("#inner").show();
      $("#home").hide();
      $('#navbar').collapse('hide');
      $('#nav_child').show();


      var message = response;
      message     = message.replace("LOGINNAME",loginName);
      //var newmessage = $(message).find('#loginName').html(loginName);

      $("#load-container").html(message);

    });
  }

  EditProfile(){

  }

  EditProfileAction(){

  }

  ChangePassword(){

  }

  ChangePasswordAction(){

  }
  ViewOrderList(){
    $.ajax({
      type          : "POST",
      url           : url+'loadOrdersHistory.php',
      contentType   : "application/x-www-form-urlencoded;"
    }).done(function(response) {
      $("#inner").show();
      $("#home").hide();
      $('#navbar').collapse('hide');
      $('#nav_child').show();

      response = (JSON.parse(response));

      console.log(response);
      var items_list_head = '<div class="page-wrapper"><div class="page-header"><h4>MY ORDERS</h4></div>';
      var items_list_body = '';
      var items_list_foot = '</div>';

      $.each(response["ListOrders"], function(ind, orderList) {
        var orderDate = orderList.orderDate;
        orderDate = orderDate.split('/');
        //console.log(orderDate);
        //console.log(orderList.orderNumber);

        items_list_body = items_list_body + '<div class="panel panel-default bs-callout-danger"><div class="panel-body"><div><div class="pull-left date">'+
        '<span class="day">'+orderDate[0]+'</span>'+
        '<span class="month">'+orderDate[1]+'</span>'+
        '<span class="year">'+orderDate[2]+'</span>'+
        '</div><div style="padding-left:80px;">'+
        '<a href="#" onclick="Dashboard.ViewOrer('+orderList.id+')"><strong>'+orderList.orderNumber+'</strong></a>'+
        '<span class="badge pull-right">'+orderList.totalOrderAmt+'</span>'+
        '<div>'+
          '<button class="btn btn-default" type="button" onclick="Dashboard.ViewOrer("'+orderList.id+'")">View order <i class="fa fa-eye fa-fw" aria-hidden="true"></i></button>'+
          '<button class="btn btn-default" type="button">Reorder <i class="fa fa-exchange fa-fw" aria-hidden="true"></i></button>'+
          '</div></div></div></div></div>';

      });

      if(response["totalOrders"]==0){
        items_list_body = '<div class="panel panel-default">'+
          '<div class="panel-heading">You have no order history</div></div>';
      }

      $("#load-container").html(items_list_head+items_list_body+items_list_foot);

    });
  }



  SignInOnly(){
    $.ajax({
        type          : "POST",
        url           : localurl+'getLogin.html',
        contentType   : "application/x-www-form-urlencoded;"
    }).done(function(response) {
        $("#inner").show().addClass('rc--inner_header');
        $("#home").hide();
        $('#navbar').collapse('hide');
        $('#nav_child').show();


        // assign active class to footer navigation
        var activeNavigationClass = 'rc_footer_active_nav',
            footerNavigationElem = $('.rc_inner_footer--js');

        footerNavigationElem.find('.' + activeNavigationClass)
                            .removeClass(activeNavigationClass);

        $("#load-container").html(response);
        $("#GoToUrl").attr("GoBackUrl", "Cart");
    });
  }
  GetReferenceName(){
    $.ajax({
      type          : "POST",
      url           : localurl+'getReferenceName.html',
      contentType   : "application/x-www-form-urlencoded;"
    }).done(function(response) {
      $("#inner").show();
      $("#home").hide();
      $('#navbar').collapse('hide');
      $('#nav_child').show();

      $("#load-container").html(response);

    });
  }
  GetShippingAddress(){
    $.ajax({
      type          : "POST",
      url           : url+'loadShippingAddress.php',
      contentType   : "application/x-www-form-urlencoded;"
    }).done(function(response) {
      $("#inner").show();
      $("#home").hide();
      $('#navbar').collapse('hide');
      $('#nav_child').show();

        var form_param = '';
        form_param = ('<div class="page-header"><h4>SHIPPING DETAILS</h4></div>');
        form_param = form_param+'<p class="text-muted"><i>Please choose or select the address you want to use.</i></p>';
      $("#load-container").html(form_param);

    });
  }

  ViewOrer(orderId){
    $.ajax({
      type          : "POST",
      url           : url+'loadOrdersHistoryDetails.php',
      contentType   : "application/x-www-form-urlencoded;",
      data          : { "orderId":orderId}
    }).done(function(response) {
      $("#inner").show();
      $("#home").hide();
      $('#navbar').collapse('hide');
      $('#nav_child').show();

      response = (JSON.parse(response));

      var OrderDetails        = response["ListOrdersDetails"];
      var OrderDetailsItems   = response['ListOrdersItems'];

      //console.log(response);
      var items_list_head     = '<div class="page-wrapper"><div class="page-header"><h4>MY ORDERS</h4></div>';
      var breadcrumb          = '<ol class="breadcrumb"><li><a href="#" onclick="Dashboard.GoToDashBoard()">My Account</a></li><li><a href="#" onclick="Dashboard.ViewOrderList()">Order History</a></li><li class="active">'+OrderDetailsItems.orderNumber+'</li></ol>';
      var items_list_body     = '';
      var items_list_foot     = '</div>';
      var PaymentFrom         = '';
      var AddressLine1        = '';
      var StateName           = '';
      var BillStateName       = '';
      var BillAddressLine1    = '';


      if(OrderDetails["payment_through"]==0){
        PaymentFrom = "Credit Card";
      }else{
        PaymentFrom = "Paypal";
      }


      if(OrderDetails["shipAdd1"]){
        AddressLine1 = ', '+OrderDetails["shipAdd1"];
      }else{
        AddressLine1 = "";
      }

      if(OrderDetails["state"]==-12){
        StateName    = OrderDetails["state"];
      }else{
        StateName    = 'International';
      }

      if(OrderDetails["billingAdd1"]){
        BillAddressLine1 = ', '+OrderDetails["billingAdd1"];
      }else{
        BillAddressLine1 = "";
      }

      if(OrderDetails["billState"]==-12){
        BillStateName    = OrderDetails["state"];
      }else{
        BillStateName    = 'International';
      }

      items_list_body = '' +
        '<table width="100%" class="table-hover table-striped table-bordered table table">' +
          '<tr>' +
            '<td><strong>Order Date</strong></td>' +
            '<td>'+OrderDetails["orderDate"]+'</td>'+
          '</tr>' +
          '<tr>' +
            '<td><strong>Order Status</strong></td>' +
            '<td>'+response["OrderStatus"]+'</td>'+
          '</tr>' +
          '<tr>' +
            '<td><strong>Paid Through</strong></td>' +
            '<td>'+PaymentFrom+'</td>'+
          '</tr>' +
          '<tr>' +
            '<td><strong>Transaction ID</strong></td>' +
            '<td>'+OrderDetails["txn_id"]+'</td>'+
          '</tr>' +
          '<tr>' +
            '<td><strong>Transaction ID</strong></td>' +
            '<td>'+OrderDetails["orderDate"]+'</td>'+
          '</tr>' +
          '<tr>' +
            '<td><strong>Shipping Method</strong></td>' +
            '<td>'+OrderDetails["shipping_method"]+'</td>'+
          '</tr>' +
          '<tr>' +
            '<td><strong>Freight Collect A/N</strong></td>' +
            '<td>'+OrderDetails["frieght_collect_no"]+'</td>'+
          '</tr>' +
          '<tr>' +
            '<td><strong>Tracking Number</strong></td>' +
            '<td>'+OrderDetails["tracking_number"]+'</td>'+
          '</tr>' +
          '<tr>' +
            '<td><strong>Ship Date</strong></td>' +
            '<td>'+OrderDetails["shipped_date"]+'</td>'+
          '</tr>' +
        '</table>'+
        '<table width="100%" class="table-hover table-striped table-bordered table table">' +
        '<tr>' +
          '<td>' +
            '<strong>SHIP TO</strong><br>'+
            '<strong>'+OrderDetails["shipping_company_name"]+'</strong><br>'+
            OrderDetails["shipping_contact_person"]+'<br>'+
            OrderDetails["shipping_contact_number"]+'<br>'+
            OrderDetails["shipAdd"]+AddressLine1+'<br>'+
            OrderDetails["shipCity"]+', '+StateName+
            OrderDetails["ship_zip_code"]+'<br>'+
           OrderDetails["country"]+'<br>'+
          '</td>' +
        '</tr>' +
        '<tr>' +
          '<td>' +
            '<strong>BILL TO</strong><br>'+
            '<strong>'+OrderDetails["billing_company_name"]+'</strong><br>'+
            OrderDetails["billing_contact_person"]+'<br>'+
            OrderDetails["billing_contact_number"]+'<br>'+
            OrderDetails["billingAdd"]+BillAddressLine1+'<br>'+
            OrderDetails["shipCity"]+', '+BillStateName+
            OrderDetails["bill_zip_code"]+'<br>'+
            OrderDetails["billCountry"]+'<br>'+
          '</td>' +
        '</tr>' +
        '</table>'+
          '<table width="100%" class="table-hover table-striped table-bordered table">'+
          '<thead>'+
            '<tr>'+
              '<td><strong>S/N</strong></td>'+
              '<td><strong>Unit Price</strong></td>'+
              '<td><strong>Quantity</strong></td>'+
              '<td><strong>Sub Total</strong></td>'+
            '</tr>'+
          '</thead><tbody>';

          var NewPrice  = 0;
          var SubTotal  = 0;
          var Total     = 0;
          var SalesTax  = 0;
          $.each(response["ListOrdersItems"], function(ind, orderListItems) {


            NewPrice = orderListItems['new_price'];
            SubTotal = NewPrice*orderListItems['quantity'];
            Total = Total + SubTotal;


            items_list_body = items_list_body + '<tr>' +
              '<td>'+orderListItems['serial_number']+'</td>' +
              '<td>'+NewPrice+'</td>' +
              '<td>'+orderListItems['quantity']+'</td>' +
              '<td>'+SubTotal+'</td>' +
              '</tr>';
          });

        if(OrderDetails['country']=="UNITED STATES")
        {

          if(OrderDetails['state']=="CALIFORNIA")
          {
            SalesTax =   (8.5*Total) / 100;
          }
          else
          {
            SalesTax=0;
          }

        }
        else
        {
          SalesTax = 0;
        }

        var ShippingTax = 0;
        if(OrderDetails['shippingCost']=='Collect'){
          ShippingTax = 0;
        }
        var GrandTotal = 0;
        GrandTotal = Total + SalesTax + ShippingTax + 0;

          items_list_body = items_list_body + '<tr>' +
            '<td colspan="3"><strong>TOTAL(USD)</strong></td>' +
            '<td>'+Total+'</td>' +
            '</tr>'+
            '<tr>' +
            '<td colspan="3"><strong>TAX(USD)</strong></td>' +
            '<td>'+SalesTax+'</td>' +
            '</tr>'+
            '<tr>' +
            '<td colspan="3"><strong>SHIPPING & HANDLING(USD)</strong></td>' +
            '<td>'+OrderDetails['shippingCost']+'</td>' +
            '</tr>'+
            '<tr>' +
            '<td colspan="3"><strong>GRAND TOTAL(USD)</strong></td>' +
            '<td>'+GrandTotal+'</td>' +
            '</tr>';
          items_list_body = items_list_body + '</tbody></table>';

      if(response["totalOrders"]==0){
        items_list_body = '<div class="panel panel-default">'+
          '<div class="panel-heading">No order found</div></div>';
      }

      $("#load-container").html(items_list_head+breadcrumb+items_list_body+items_list_foot);
    });
  }


}
