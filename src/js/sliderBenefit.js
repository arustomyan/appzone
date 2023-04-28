const arrayPrices = [
  // iPhone 13 / 128 Гб
  {
    // цена у наших поставщиков:
    suppliers: 30000,
    // цена продажи:
    sale: 30000,
    // средняя цена у конкурентов:
    competitors: 30000,
  },
  // Airpods Pro
  {
    suppliers: 29000,
    sale: 29000,
    competitors: 29000,
  },
  // Apple Watch S8
  {
    suppliers: 51510,
    sale: 51510,
    competitors: 51510,
  },
  // MacBook 13 Pro M1
  {
    suppliers: 14140,
    sale: 14140,
    competitors: 14140,
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
};

window.addEventListener("load", startSlider);
