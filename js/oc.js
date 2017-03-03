
$(document).ready(function(){       
	var scroll_pos = 0;
	$(document).scroll(function() { 
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 25) {
			$("div.fixed").css('background', 'rgba(0,25,49,0.60)');
			$("div#tagline").css('background', 'rgba(0,25,49,0.60)');
//    $("div.fixed").css('background', 'rgba(164,164,164,0.70)');   OC Gray
//    $("div#tagline").css('background', 'rgba(164,164,164,0.90)'); OC Gray
//    $("div.fixed").css('background', 'rgba(91,146,229,0.70)');    OC Blue 
//    $("div#tagline").css('background', 'rgba(91,146,229,0.90)');  OC Blue
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


function toggleClass(element,target,fade){

	if(target.className == "summary-wrapper-collapsed"){
		target.className = "summary-wrapper-open";
		fade.className = "summary-open";
		element.innerHTML = "<i class=\"fa fa-angle-up\"></i> Collapse Session Summary";

	} else {
		target.className = "summary-wrapper-collapsed";
		fade.className = "summary-closed";
		element.innerHTML = "<i class=\"fa fa-angle-down\"></i> View Full Session Summary";
	}
}


function toggleBio(element,target,fade){

	if(target.className == "bio-wrapper-collapsed"){
		target.className = "bio-wrapper-open";
		fade.className = "bio-open";
		element.innerHTML = "<i class=\"fa fa-angle-up\"></i> Collapse Bio";

	} else {
		target.className = "bio-wrapper-collapsed";
		fade.className = "bio-closed";
		element.innerHTML = "<i class=\"fa fa-angle-down\"></i> View Bio";
	}
}