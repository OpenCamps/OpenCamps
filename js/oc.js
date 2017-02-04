
$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 25) {
                    $("div.fixed").css('background', 'rgba(0,25,49,0.60)');
                    $("div#tagline").css('background', 'rgba(0,25,49,0.60)');
// OC Gray          $("div.fixed").css('background', 'rgba(164,164,164,0.70)');
// OC Gray          $("div#tagline").css('background', 'rgba(164,164,164,0.90)');
// UN Blue          $("div.fixed").css('background', 'rgba(91,146,229,0.70)');
// UN Blue          $("div#tagline").css('background', 'rgba(91,146,229,0.90)');
                    $("div#tagline .inner").css('display', 'block');
                    $("div#tagline").css('border-bottom', '1px solid #001931');
                } else {
                    $("div.fixed").css('background-color', 'transparent');
                    $("div#tagline").css('background', 'transparent');
                    $("div#tagline").css('border-bottom', 'none');
                    $("div#tagline .inner").css('display', 'none');
                }
            });
        });
