(function ($) {
  "use strict";
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset() ? $(this).offset().top : 0;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return viewportBottom > elementBottom - 150;
  };

  $(document).on("ready", function () {
    $(document).on("scroll", () => {
      if ($("#contact-page").isInViewport()) {
        $(".primary-menu li").removeClass("active");
      }
    });

    /* Counter-JS */
    // $(".count").counterUp({
    //   delay: 10,
    //   time: 3000
    // });

    // $(".video-popup").magnificPopup({
    //   type: "iframe"
    // });

    /* Slick Nav Acitve */
    $(".primary-menu ul").slicknav();
    $(".slicknav_menu").prepend(
      '<a href="index.html" style="font-size: 2em"><span class="primary-color">ai</span></a>'
    );

    $(".single-service.box-1").prepend(
      '<span class="line"></span><span class="line"></span><span class="line"></span><span class="line"></span>'
    );

    /*-- Accordion-List --*/
    $(".accordion-content.in")
      .siblings()
      .addClass("active");
    $(".accordion")
      .find(".accordion-title")
      .on("click", function () {
        $(".accordion").removeClass("active");
        $(this).toggleClass("active");
        //Expand or collapse this panel
        $(this)
          .next()
          .slideToggle("fast");
        //Hide the other panels
        $(".accordion-content")
          .not($(this).next())
          .slideUp("fast");
      });

    // Select all links with hashes
    $(".scroll-link")
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .on("click", function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ?
            target :
            $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate({
                scrollTop: target.offset().top
              },
              1000,
              function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
  });
  /* Preloader Js
    ===================*/
  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });
})(jQuery);