import {thanksPage} from "./module/thanks.js";
import {sliders} from "./module/sliders.js";
// import {supportSlider} from "./module/supportSlider.js";
// import {cities} from "./module/cities.js";
import {sectionTopSlider} from "./module/sectionTopSlider.js";
// import {horizontalScroll} from "./module/horizontalScroll.js";
// import {appleAnimate} from "./module/appleAnimate.js";
// import {galery} from "./module/galery.js";
// import {steps} from "./module/steps.js";
// import {founder} from "./module/founder.js";

if ($("#main-body").length > 0) {
  $(document).ready(() => {
    sliders();
    // galery();
    // supportSlider();
    // cities();
    sectionTopSlider();
    // horizontalScroll();
    // appleAnimate();
    // steps();
    // founder();
  });
}
