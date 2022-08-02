//Main.js
//SkyQ Infotech

$(document).ready(function(){

	//window.sr = new scrollReveal();
	
	//Scroll To Top Navigator
	$('body').append('<a href="#mainBannrs" class="scrollup smoothScroll" data-toggle="tooltip" data-placement="left" title="Go To Top"><i class="fa fa-arrow-up"></i></a>');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.scrollup').fadeIn("slow");
        } else {
            $('.scrollup').fadeOut("slow");
        }
    });

    //Smooth Scrolling jQuery
	$('#navbar a[href*=#]:not([href=#]), .smoothScroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	//Tooltip
	$('[data-toggle="tooltip"]').tooltip();
});


 
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-102218575-1', 'auto');
  ga('send', 'pageview');

 