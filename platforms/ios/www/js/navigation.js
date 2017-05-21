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

            $("#load-container").html(response);
        });
    }

    SearchPage(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getSearch.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
            Hamburger.initialize();

        });
    }

    ViewCart(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getCart.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
            Hamburger.initialize();

        });
    }


    OrderWithQuote(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getQuoteOrder.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
            Hamburger.initialize();

        });
    }

    ContactUs(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getContactUs.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
            Hamburger.initialize();

        });
    }

    SignInOnly(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getLogin.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
            Hamburger.initialize();

        });
    }

    SignUpOnly(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getRegister.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
            Hamburger.initialize();

        });
    }

    ForgotPassword(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getForgotPassword.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
            Hamburger.initialize();
            
        });
    }

}
