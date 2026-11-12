$(window).on('load', function() { // makes sure the whole site is loaded 
			$('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(100).css({'overflow':'visible'});
		});


var a = 0;
$(window).scroll(function() {

  var oTop = $('body').offset().top - window.innerHeight; // Saswata Change for scroll bar.
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


$(document).ready(function() {	
$('#latestNewsOrNotification').click(function() {
	$.ajax({
		type : "POST",
		url : "fetchLatestNewsOrNotification",
		success : function(response, textStatus) {
			$('#latestNewsDiv').html(response);
			document.getElementById("mySidenav").style.width = "250px";
			$('#latestNewsDiv').show();

		},
		error : function(jqXHR, exception) {
			$('#latestNewsDiv').html(exception);
		}
	});
})
});



function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

 
    
    function ValidRegistrationCaptcha(){
        var str1 = removeSpaces(document.getElementById('regCaptcha').value);
        var str2 = removeSpaces(document.getElementById('regInputCaptcha').value);
        if (str1 == str2) return true;        
        return false;
        
    }


    
