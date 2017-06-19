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
      url           : localurl+'getOrderList.html',
      contentType   : "application/x-www-form-urlencoded;"
    }).done(function(response) {
      $("#inner").show();
      $("#home").hide();
      $('#navbar').collapse('hide');
      $('#nav_child').show();

      $("#load-container").html(response);

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
        $('#GoBackUrl').val('Cart');

        // assign active class to footer navigation
        var activeNavigationClass = 'rc_footer_active_nav',
            footerNavigationElem = $('.rc_inner_footer--js');

        footerNavigationElem.find('.' + activeNavigationClass)
                            .removeClass(activeNavigationClass);

        $("#load-container").html(response);
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
