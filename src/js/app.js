import {thanksPage} from "./module/thanks.js";
import {sliders} from "./module/sliders.js";
import {supportSlider} from "./module/supportSlider.js";
import {cities} from "./module/cities.js";
import {sectionTopSlider} from "./module/sectionTopSlider.js";

if ($("#main-body").length > 0) {
  $(document).ready(() => {
    sliders();
    supportSlider();
    cities();
    sectionTopSlider();
  });
}
