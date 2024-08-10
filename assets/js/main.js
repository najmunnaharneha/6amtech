(function ($) {
   "use strict";

   $(document).ready(function () {
      // ---- Product tab start
      var $productTabs = $("#productTabs");
      var $arrowLeft = $(".arrow-left");
      var $arrowRight = $(".arrow-right");

      function updateArrows() {
         var scrollLeft = $productTabs.scrollLeft();
         var maxScrollLeft = $productTabs[0].scrollWidth - $productTabs.outerWidth();

         if (scrollLeft > 0) {
            $arrowLeft.show();
         } else {
            $arrowLeft.hide();
         }

         if (scrollLeft < maxScrollLeft) {
            $arrowRight.show();
         } else {
            $arrowRight.hide();
         }

         // Hide arrows if all items are visible
         if ($productTabs[0].scrollWidth <= $productTabs.outerWidth()) {
            $arrowLeft.hide();
            $arrowRight.hide();
         }
      }

      $arrowLeft.on("click", function () {
         $productTabs.animate({ scrollLeft: "-=100px" }, "smooth", updateArrows);
      });

      $arrowRight.on("click", function () {
         $productTabs.animate({ scrollLeft: "+=100px" }, "smooth", updateArrows);
      });

      $productTabs.on("scroll", updateArrows);
      $(window).on("resize", updateArrows);

      updateArrows();
      // ------ Product tab end

      // ------ Dropdown menu start
      $browseCategoryButton.on("click", function () {
         $headerBottom.toggleClass("nav-collapsed");
      });
      // ------ Dropdown menu end
   });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
   const browseCategoryButton = document.querySelector(".btn-group .btn");
   const headerBottom = document.querySelector(".header-bottom");

   browseCategoryButton.addEventListener("click", function () {
      headerBottom.classList.toggle("nav-collapsed");
   });
});
