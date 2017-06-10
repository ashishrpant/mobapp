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

            // assign active class to footer navigation
            var activeNavigationClass = 'rc_footer_active_nav',
                footerNavigationElem = $('.rc_inner_footer--js');

            footerNavigationElem.find('.' + activeNavigationClass)
                                .removeClass(activeNavigationClass);
            footerNavigationElem.find('.search')
                                .addClass(activeNavigationClass)

            $("#load-container").html(response);
        });
    }


    OrderWithQuote() {
        $.ajax({
            type          : "POST",
            url           : localurl+'getQuoteOrder.html',
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
            footerNavigationElem.find('.quote')
                                .addClass(activeNavigationClass)

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

            // assign active class to footer navigation
            var activeNavigationClass = 'rc_footer_active_nav',
                footerNavigationElem = $('.rc_inner_footer--js');

            footerNavigationElem.find('.' + activeNavigationClass)
                                .removeClass(activeNavigationClass);
            footerNavigationElem.find('.contact')
                                .addClass(activeNavigationClass)

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


            // assign active class to footer navigation
            var activeNavigationClass = 'rc_footer_active_nav',
                footerNavigationElem = $('.rc_inner_footer--js');

            footerNavigationElem.find('.' + activeNavigationClass)
                                .removeClass(activeNavigationClass);

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

            var activeNavigationClass = 'rc_footer_active_nav',
                footerNavigationElem = $('.rc_inner_footer--js');

            footerNavigationElem.find('.' + activeNavigationClass)
                                .removeClass(activeNavigationClass);


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

            var activeNavigationClass = 'rc_footer_active_nav',
                footerNavigationElem = $('.rc_inner_footer--js');

            footerNavigationElem.find('.' + activeNavigationClass)
                                .removeClass(activeNavigationClass);


            $("#load-container").html(response);
        });
    }

    // AddActiveClassOnFooter (addActiveClassElem, isPageClass) {
    //   // assign active class to footer navigation
    //   var activeNavigationClass = 'rc_footer_active_nav',
    //       footerNavigationElem = $('.rc_inner_footer--js');
    //
    //   footerNavigationElem.find('.' + activeNavigationClass)
    //                       .removeClass(activeNavigationClass);
    //
    //
    //   // if page is part of footer navigation add active
    //   if (isPageClass) {
    //     footerNavigationElem.find(addActiveClassElem)
    //                         .addClass(activeNavigationClass);
    //   }
    // }

}
