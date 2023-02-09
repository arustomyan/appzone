const support__navigationEls = document.querySelectorAll(
  ".support__navigation-el",
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
