$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("3HBsy8qXrSR4LbWEchW1vTFNNi8hB1Gx12QTvRct", "OL6MBLaOBkYwsXv0XepGQS59btezExTcprfrxgtc");
	//Parse.initialize("ZTh4lArJFksTGuMLZ6sAaSyx1KOzCo3lL1QhwER7", "X2lqnhHPNKM5pkNKxZaWQlbZSMWItYxD7eT4Tleg");
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	 testObject.save({foo: "bar2"}).then(function(object) {
	  alert("yay! it worked");
	}); 
	
	$('.form-signin').on('submit', function(e) {
 
	    // Prevent Default Submit Event
	    e.preventDefault();
 
	    // Get data from the form and put them into variables
	    var data = $(this).serializeArray(),
	        username = data[0].value,
	        password = data[1].value;
 
	    // Call Parse Login function with those variables
	    Parse.User.logIn(username, password, {
	        // If the username and password matches
	        success: function(user) {
				
				var allQuery=new Parse.Query(Parse.Object.extend("TestObject"));
 				allQuery.find({
		          success:function(results){
		            
					  for (var i = 0; i < results.length; i++) { 
					             var object = results[i];
				                (function($) {
				                     $('#results-table').append(
				                     	'<tr><td>' + object.get('foo') + '</td><td>' + object.get('createdAt') + '</td></tr>');

				                 })(jQuery);	
		 				         
					   } 
				},	   
				 
				  

				  error: function(object, error) {
				     console.log(error);
				  }
				}); 
				
				 
				
				 
	            alert('Welcome!');
	        },
	        // If there is an error
	        error: function(user, error) {
	            console.log("The user is not found in the Cloud DB");
	        }
	    });
		
		
		 
	});










