import {openPopup} from "./popup.js";

const openPopupExit = (value) => {
  openPopup(value);

  $(document).off("mouseleave");
  $(document).off("mouseleave");
  $(document).off("mousemove");
  $(window).off("blur");
  $(window).off("focus");
};

export const modalExit = (value) => {
  let isActive = false;
  $(document).mousemove((e) => {
    if (e.clientY > document.documentElement.clientHeight / 2) {
      $(document).off("mousemove");
      isActive = true;
    }
  });

  $(document).mouseleave((e) => {
    if (isActive && e.clientY <= 0) {
      openPopupExit(value);
    }
  });
};
