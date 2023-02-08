import {thanksPage} from "./module/thanks.js";
import {sliders} from "./module/sliders.js";

if ($("#main-body").length > 0) {
  $(document).ready(() => {
    sliders();
  });
}
