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


}
