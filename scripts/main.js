
$(document).ready(function() {
	$(".nav-bar a").each(function() {
        if ((window.location.pathname.indexOf($(this).attr('href'))) !== -1) {
            $(this).parent().addClass("active-page");
        }
        else
            $(this).parent().addClass("inactive-page");
    });
    
})