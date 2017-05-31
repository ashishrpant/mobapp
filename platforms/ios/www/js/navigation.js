/**
 * Created by ashish on 4/26/17.
 */

class Navigation {

    HomePage(){

        $.ajax({
            type          : "POST",
            url           : localurl+'getHome.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#inner").hide().removeClass('rc--inner_header');
            $("#home").show();
            $('#navbar').collapse('hide');
            $('#nav_child').hide();
            $("#load-container").html(response);
        });
    }

    SearchPage(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getSearch.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){
            $("#inner").show().addClass('rc--inner_header');
            $("#home").hide();
            $('#navbar').collapse('hide');
            $('#nav_child').show();
            $("#load-container").html(response);
        });
    }


    OrderWithQuote(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getQuoteOrder.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response) {
            $("#inner").show().addClass('rc--inner_header');
            $("#home").hide();
            $('#navbar').collapse('hide');
            $('#nav_child').show();

            $("#load-container").html(response);
        });
    }

    ContactUs(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getContactUs.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response) {
            $("#inner").show().addClass('rc--inner_header');
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
            $("#load-container").html(response);
        });
    }

    SignUpOnly(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getRegister.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response) {
            $("#inner").show().addClass('rc--inner_header');
            $("#home").hide();
            $('#navbar').collapse('hide');
            $('#nav_child').show();
            $("#load-container").html(response);
        });
    }

    ForgotPassword(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getForgotPassword.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response) {
            $("#inner").show().addClass('rc--inner_header');
            $("#home").hide();
            $('#navbar').collapse('hide');
            $('#nav_child').show();
            $("#load-container").html(response);
        });
    }

}
