import {sliders} from "./module/sliders.js";
import {supportSlider} from "./module/supportSlider.js";
import {sectionTopSlider} from "./module/sectionTopSlider.js";
import {horizontalScroll} from "./module/horizontalScroll.js";
import {appleAnimate} from "./module/appleAnimate.js";
import {galery} from "./module/galery.js";
import {steps} from "./module/steps.js";
import {founder} from "./module/founder.js";
import {openPopup, closePopup} from "./module/popup.js";
import {popupValue} from "./const/popupValue.js";
import {modalExit} from "./module/modalExit.js";
import {newDate} from "./module/newDate.js";
import {proposal} from "./module/proposal.js";

if ($("#main-body").length > 0) {
  Fancybox.bind();

  const video = document.querySelector("#sectionTopVideo");

  $(document).ready(() => {
    const body = document.querySelector("body");
    newDate();

    $(".input_phone").inputmask("+7 (999) 999-99-99");
    modalExit(popupValue.leads);

    // Сброс валидации
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      input.onfocus = (e) => {
        e.target.classList.remove("input_error");
      };
    }

    proposal();
    sliders();
    galery();
    supportSlider();

    sectionTopSlider();
    horizontalScroll();
    appleAnimate();
    steps();
    founder();

    $("body").click((e) => {
      video.play();
    });

    $(
      "#sectionTop__button, #founderButton, #demandButton, #reviewsButton, #stepsButton",
    ).click((e) => {
      openPopup(popupValue.open);
    });

    $(".order-call__button, #header__orderCallMobile").click((e) => {
      openPopup(popupValue.sidnUp);
    });

    $(".popup__overlay").click((e) => {
      closePopup(e.target.parentElement);
    });

    $("#popup__close-btn").click((e) => {
      $("#popup #overlay_popup").trigger("click");
    });

    $(".button__policy, .politicy").click((e) => {
      $("#popup_policy").addClass("popup_open");
      body.style.marginRight = `${
        window.innerWidth - document.documentElement.clientWidth
      }px`;

      body.style.overflow = `hidden`;
      $(document).off("mouseleave");
    });

    $("#popup-policy__close").click((e) => {
      $("#popup_policy #overlay_popup").trigger("click");
    });
  });
}
