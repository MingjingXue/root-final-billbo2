
$(document).ready(function() {

$('.form-signin').on('submit',function(e){
	e.preventDefault();
	Parse.$ = jQuery;
	Parse.initialize("zb6FXGQF2Ea4T6pslS4FNlGYIvEpkUr6fibFe23Q", "5bisuJKLGz0KKnvOnlEkdkdRYcG5a0H0Qrm6cJG9");
	var user = new Parse.User();

	var data = $(this).serializeArray();
  	 	username = data[0].value;
  	 	password = data[1].value;

  	 	user.set("username", username);
		user.set("password", password);

			// other fields can be set just like with Parse.Object
		user.signUp(null, {
		  success: function(user) {
		  	alert('signup success!');
       			window.location.replace("login.html");
		    
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert('signup doesnt work');
		  }
		});

	});
	});