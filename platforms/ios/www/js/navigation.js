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
        });
    }

    ViewCart(){
        $.ajax({
            type          : "POST",
            url           : url+'loadCart.php',

            contentType   : "application/x-www-form-urlencoded;",
        }).done(function(response){


          var form_param    = '';
          var param_div     = '';


          var shopping_cart        = '';
          var shopping_cart_head   = '';
          var shopping_cart_body   = '';
          var shopping_cart_foot   = '';


          form_param = ('<a href="index.html"><i class="fa fa-angle-left fa-5x" style="padding-top:0px;" aria-hidden="true"></i></a>');
 //          $.each(response["cart_items"], function(ind, cartItems) {
 //              param_div = param_div + '<div>';
 //            shopping_cart_body = shopping_cart_body+ '<tr><td data-th="Product"><div class="row">' +
 //               '<div class="col-sm-10"><h4 class="nomargin">'+cartItems.order_quantity+'</h4>' +'</div></div></td>' +
 //              '<td data-th="Price">'+cartItems.price_per_unit+'</td>' +
 //              '<td data-th="Price">'+cartItems.price_per_unit+'</td>' +
 //              '<td data-th="Quantity"><input type="number" class="form-control text-center" value="1"></td>' +
 //              '<td data-th="Subtotal" class="text-center">1.99</td>' +
 //              '<td class="actions" data-th="">' +
 //              '<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>' +
 //              '<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>' +
 //              '</td></tr>';
 // });
          form_param = form_param+'<div  align="center"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i><div class="page-header"><h4>VIEW CART</h4></div></div>';



           shopping_cart_head = '<table id="cart" class="table table-hover table-condensed"><thead>' +
             '<tr><th style="width:50%">Serial Number</th><th style="width:10%">Unit Price</th><th style="width:10%">Disc Price</th>'+
             '<th style="width:8%">Quantity</th><th style="width:22%" class="text-center">Subtotal</th>' +
             '<th style="width:10%"></th></tr></thead><tbody>';

          shopping_cart_body = '<tr><td data-th="Product"><div class="row">' +
            '<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>' +
            '<div class="col-sm-10"><h4 class="nomargin">Product 1</h4>' +
            '<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>' +
            '</div></div></td>' +
            '<td data-th="Price">$1.99</td>' +
            '<td data-th="Quantity"><input type="number" class="form-control text-center" value="1"></td>' +
            '<td data-th="Subtotal" class="text-center">1.99</td>' +
            '<td class="actions" data-th="">' +
            '<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>' +
            '<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>' +
            '</td></tr><tr><td data-th="Product"><div class="row">' +
            '<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>' +
            '<div class="col-sm-10"><h4 class="nomargin">Product 1</h4>' +
            '<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>' +
            '</div></div></td>' +
            '<td data-th="Price">$1.99</td>' +
            '<td data-th="Quantity"><input type="number" class="form-control text-center" value="1"></td>' +
            '<td data-th="Subtotal" class="text-center">1.99</td>' +
            '<td class="actions" data-th="">' +
            '<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>' +
            '<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>' +
            '</td></tr><tr><td data-th="Product"><div class="row">' +
            '<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>' +
            '<div class="col-sm-10"><h4 class="nomargin">Product 1</h4>' +
            '<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>' +
            '</div></div></td>' +
            '<td data-th="Price">$1.99</td>' +
            '<td data-th="Quantity"><input type="number" class="form-control text-center" value="1"></td>' +
            '<td data-th="Subtotal" class="text-center">1.99</td>' +
            '<td class="actions" data-th="">' +
            '<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>' +
            '<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>' +
            '</td></tr>';


            shopping_cart_foot ='</tbody><tfoot><tr class="visible-xs">' +
              '<td class="text-center"><strong>Total 1.99</strong></td></tr>' +
              '<tr><td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>' +
              '<td colspan="2" class="hidden-xs"></td>' +
              '<td class="hidden-xs text-center"><strong>Total $1.99</strong></td>' +
              '<td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>' +
              '</tr> </tfoot>';


            shopping_cart = shopping_cart_head  + shopping_cart_body + shopping_cart_foot + '</table>';


            $("#load-container").html('<div class="well well-sm">'+form_param+shopping_cart+JSON.parse(response)+'</div>');
        });
    }


    OrderWithQuote(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getQuoteOrder.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
        });
    }

    ContactUs(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getContactUs.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
        });
    }

    SignInOnly(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getLogin.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
        });
    }

    SignUpOnly(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getRegister.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
        });
    }

    ForgotPassword(){
        $.ajax({
            type          : "POST",
            url           : localurl+'getForgotPassword.html',
            contentType   : "application/x-www-form-urlencoded;"
        }).done(function(response){

            $("#load-container").html(response);
        });
    }

}
