/**
 * Created by ash on 4/7/17.
 * This class will hold all the calls for login/logout/register/forgotpassword.
 */

class Logs{

    /**
     * Generates login form when clicked on login link
     */

    GenerateLoginForm(){
        BootstrapDialog.show({
            title: 'Sign In',
            message: 'Your sign-in form goes here.',
            cssClass: 'login-dialog',
            buttons: [{
                label: 'Sign In Now!',
                cssClass: 'btn-primary',
                action: function(dialog){
                    dialog.close();
                }
            }]
        });
    }
    /**
     * Deals with login check
     */
    CheckLogin(){
      $.ajax({
        type          : "POST",
        url           : url+'checkLogin.php',
        contentType   : "application/x-www-form-urlencoded;",
      }).done(function(response){
          
          response = (JSON.parse(response));
          if(response.success==true){
            var  username = response.username;
            Dashboard.GetReferenceName();
          }else{
            var  error = response.success;
            Dashboard.SignInOnly();

          }
        });
      //var response = '{ "success" :true ,"username":"Ashish"}';

    }
    /**
     * Deals with login, calls api returns back false for error, true for success
     */

    SignInOnly(){



          $("#error_log").hide();
          var GoToUrl     = $("#GoToUrl").attr("GoBackUrl");
          $.ajax({
            type          : "POST",
            url           : url+'userLogin.php',
            contentType   : "application/x-www-form-urlencoded;",
            data          : { "emailAddress":$('#emailAddress').val(),
                              "userPassword":$('#password').val(),
                              'action':'LOGIN'}
          }).done(function(response){

           var returned_json = JSON.parse(response);
            $("#inner").show();
            $("#home").hide();
            $('#navbar').collapse('hide');
            $('#nav_child').show();

            var response_result = returned_json['success'];
            var getBackError = returned_json['userInformation'].errorMsg


            if(response_result == false){
              $("#error_log").show();
              $("#error_log").html(getBackError);
            }else{

              if(GoToUrl=='Cart'){
                Dashboard.GetReferenceName();
              }else
                Dashboard.GoToDashBoard(returned_json['userInformation'].rfcoaxUserName);
            }

          });








    }

    /**
     * Deals with logout. Kills all sessions variables
     */

    LogoffOnly(){

    }

    /**
     * Deals with new registration.
     */

    SignUpOnly(){


    }

    /**
     * Deals with forgot password
     */

    ForgotPassword(){

    }



  /**
   *
   */


}
