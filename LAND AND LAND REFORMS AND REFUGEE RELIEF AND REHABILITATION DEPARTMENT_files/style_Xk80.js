$(document).ready(function() {
	$('#blockMouza').click(function() {	
				$.get('viewBlockMouzaAction',
						function(html) {								
							$('#map-modal .banglamap-container')
									.html(html);
							$('#map-modal').modal('show');
						});
					})
		});

$(document).ready(function() {
	$('#signIn').click(function() {			
				$.post('viewLoginAreaAction',
							function(html) {										
								$('#login-modal .loginmodal-container')
										.html(html);
								//DrawLoginCaptcha();
								$('#login-modal').modal('show');
							});
			})
});

$(document).ready(function() {
	$('#changePassword').click(function() {	
				$.get('viewChangePasswordAction',
							function(html) {										
								$('#login-modal .loginmodal-container')
										.html(html);
								//DrawLoginCaptcha();
								$('#login-modal').modal('show');
							});
			})
});

$(document).ready(function() {
	$('#adminsignIn').click(function() {	
				$.get('viewAdminLoginAreaAction',
							function(html) {										
								$('#admin-login-modal .admin-loginmodal-container')
										.html(html);
								//DrawLoginCaptcha();
								$('#admin-login-modal').modal('show');
							});
			})
});


/*
$(document).ready(function() {
	$('#knwurProperty').click(function() {	
				$.get('viewLoginAreaAction',
							function(html) {										
								$('#login-modal .loginmodal-container')
										.html(html);
								//DrawLoginCaptcha();
								$('#login-modal').modal('show');
							});
			})
});*/

$(document).ready(function() {
	$('#citiServ').click(function() {	
				$.post('viewLoginAreaAction',
							function(html) {										
								$('#login-modal .loginmodal-container')
										.html(html);
								////DrawLoginCaptcha();
								$('#login-modal').modal('show');
							});
			})
});

$(document).ready(function() {
	$('.signUp').click(function() {	
		$('#login-modal').modal('hide');
				$.get('viewRegistrationAreaAction',
							function(html) {								
								$('#signup-modal .signUpmodal-container')
										.html(html);
								DrawRegistrationCaptcha();
								$('#signup-modal').modal('show');
							});
			})
});

$(document).ready(function() {
	$('#forgetPasssword').click(function() {
		$('#login-modal').modal('hide');
				$.post('viewPasswordRecoveryArea',
							function(html) {								
								$('#forgot-modal .forgotmodal-container')
										.html(html);
								$('#forgot-modal').modal('show');
							});
			})
});


$(document).ready(function() {
	$('#resetpasssword').click(function() {
		$('#login-modal').modal('hide');
				$.post('viewPasswordRecoveryArea',
							function(html) {								
								$('#forgot-modal .forgotmodal-container')
										.html(html);
								$('#forgot-modal').modal('show');
							});
			})
});


function DrawLoginCaptcha()
{
	var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','2','3','4','5','6','7','8','9');
	var a = Math.ceil(Math.random() * 9)+ '';
    var b = alpha[Math.floor(Math.random() * alpha.length)];       
    var c = Math.ceil(Math.random() * 9)+ '';  
    var d = alpha[Math.floor(Math.random() * alpha.length)]; 
    var e = Math.ceil(Math.random() * 9)+ '';  
    var f = alpha[Math.floor(Math.random() * alpha.length)]; 
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f ;
    document.getElementById("txtCaptcha").value = code;
    
    //alert(code);
    /*fetch('setCaptcha.action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ captcha: code })
    });*/
}

function DrawRegistrationCaptcha()
{
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','2','3','4','5','6','7','8','9');
	var a = Math.ceil(Math.random() * 9)+ '';
    var b = alpha[Math.floor(Math.random() * alpha.length)];       
    var c = Math.ceil(Math.random() * 9)+ '';  
    var d = Math.ceil(Math.random() * 9)+ '';  
    var e = Math.ceil(Math.random() * 9)+ '';  
    var f = alpha[Math.floor(Math.random() * alpha.length)]; 
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f;
	document.getElementById("regCaptcha").value = code;
}

function exitBsk(userType){
	if(userType=="BSK"){
		$.post('externalLogoutAction',
				function(html) {								
					window.location.href = "https://bsk.wb.gov.in/bskoperator";
				});
	}else{
		window.location.href = "https://banglarbhumi.gov.in/BanglarBhumi/Home.action";
		//window.location.href = "http://localhost:8080/BanglarBhumi/Home";
	}
}