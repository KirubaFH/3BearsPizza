
$(document).ready(function () {

    // ----------- sticky header -----------
    $("header").sticky({ topSpacing: 0 });


    // ----------- search section height adjustment -----------
    function adjustSearchHeight() {
        var windowHeight = $(window).height();
        var headerHeight = $("header").outerHeight();

        $(".search-section").css({
            height: windowHeight - headerHeight
        });
    }

    // Initial call
    adjustSearchHeight();

    // Recalculate on resize & orientation change
    $(window).on("resize orientationchange", function () {
        adjustSearchHeight();
    });

    // ----------- smooth scroll to section -----------
   $('.page-wrapper .head-rht a[href^="#"]').on('click', function (e) {
        var targetId = $(this).attr('href');

        // Check valid target
        if (targetId.length > 1 && $(targetId).length) {
            e.preventDefault();

            var headerHeight = $('.page-wrapper header').outerHeight();
            var targetOffset = $(targetId).offset().top - headerHeight;

            $('html, body').animate({
                scrollTop: targetOffset
            }, 0);
        }
    });

});
