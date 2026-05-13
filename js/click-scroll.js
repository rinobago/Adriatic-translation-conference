// jquery-click-scroll
// Updated to use each link's href target instead of hardcoded section order.

(function ($) {
    "use strict";

    var $navLinks = $(".navbar-nav .nav-item .nav-link.click-scroll");

    function getScrollOffset() {
        return ($(".navbar").outerHeight() || 0) + 10;
    }

    function setActiveLink() {
        var docScroll = $(document).scrollTop() + getScrollOffset() + 1;
        var activeIndex = 0;

        $navLinks.each(function (index) {
            var targetId = $(this).attr("href");
            if (!targetId || targetId.charAt(0) !== "#") {
                return;
            }

            var $target = $(targetId);
            if ($target.length && docScroll >= $target.offset().top) {
                activeIndex = index;
            }
        });

        $navLinks.removeClass("active").addClass("inactive");
        $navLinks.eq(activeIndex).addClass("active").removeClass("inactive");
    }

    $navLinks.on("click", function (e) {
        var targetId = $(this).attr("href");
        if (!targetId || targetId.charAt(0) !== "#") {
            return;
        }

        var $target = $(targetId);
        if (!$target.length) {
            return;
        }

        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $target.offset().top - getScrollOffset(),
            },
            300,
        );
    });

    $(document).on("scroll", setActiveLink);

    $(document).ready(function () {
        $navLinks.addClass("inactive");
        setActiveLink();
    });
})(window.jQuery);
