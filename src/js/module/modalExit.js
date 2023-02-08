import { openPopup } from "./popup.js";

export const modalExit = (popupLeave) => {
  $(document).mouseleave(() => {
    let posMouse = null;
    $(document).mousemove((e) => {
      posMouse = e.clientY;
    });

    setTimeout(() => {
      if (posMouse === null || posMouse < 10) {
        openPopup(popupLeave);
        $(document).off("mouseleave");
        $(document).off("mousemove");
      }
    }, 1000);
  });
};
