/**
 * Created by ash on 5/26/17.
 */


  class Shopping {

    ViewCart(){
      // $.ajax({
      //     type          : "POST",
      //     url           : url+'loadCart.php',
      //
      //     contentType   : "application/x-www-form-urlencoded;",
      // }).done(function(response) {
      //
      // });

      var response ='{"success":true,"cart_items":' +
        '[{"id":"14809","serial_number":"S086MMHF-12","order_quantity":"1","price_per_unit":"38","user_id":"0","session_id":"362727890cfc59f5de51d2d99233fb67","date_added":"05/24/2017 20:56:48","price_breakdown":" 1-9 $38.00, 10-24 $36.10, 25-49 $34.20, 50-99 $32.30, 100-249 $30.40, 250-499 $28.50, 500+ $26.60 USD each","valid_usa":"0"' +
        '},' +
        '{"id":"14810","serial_number":"V086FFHF-12","order_quantity":"1","price_per_unit":"196","user_id":"0","session_id":"362727890cfc59f5de51d2d99233fb67","date_added":"05/24/2017 21:25:11","price_breakdown":" 1-9 $196.00, 10-24 $186.20, 25-49 $176.40, 50-99 $166.60, 100-249 $156.80, 250-499 $147.00, 500+ $137.20 USD each","valid_usa":"0"}' +
        ']' +
        '}';


      response = (JSON.parse(response));

      var form_param    = '';
      var param_div     = '';


      var shopping_cart        = '';
      var shopping_cart_head   = '';
      var shopping_cart_body   = '';
      var shopping_cart_foot   = '';

      var sub_total = 0;
      form_param = ('<a href="index.html"><i class="fa fa-angle-left fa-5x" style="padding-top:0px;" aria-hidden="true"></i></a>');
      $.each(response["cart_items"], function(ind, cartItems) {
        param_div = param_div + '<div>';
        sub_total = sub_total + (cartItems.price_per_unit*cartItems.order_quantity);
        shopping_cart_body = shopping_cart_body+ '<tr style="border-bottom: 1px solid #ddffdd;"><td><div class="row">' +
          '<div class="col-sm-10"><h4 class="nomargin">'+cartItems.serial_number+'</h4>' +'</div></div></td>' +
          '<td data-th="Price">'+cartItems.price_per_unit+'</td>' +
          '<td data-th="Price">'+cartItems.price_per_unit+'</td>' +
          '<td data-th="Quantity"><input type="number" class="form-control text-center" value="1"></td>' +
          '<td data-th="Subtotal" class="text-center">'+sub_total+'</td>' +
          '<td class="actions" data-th="">' +
          '<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>' +
          '<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>' +
          '</td></tr>';
      });
      form_param = form_param+'<div  align="center"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i><div class="page-header"><h4>VIEW CART</h4></div></div>';



      shopping_cart_head = '<table id="cart"><thead>' +
        '<tr><th style="width:50%">Serial Number</th><th style="width:10%">Unit Price</th><th style="width:10%">Disc Price</th>'+
        '<th style="width:8%">Quantity</th><th style="width:22%" class="text-center">Subtotal</th>' +
        '<th style="width:10%"></th></tr></thead><tbody>';
      //
      // shopping_cart_body = '<tr><td data-th="Product"><div class="row">' +
      //   '<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>' +
      //   '<div class="col-sm-10"><h4 class="nomargin">Product 1</h4>' +
      //   '<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>' +
      //   '</div></div></td>' +
      //   '<td data-th="Price">$1.99</td>' +
      //   '<td data-th="Quantity"><input type="number" class="form-control text-center" value="1"></td>' +
      //   '<td data-th="Subtotal" class="text-center">1.99</td>' +
      //   '<td class="actions" data-th="">' +
      //   '<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>' +
      //   '<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>' +
      //   '</td></tr><tr><td data-th="Product"><div class="row">' +
      //   '<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>' +
      //   '<div class="col-sm-10"><h4 class="nomargin">Product 1</h4>' +
      //   '<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>' +
      //   '</div></div></td>' +
      //   '<td data-th="Price">$1.99</td>' +
      //   '<td data-th="Quantity"><input type="number" class="form-control text-center" value="1"></td>' +
      //   '<td data-th="Subtotal" class="text-center">1.99</td>' +
      //   '<td class="actions" data-th="">' +
      //   '<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>' +
      //   '<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>' +
      //   '</td></tr><tr><td data-th="Product"><div class="row">' +
      //   '<div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>' +
      //   '<div class="col-sm-10"><h4 class="nomargin">Product 1</h4>' +
      //   '<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>' +
      //   '</div></div></td>' +
      //   '<td data-th="Price">$1.99</td>' +
      //   '<td data-th="Quantity"><input type="number" class="form-control text-center" value="1"></td>' +
      //   '<td data-th="Subtotal" class="text-center">1.99</td>' +
      //   '<td class="actions" data-th="">' +
      //   '<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>' +
      //   '<button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>' +
      //   '</td></tr>';


      shopping_cart_foot ='</tbody><tfoot><tr class="visible-xs">' +
        '<td class="text-center"><strong>Total $'+sub_total+'</strong></td></tr>' +
        '<tr><td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>' +
        '<td colspan="2" class="hidden-xs"></td>' +
        '<td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>' +
        '</tr> </tfoot>';


      shopping_cart = shopping_cart_head  + shopping_cart_body + shopping_cart_foot + '</table>';


      $("#load-container").html('<div class="well well-sm">'+form_param+shopping_cart+response+'</div>');
      // });
    }

    AddCart(){

    }
  }