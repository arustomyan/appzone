/**
 * исправлять только значения
 * значения только числа, без разделителей
 */

const arrayPrices = [
  // iPhone 13 / 128 Гб
  {
    // цена у наших поставщиков:
    suppliers: 61500,
    // цена продажи:
    sale: 69990,
    // средняя цена у конкурентов:
    competitors: 77990,
  },
  // Airpods Pro
  {
    suppliers: 19000,
    sale: 21900,
    competitors: 24990,
  },
  // Apple Watch SE 2
  {
    suppliers: 31300,
    sale: 34990,
    competitors: 39990,
  },
  // MacBook 13 Pro M1
  {
    suppliers: 110500,
    sale: 115990,
    competitors: 132900,
  },
];

const economy = (slide) => {
  const economySuppliers = document.querySelector("#economySuppliers");
  const economySale = document.querySelector("#economySale");
  const economyCompetitors = document.querySelector("#economyCompetitors");

  economySuppliers.innerHTML = `${arrayPrices[slide].suppliers} р.`;
  economySale.innerHTML = `${arrayPrices[slide].sale} р.`;
  economyCompetitors.innerHTML = `${arrayPrices[slide].competitors} р.`;
};

const startSlider = () => {
  $(".economy__block-slider-list").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    dots: false,
    arrows: false,
  });

  $(".economy__block-slider-list").on("beforeChange", (a, b, c, d) => {
    $(`.economy__block-description-img-el`).removeClass(
      "economy__block-description-img-el_active",
    );
    $(`.economy__slider-point`).removeClass("economy__slider-point_active");
    $(`#economy__block-description-img-el0${d}`).addClass(
      "economy__block-description-img-el_active",
    );
    $(`#economySliderPoint-${d}`).addClass("economy__slider-point_active");
    economy(d);
  });

  $(".economy__slider-btns-block .slider-btn-next").click(() => {
    $(".economy__block-slider-list").slick("slickNext");
  });

  $(".economy__slider-btns-block .slider-btn-prev").click(() => {
    $(".economy__block-slider-list").slick("slickPrev");
  });
  economy(0);
};

window.addEventListener("load", startSlider);
