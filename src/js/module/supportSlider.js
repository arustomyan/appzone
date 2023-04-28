const support__navigationEls = document.querySelectorAll(
  ".support__navigation-el",
);

const btnPrev = document.querySelectorAll(
  ".support__popup-slider-btns-block .slider-btn-prev",
);

export function supportSlider() {
  for (const el of support__navigationEls) {
    const id = +el.id.split("-")[1];
    el.onmouseover = () => {
      $(`.support__navigation-el`).removeClass("support__navigation-el_hover");
      $(`.support__content-block-el`).removeClass(
        "support__content-block-el_active",
      );
      $(`#support__slide-${id}`).addClass("support__navigation-el_hover");
      $(`#support__contentBlockEl-${id}`).addClass(
        "support__content-block-el_active",
      );
    };
  }
}

$(".support__popup-slider-btns-block .slider-btn-prev").click((e) => {
  const id = +$(
    ".support__popup .support__content-block-el_active",
  )[0].id.split("-")[1];
  $(".support__popup .support__content-block-el").removeClass(
    "support__content-block-el_active",
  );

  $(`#supportPopup__contentBlockEl-${id === 0 ? 5 : id - 1}`).addClass(
    "support__content-block-el_active",
  );

  body.style.overflow = `hidden`;
});

$(".support__popup-slider-btns-block .slider-btn-next").click((e) => {
  const id = +$(
    ".support__popup .support__content-block-el_active",
  )[0].id.split("-")[1];

  $(".support__popup .support__content-block-el").removeClass(
    "support__content-block-el_active",
  );

  $(".support__popup .support__content-block-slider-img").removeClass(
    "support__content-block-slider-img_active",
  );

  $(`#supportPopup__img-${id === 5 ? 0 : id + 1}`).addClass(
    "support__content-block-slider-img_active",
  );

  $(`#supportPopup__contentBlockEl-${id === 5 ? 0 : id + 1}`).addClass(
    "support__content-block-el_active",
  );
});

if (document.documentElement.clientWidth < 1100) {
  $(".support__navigation-el").click((e) => {
    const id = +e.currentTarget.id.split("-")[1];

    $(".support__popup .support__content-block-el").removeClass(
      "support__content-block-el_active",
    );

    $(".support__popup .support__content-block-slider-img").removeClass(
      "support__content-block-slider-img_active",
    );

    $(`#supportPopup__img-${id}`).addClass(
      "support__content-block-slider-img_active",
    );

    $(`#supportPopup__contentBlockEl-${id}`).addClass(
      "support__content-block-el_active",
    );

    $(`.support__popup`).addClass("support__popup_active");
    const body = document.querySelector("body");

    body.style.overflow = `clip`;
  });

  $("#support__popupClose").click((e) => {
    $(`.support__popup`).removeClass("support__popup_active");
    const body = document.querySelector("body");

    body.style.overflow = `auto`;
  });
}

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth > 1100) {
    $(`.support__popup`).removeClass("support__popup_active");
  }
});
