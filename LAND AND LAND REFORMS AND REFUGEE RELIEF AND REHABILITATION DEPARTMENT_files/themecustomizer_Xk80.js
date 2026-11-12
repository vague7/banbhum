// *** TO BE CUSTOMISED ***

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{

  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
  if(css_title == 'white'){
	  $.post("themePage.action",{theme_requested : "white",ajax : 'true'},function(data){
		  document.getElementById('main-logo').src='\/BanglarBhumi\/images\/bl.png';
	  },"json");
  	  //document.getElementById('imgAlert').src='/BanglarBhumi/images/bell.png';
  }
  if(css_title == 'pink'){
	  $.post("themePage.action",{theme_requested : "pink",ajax : 'true'},function(data){
		  document.getElementById('main-logo').src='\/BanglarBhumi\/images\/br.png';
	  },"json");
	  //document.getElementById('imgAlert').src='/BanglarBhumi/images/bell_brown.png';
  }
  if(css_title == 'green'){
	  $.post("themePage.action",{theme_requested : "green",ajax : 'true'},function(data){
		  document.getElementById('main-logo').src='\/BanglarBhumi\/images\/ge.png';
	  },"json");
	  //document.getElementById('imgAlert').src='/BanglarBhumi/images/bell_green.png';
  }
  if(css_title == 'red'){
	  $.post("themePage.action",{theme_requested : "red",ajax : 'true'},function(data){},"json");
	  document.getElementById('main-logo').src='\/BanglarBhumi\/images\/rd.png';
	  //document.getElementById('imgAlert').src='/BanglarBhumi/images/bell_green.png';
  }
  if(css_title == 'black'){
	  $.post("themePage.action",{theme_requested : "black",ajax : 'true'},function(data){
		  document.getElementById('main-logo').src='\/BanglarBhumi\/images\/blk.png';
	  },"json");
	  //document.getElementById('imgAlert').src='/BanglarBhumi/images/bell_green.png';
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
   
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
   
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}

