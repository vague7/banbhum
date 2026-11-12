$(document).ready(function () {
   var originalSize = $('div').css('font-size');
   var top_row_lineheight = $('div.top_row').css('line-height');
   var footer_ul_lineheight = $('footer ul').css('line-height');
   var otherlinkssra_fontsize = $('div.otherlinkssra a').css('font-size');
   var th_header_size = $('th').css('font-size');
   var span_size = $('span.text').css('font-size');
   var top_row_ul_p = $('div.otherlinks p').css('font-size');
   var afterLoginLabel_span= $('div#afterLoginLabel span').css('font-size');
   var afterLoginLabel_label= $('div#afterLoginLabel label').css('font-size');
    // reset
    $(".resetMe1").click(function () {
        $('div').css('font-size', originalSize);
        $('div.counter').css('font-size', originalSize);
        $('td').css('font-size', originalSize);
        $('label').css('font-size', originalSize);
        $('b').css('font-size', originalSize);
        $('h3').css('font-size', originalSize);
        $('p').css('font-size', originalSize);
        $('span.text').css('font-size', span_size);
        $('div.top_row').css('line-height', top_row_lineheight);
        $('footer ul').css('line-height', footer_ul_lineheight);
        $('div.otherlinkssra').css('font-size', otherlinkssra_fontsize);
        $('div.otherlinks p').css('font-size',top_row_ul_p);
        $('div#afterLoginLabel span').css('font-size', afterLoginLabel_span);
        $('div#afterLoginLabel label').css('font-size',afterLoginLabel_label);
        $('th').css('font-size', th_header_size);
    });

    // Increase Font Size
    $(".increase1").click(function () {
        var currentSize = $('div').css('font-size');        
        var or=parseInt(originalSize)+5 
        if (parseFloat(currentSize) <= or) {           
        	var currentSize = parseFloat(currentSize) + 1;
            $('div').css('font-size', currentSize);
            $('div.counter').css('font-size', currentSize);
            $('th').css('font-size', currentSize);
            $('td').css('font-size', currentSize);
            $('label').css('font-size', currentSize);
            $('h3').css('font-size', currentSize);
            $('b').css('font-size', currentSize);
            $('p').css('font-size', currentSize);
            $('span.text').css('font-size', currentSize);
            $('div.footer-copyright p').css('font-size', originalSize);
            $('div.footer-copyright span').css('font-size', originalSize);
            $('div.top_row').css('line-height', top_row_lineheight);
            $('footer ul').css('line-height', footer_ul_lineheight);
            $('div.otherlinkssra').css('font-size', otherlinkssra_fontsize);
            $('div.otherlinks p').css('font-size',top_row_ul_p);
            $('div#afterLoginLabel span').css('font-size', afterLoginLabel_span);
            $('div#afterLoginLabel label').css('font-size',afterLoginLabel_label);
            var r = parseFloat(currentSize) +6;
            $('h1').css('font-size', r);
            $('h3').css('font-size', r);
            $('th').css('font-size', r);
        }
        return false;
    });

    // Decrease Font Size
    $(".decrease1").click(function () {
        var currentFontSize = $('div').css('font-size');
        var currentSize = $('div').css('font-size');    
        var or=parseInt(originalSize)-4       
         if (parseFloat(currentSize) >= or) {
            var currentSize = parseFloat(currentSize) -1;
            $('div').css('font-size', currentSize);
            $('div.counter').css('font-size', currentSize);
            $('td').css('font-size', currentSize);
            $('label').css('font-size', currentSize);
            $('h3').css('font-size', currentSize);
            $('b').css('font-size', currentSize);
            $('p').css('font-size', currentSize);
            $('span.text').css('font-size', currentSize);
            $('div.footer-copyright p').css('font-size', originalSize);
            $('div.footer-copyright span').css('font-size', originalSize);
            $('div.top_row').css('line-height', top_row_lineheight);
            $('footer ul').css('line-height', footer_ul_lineheight);
            $('div.otherlinkssra').css('font-size', otherlinkssra_fontsize);
            $('div.otherlinks p').css('font-size',top_row_ul_p);
            $('div#afterLoginLabel span').css('font-size', afterLoginLabel_span);
            $('div#afterLoginLabel label').css('font-size',afterLoginLabel_label);
            var r = parseFloat(currentSize) -2;
            $('h1').css('font-size', r);
            $('h3').css('font-size', r);
            $('th').css('font-size', r);
            
        }
        return false;
    });
});