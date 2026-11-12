// JavaScript Document



//$(function(){
//    $(".dropdown").hover(            
//            function() {
//                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
//                $(this).toggleClass('open');
//                $('b', this).toggleClass("caret caret-up");                
//            },
//            function() {
//                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
//                $(this).toggleClass('open');               
//            });
//    });
//      data offset code
//	
//	$('#nav').affix({
//      offset: {
//        top: $('header').height()
//      }
//});


//back to top

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        /*$('#back-to-top').tooltip('show');*/

});

//sticky note

function visibleOff(obj) {

    var el = document.getElementById(obj);

        el.style.display = 'none';

}


// nivo slider
$(window).load(function() {
	if($('#slider').length)
		$('#slider').nivoSlider();
});
	

// youtube video thumb

function youtube(){
	$("#youtube_poster").html('<iframe width="100%" height="315" src="https://www.youtube.com/embed/gLWMFtymXAk" frameborder="0" allowfullscreen></iframe> ');
	}

// div hide show

//$(document).ready(function(){
//    $(".banner_toggle").click(function(){
//        $(".hidebanner, .hidebannertext").fadeToggle('slow');
//		$(this).children('.fa-chevron-down').toggleClass("rotate1 rotate2");
//    });
//});	

$(document).ready(function(){
    $('.banner_toggle').click(function(){
		$('.hidebanner, #off').slideToggle('slow');
       if($(this).text() == 'Show Banner')
       {
		  $('.hidebannertext').show(1300);
		   $(this).text('Hide Banner');
		   $('#slider').data('nivoslider').start();
       }
       else
       {
		   $('.hidebannertext').hide(400);
           $(this).text('Show Banner');
		   $('#slider').data('nivoslider').stop(); 
		   
       }
           });

});	
	
	

// pop up div


$(document).ready(function(){
	
  
  $("#asd").click(function(){
		$(this).fadeOut();
    $("#popup").fadeOut();
	$(".splash-screen").fadeOut();
	$('body').css('overflow','hidden');
	});
  
  
  $("#close2").click(function(){
		$(".splash-screen").fadeOut();
    $("#popup").fadeOut();
	});
  
});

//  vertical slider



    $(document).ready(function () {

    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
	
	
	$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
	
	
});


$(document).ready(function() {
   $('.dropdown-submenu').on('click', function(){
   $(this).parent().addClass('open');
  });
});

  // Responsive nav
  
  

    $(document).ready(function() {
        //Horizontal Tab
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });

        // Child Tab
        $('#ChildVerticalTab_1, #ChildVerticalTab_2, #ChildVerticalTab_3').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: '#fff', // background color for active tabs in this group
            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
            active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
        });

        //Vertical Tab
        $('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    });




	
	