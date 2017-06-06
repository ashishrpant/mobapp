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
     * Deals with login, calls api returns back false for error, true for success
     */

    SignInOnly(){

        //console.log("testing");
          var data = $('#userForm').serialize().split("&");

          /**
           * Converting the serialized data into JSON string.
           */

          var obj={};
          for(var key in data)
          {
            obj[data[key].split("=")[0]] = data[key].split("=")[1];
          }


          console.log(obj);
          var emailAddress           = obj.emailAddress;
          var password               = obj.password;

          console.log(data);
          $.ajax({
            type          : "POST",
            url           : url+'userLogin.php',
            contentType   : "application/x-www-form-urlencoded;",
            data          : { "emailAddress":emailAddress,
                              "password":password,
                              'action':'LOGIN'}
          }).done(function(response){
              console.log("Form submitted")

            $("#inner").hide().removeClass('rc--inner_header');
            $("#home").show();
            $('#navbar').collapse('hide');
            $('#nav_child').hide();
            $("#load-container").html(response);
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




}
