(function(jQuery) {
    "use strict";
    jQuery('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: (target.offset().top - 70)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    jQuery('.js-scroll-trigger').click(function() {
        jQuery('.navbar-collapse').collapse('hide');
    });
    jQuery('body').scrollspy({
        target: '#mainNav',
        offset: 100
    });
    var navbarCollapse = function() {
        if (jQuery("#mainNav").offset().top > 100) {
            jQuery("#mainNav").addClass("navbar-shrink");
            jQuery("#navbar-logo").attr("src", "./dist/img/Black_Logo.svg");
        } else {
            jQuery("#mainNav").removeClass("navbar-shrink");
            jQuery("#navbar-logo").attr("src", "./dist/img/White_Logo.svg");
        }
    };
    navbarCollapse();
    jQuery(window).scroll(navbarCollapse);
})(jQuery);