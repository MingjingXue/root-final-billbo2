$(function() {
	
	Parse.$ = jQuery;
	Parse.initialize("zb6FXGQF2Ea4T6pslS4FNlGYIvEpkUr6fibFe23Q", "5bisuJKLGz0KKnvOnlEkdkdRYcG5a0H0Qrm6cJG9");
	//from parse.com 

	 var TestObject = Parse.Object.extend("TestObject");
	 var testObject = new TestObject();

	 testObject.save(
	 {
	 	foo:"bar"
	 }).then(function(object)
	  {
	 	/*alert("Wlecome to BILLBO!");*/
	 }
	 );

 $('.bill-list').hide();
 $('.logout-show').hide();
  $('.form-signin').on('submit', function(e) {

  	 e.preventDefault();

  	 var data = $(this).serializeArray();
  	 username = data[0].value;
  	 password = data[1].value;
 

    
  	 Parse.User.logIn(username, password, {
  	 	success: function(user) {
  	 		$('.main-container').hide();
        $('.bill-list').show();
        $('.login-hide').hide();
        $('.logout-show').show();



  	 		var allQuery = new Parse.Query(Parse.Object.extend("myjson"));
  	 		allQuery.find( {
  	 			success: function(results) {
  	 				 for (var i = 0; i < results.length; i++) { 
                       var object = results[i];
                        
                        (function($) {
                             $('#results').append(

                              (object.get('instacheckImg'))?
                              '<div><img class="img col-xs-12" src="' + object.get('instacheckImg')._url + '"></div>':
                              '',

                              '<div class="billsdiv"><div>' + '<span>RestaurantName:&nbsp</span>' + object.get('RestaurantName') + '</div><div>' + '<br>' + '</div><div>' + '<span>Update:&nbsp</span>' + object.get('createdAt') + '</div><div>' + '<span>Email:&nbsp</span>' + object.get('email') + '<div></div>' + '<span>InstacheckItems:&nbsp</span>' + object.get('instacheckItems') + '</div><div>' + '<span>Total:&nbsp</span>' + object.get('total') +'<br><br>' + '</div></div>' 

                             /* "<div class='RestaurantName'>Restaurant Name</div>",
                              '<div class="RestaurantName-result">'+ object.get('RestaurantName') + '</div>',


                              '<br>',
                              "<div class='createdAt'>Create At</div>",
                              '<div class="createdAt-result">'+ object.get('createdAt') + '</div>',

                              "<div class='email'>Email</div>",
                              '<div class="email-result">' + object.get('email') + '</div>',

                              "<div class='InstacheckItems'>Items</div>",
                              '<div class="InstacheckItems-result">' + object.get('instacheckItems') + '</div>',

                              "<div class='total'>Total</div>",
                              '<div class="total-result">' + object.get('total') + '</div>'*/



                              );
                         



                         })(jQuery);  
                     
             }

    
  	 			},
  	 			error: function(object,error) {
  	 				console.log(error);
  	 			},
  	 		});



  	 	},
  	 	error: function(object, error) {
  	 		alert('Username or Password Wrong, Please try again!');
  	 	}
  	 });

  });

});

//(function($) {
                            // $('#results').append('<div><div>' + object.get('instacheckImg') + '</div><div>' + object.get('createdAt') + '</div><div>' + object.get('email') + '<div></div>' + object.get('instacheckItems') + '</div><div>' + '<br><br>' + '</div></div>' );