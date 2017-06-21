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
      var items_list_foot = '';

      $.each(response["ListOrders"], function(ind, orderList) {
        items_list_body = items_list_body + '<div class="panel panel-default bs-callout-danger"><div class="panel-body"><div><div class="pull-left date">'+
        '<span class="day">30</span>'+
        '<span class="month">Jun</span>'+
        '<span class="year">2009</span>'+
        '</div><div style="padding-left:80px;">'+
        '<a href="#"><strong>W080216002</strong></a>'+
        '<span class="badge pull-right">$390.00</span>'+
        '<div>'+
          '<button class="btn btn-default" type="button">View order <i class="fa fa-eye fa-fw" aria-hidden="true"></i></button>'+
          '<button class="btn btn-default" type="button">Reorder <i class="fa fa-exchange fa-fw" aria-hidden="true"></i></button>'+
          '</div></div></div></div></div>';

      });
      $("#load-container").html(items_list_head+items_list_body);

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


}
