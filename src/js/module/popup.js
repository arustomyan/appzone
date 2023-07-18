const body = document.querySelector("body");
const header = document.querySelector("header");

export const openPopup = (valueObj) => {
  let titlePopup = document.querySelector("#popup-title");
  let buttonPopup = document.querySelector(".popup__container-wrapper button");

  let sectionInputNamePopup = document.querySelector(
    ".popup__container-wrapper .popup__form",
  ).elements["section-name-text"];
  let sectionButtonNamePopup = document.querySelector(
    ".popup__container-wrapper .popup__form",
  ).elements["section-btn-text"];
  let sectionNamePopup = document.querySelector(
    ".popup__container-wrapper .popup__form",
  ).elements["section-name"];

  sectionInputNamePopup.defaultValue = valueObj.sectionNameText;
  sectionInputNamePopup.value = valueObj.sectionNameText;
  sectionButtonNamePopup.defaultValue = valueObj.button;
  sectionButtonNamePopup.value = valueObj.button;
  sectionNamePopup.defaultValue = "Закрытая";
  sectionNamePopup.value = "Закрытая";

  titlePopup.innerHTML = valueObj.title;
  buttonPopup.innerHTML = valueObj.button;
  $(`#image-popup`).removeClass("image-popup__open-business");
  $(`#image-popup`).removeClass("image-popup__sign-up");
  $(`#image-popup`).removeClass("image-popup__leave");
  $(`#image-popup`).addClass(valueObj.image);

  $("#popup").addClass("popup_open");
  body.style.marginRight = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;
  header.style.paddingRight = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;

  $(document).on("keydown", function (e) {
    if (e.which === 27) {
      $(".popup.popup_open .popup__overlay").trigger("click");
      e.preventDefault();
      return false;
    }
  });

  // if (document.documentElement.clientWidth > 601) {
  //   ss.style.paddingRight = `${
  //     window.innerWidth - document.documentElement.clientWidth
  //   }px`;
  // }

  body.style.overflow = `hidden`;
  $(document).off("mouseleave");

  $(`#popupContainer`).removeClass("popup__leads");

  if (!!valueObj.popupClass) {
    $(`#popupContainer`).addClass(valueObj.popupClass);
  }
};

export const closePopup = (popup) => {
  $(popup).removeClass("popup_open");
  body.style.marginRight = `0px`;
  header.style.paddingRight = `0px`;
  body.style.overflow = `auto`;
  // ss.style.paddingRight = "0";
};
