// JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Scroll effect for the header navigation

document.addEventListener("DOMContentLoaded", function () {
  let nav_autohide = document.getElementById("navbar_top");
  let menu_collapse = document.getElementById("navmenu");
  let btn_collapse = document.getElementsByClassName("navbar-toggler")[0];
  let last_scroll_top = 0;
  if (nav_autohide) {
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        nav_autohide.classList.add("scrolled-up");
        nav_autohide.classList.remove("scrolled-down");
      } else {
        nav_autohide.classList.add("scrolled-down");
        nav_autohide.classList.remove("scrolled-up");
      }
      if (scroll_top <= 100) {
        nav_autohide.classList.remove("scrolled-up");
      }
      if (scroll_top > last_scroll_top) {
        if (menu_collapse.classList.contains("show")) {
          menu_collapse.classList.remove("show");
        }
        if (btn_collapse.classList.contains("smooth_cubic_trans")) {
          btn_collapse.classList.add("collapsed");
        }
      }
      last_scroll_top = scroll_top;
    });
  }
});

// Open the Pricing Form on Plan Select button click
function abc() {
  let pricing_Form = document.getElementById("pricingForm");
  let plan_Details = document.getElementsByClassName("plan-details")[0];
  if (pricing_Form.classList.contains("hideContent")) {
    pricing_Form.classList.remove("hideContent");
    pricing_Form.classList.add("showContent");
  }
  if (plan_Details.classList.contains("showContent")) {
    plan_Details.classList.remove("showContent");
    plan_Details.classList.add("hideContent");
  }
}

// Open the Pricing Form on Plan Select button click
function showPricingForm(type) {
  if (type) {
    let plan1 = document.getElementById("quarterlyPlan");
    let plan2 = document.getElementById("halfYearlyPlan");
    let plan3 = document.getElementById("yearlyPlan");

    plan1.classList.remove("active");
    plan2.classList.remove("active");
    plan3.classList.remove("active");

    switch (type) {
      case 1:
        plan1.classList.add("active");
        abc();
        break;
      case 2:
        plan2.classList.add("active");
        abc();
        break;
      case 3:
        plan3.classList.add("active");
        abc();
        break;
      default:
        break;
    }
  }
}
function hidePricingForm() {
  let pricing_Form = document.getElementById("pricingForm");
  let plan_Details = document.getElementsByClassName("plan-details")[0];

  if (pricing_Form.classList.contains("showContent")) {
    pricing_Form.classList.remove("showContent");
    pricing_Form.classList.add("hideContent");
  }
  if (plan_Details.classList.contains("hideContent")) {
    plan_Details.classList.remove("hideContent");
    plan_Details.classList.add("showContent");
  }
}
// To change note text display based on the plan selection
function formSubmit() {
  let note = document.getElementById("note");
  note.classList.remove("d-none");
  hidePricingForm();
}

//Scroll to Top
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $(".scroll-to-top").addClass("in");
  } else {
    $(".scroll-to-top").removeClass("in");
  }
});
$(".scroll-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

// To initialize the Animate onScroll effect
AOS.init();
