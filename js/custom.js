(function ($) {
    "use strict";

    // NAVBAR
    $(".navbar-nav .nav-link").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // CUSTOM LINK
    $(".custom-link").click(function () {
        var el = $(this).attr("href");
        var elWrapped = $(el);
        var header_height = $(".navbar").height() + 10;

        scrollToDiv(elWrapped, header_height);
        return false;

        function scrollToDiv(element, navheight) {
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop - navheight;

            $("body,html").animate(
                {
                    scrollTop: totalScroll,
                },
                300,
            );
        }
    });

    const splide = new Splide(".splide", {
        type: "loop",
        drag: "free",
        focus: "center",
        gap: "16px",
        perPage: 3,
        breakpoints: {
            990: {
                perPage: 2,
            },
            576: {
                perPage: 1,
            },
        },
        autoScroll: {
            speed: 1,
        },
    });

    splide.mount(window.splide.Extensions);

    const lightbox2023 = GLightbox({
        selector: '[data-gallery="gallery-2023"]',
        touchNavigation: true,
        loop: true,
        zoomable: true,
    });

    const lightbox2024 = GLightbox({
        selector: '[data-gallery="gallery-2024"]',
        touchNavigation: true,
        loop: true,
        zoomable: true,
    });

    const lightbox2025 = GLightbox({
        selector: '[data-gallery="gallery-2025"]',
        touchNavigation: true,
        loop: true,
        zoomable: true,
    });
})(window.jQuery);
