(function ($) {
   "use strict";

   $(document).ready(function () {
      // ---- Product tab start
      const $productTabs = $("#productTabs");
      const $arrowLeft = $(".arrow-left");
      const $arrowRight = $(".arrow-right");

      function updateArrows() {
         const scrollLeft = $productTabs.scrollLeft();
         const maxScrollLeft = $productTabs[0].scrollWidth - $productTabs.outerWidth();

         $arrowLeft.toggle(scrollLeft > 0);
         $arrowRight.toggle(scrollLeft < maxScrollLeft);

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
      const $browseCategoryButton = $(".btn-group .btn");
      const $headerBottom = $(".header-bottom");

      $browseCategoryButton.on("click", function () {
         $headerBottom.toggleClass("nav-collapsed");
      });
      // ------ Dropdown menu end
   });
   // ------ Offer Modal start
   document.addEventListener("DOMContentLoaded", function () {
      const closeModalButton = document.getElementById("closeModal");
      const offerModal = document.getElementById("offerModal");

      closeModalButton.addEventListener("click", function () {
         offerModal.classList.add("hidden");
      });
   });
   // ------ Offer Modal end
})(jQuery);
