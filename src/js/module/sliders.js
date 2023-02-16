const slidersPrevBtn = `        <div class="slider-btn slider-btn-prev">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.7559 21.3018H4.7857L9.83473 26.3509L8.70024 27.4854L1.71439 20.4995L8.70024 13.5137L9.83473 14.6482L4.7857 19.6972H39.7559V21.3018Z"
              fill="white"
            />
          </svg>
        </div>
`;

const slidersNextBtn = `<div class="slider-btn slider-btn-next">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.7559 21.3018H4.7857L9.83473 26.3509L8.70024 27.4854L1.71439 20.4995L8.70024 13.5137L9.83473 14.6482L4.7857 19.6972H39.7559V21.3018Z"
              fill="white"
            />
          </svg>
        </div>`;

const activeSlide = (slide) => {
  switch (slide) {
    case 0:
      $(".business-model__progress-bar-date").css("transform", "translateX(0)");
      $(".business-model__progress-bar-el").css("font-size", "16px");
      $(".business-model__progress-bar-el").css("opacity", "0.2");
      $(".business-model__progress-bar-el:nth-child(1)").css(
        "font-size",
        "22px",
      );
      $(".business-model__progress-bar-el:nth-child(1)").css("opacity", "1");

      break;
    case 1:
      $(".business-model__progress-bar-date").css(
        "transform",
        "translateX(-163px)",
      );
      $(".business-model__progress-bar-el").css("font-size", "16px");
      $(".business-model__progress-bar-el").css("opacity", "0.2");
      $(".business-model__progress-bar-el:nth-child(2)").css(
        "font-size",
        "22px",
      );
      $(".business-model__progress-bar-el:nth-child(2)").css("opacity", "1");

      break;
    case 2:
      $(".business-model__progress-bar-date").css(
        "transform",
        "translateX(-326px)",
      );
      $(".business-model__progress-bar-el").css("font-size", "16px");
      $(".business-model__progress-bar-el").css("opacity", "0.2");
      $(".business-model__progress-bar-el:nth-child(3)").css(
        "font-size",
        "22px",
      );
      $(".business-model__progress-bar-el:nth-child(3)").css("opacity", "1");
      break;
    case 3:
      $(".business-model__progress-bar-date").css(
        "transform",
        "translateX(-481px)",
      );
      $(".business-model__progress-bar-el").css("font-size", "16px");
      $(".business-model__progress-bar-el").css("opacity", "0.2");
      $(".business-model__progress-bar-el:nth-child(4)").css(
        "font-size",
        "22px",
      );
      $(".business-model__progress-bar-el:nth-child(4)").css("opacity", "1");
      break;

    default:
      break;
  }
  $(".business-model__progress-bar-img-mob").css(
    "transition",
    "transform 0.5s ease",
  );
  $(".business-model__progress-bar-img-mob").css(
    "transform",
    "translateX(-154px)",
  );
  setTimeout(() => {
    $(".business-model__progress-bar-img-mob").css("transition", "none");
    $(".business-model__progress-bar-img-mob").css(
      "transform",
      "translateX(-42px)",
    );
  }, 500);

  $(`.business-model__city-info-el`).removeClass(
    "business-model__city-info-el_active",
  );
  $(`#businessModel__info-${slide}`).addClass(
    "business-model__city-info-el_active",
  );
};

const ActiveStepsSlide = (slide) => {
  for (let i = 1; i <= 9; i++) {
    if (i <= slide) {
      document.querySelector(`#steps__arrow-${i}`).style.opacity = 1;
      document
        .querySelector(`#steps__line-${i}`)
        .setAttribute("stroke", "#1775E7");
      document
        .querySelector(`#steps__circle-${i}`)
        .setAttribute("fill", "url(#paint0_linear_411_680)");
    } else {
      console.log("работаем братья", i);
      document.querySelector(`#steps__arrow-${i}`).style.opacity = 0;
      document
        .querySelector(`#steps__line-${i}`)
        .setAttribute("stroke", "#2e2e2e");
      if (i != 9) {
        document
          .querySelector(`#steps__circle-${i}`)
          .setAttribute("fill", "#2e2e2e");
      }
    }
  }
};

export function sliders() {
  $(".proposal__el-slider").slick({
    prevArrow: slidersPrevBtn,
    nextArrow: slidersNextBtn,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    dots: true,
  });

  $(".steps__slider-mobile").slick({
    prevArrow: slidersPrevBtn,
    nextArrow: slidersNextBtn,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    dots: false,
    adaptiveHeight: true,
  });

  $(".steps__slider-mobile").on("beforeChange", (a, b, c, d) => {
    ActiveStepsSlide(d);
  });

  $(".reviews__slider-block").slick({
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    variableWidth: true,

    dots: false,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          infinite: false,
          dots: true,
        },
      },
    ],
  });

  $(".section-top_bg-block.section-top_bg-slider").slick({
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: false,
    dots: true,
  });

  $(".business-model__track-slider").slick({
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    dots: false,
    centerMode: true,
  });

  $(".business-model__track-slider").on("beforeChange", (a, b, c, d) => {
    activeSlide(d);
  });

  $(".reviews__slider-btns-block .slider-btn-next").click(() => {
    $(".reviews__slider-block").slick("slickNext");
  });

  $(".reviews__slider-btns-block .slider-btn-prev").click(() => {
    $(".reviews__slider-block").slick("slickPrev");
  });

  $(".economy__block-slider-list").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: true,
    dots: false,
    arrows: false,
  });

  $(".cities__slider-mobile").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    fade: false,
    dots: true,
    arrows: false,
    // variableWidth: true,
  });

  // $(".support__navigation-el").hover((e) => {
  //   const id = +e.currentTarget.id.split("-")[1];
  //   if (e.type === "mouseenter") {
  //     $(`.support__navigation-el`).removeClass("support__navigation-el_hover");
  //     $(`#support__slide-${id}`).addClass("support__navigation-el_hover");
  //     $(".support__content-block-slider").slick("slickGoTo", id, false);
  //   }
  //   if (e.type === "mouseleave") {
  //     $(`.support__navigation-el`).removeClass("support__navigation-el_hover");
  //     $(`#support__slide-${id}`).addClass("support__navigation-el_hover");
  //     $(".support__content-block-slider").slick("slickGoTo", id, false);
  //   }
  // });

  $(".economy__block-slider-list").on("beforeChange", (a, b, c, d) => {
    $(`.economy__block-description-img-el`).removeClass(
      "economy__block-description-img-el_active",
    );
    $(`.economy__slider-point`).removeClass("economy__slider-point_active");
    $(`#economy__block-description-img-el0${d}`).addClass(
      "economy__block-description-img-el_active",
    );
    $(`#economySliderPoint-${d}`).addClass("economy__slider-point_active");
  });

  // let btn = document.querySelectorAll(".economy__block-description-img-el");

  // for (const i of btn) {
  //   const id = +i.id.split("economy__block-description-img-el")[1][1];
  //   console.log(id);
  //   i.onmouseover = () => {
  //     $(".economy__block-slider-list").slick("slickGoTo", id);
  //   };
  // }

  // $(".economy__block-description-img-el").hover((e) => {
  //   if (e.type === "mouseenter") {
  //     console.log(id[1][1]);
  //     $(".economy__block-slider-list").slick("slickGoTo", +id[1][1]);
  //   }
  // });

  $(".economy__slider-btns-block .slider-btn-next").click(() => {
    $(".economy__block-slider-list").slick("slickNext");
  });

  $(".economy__slider-btns-block .slider-btn-prev").click(() => {
    $(".economy__block-slider-list").slick("slickPrev");
  });
}
