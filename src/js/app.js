import {thanksPage} from "./module/thanks.js";
import {sliders} from "./module/sliders.js";
import {supportSlider} from "./module/supportSlider.js";

if ($("#main-body").length > 0) {
  $(document).ready(() => {
    sliders();
    supportSlider();
  });
}
