const todler = document.querySelector(".business-model__progress-bar-toddler");

const datePoints = [
  ...document.querySelectorAll(".business-model__progress-bar-el"),
];

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

const setActivePoint = (numPoint) => {
  datePoints.forEach((item) => {
    item.style.fontSize = "min(24px, max(16px, 2vw))";
    item.style.opacity = "0.2";
  });
  datePoints[numPoint].style.fontSize = "min(30px, max(22px, 2.75vw))";
  datePoints[numPoint].style.opacity = "1";
};

const moveToddler = (slide) => {
  const positions = ["16%", "38%", "59.7%", "81%"];
  todler.style.left = positions[slide];
};

const getTranslateX = (elem) => {
  const transformString = elem.style.transform;
  if (!transformString) return 0;

  const startIndex = transformString.indexOf("translateX(");
  const endIndex = transformString.indexOf("px");
  return +transformString.slice(startIndex + 11, endIndex);
};

const activeSlide = (slide) => {
  setActivePoint(slide);
  if (window.innerWidth > 601) moveToddler(slide);

  if (window.innerWidth < 800) {
    switch (slide) {
      case 0:
        $(".business-model__progress-bar-date").css(
          "transform",
          "translateX(0)",
        );
        break;
      case 1:
        $(".business-model__progress-bar-date").css(
          "transform",
          "translateX(-163px)",
        );
        break;
      case 2:
        $(".business-model__progress-bar-date").css(
          "transform",
          "translateX(-326px)",
        );
        break;
      case 3:
        $(".business-model__progress-bar-date").css(
          "transform",
          "translateX(-481px)",
        );
        break;
      default:
        break;
    }
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
  for (let i = 2; i <= 9; i++) {
    if (i <= slide) {
      document.querySelector(`#steps__arrow-${i}`).style.opacity = 1;
      document
        .querySelector(`#steps__line-${i}`)
        .setAttribute("stroke", "#1775E7");
      document
        .querySelector(`#steps__circle-${i}`)
        .setAttribute("fill", "url(#paint0_linear_411_680)");
    } else {
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
    ActiveStepsSlide(d + 1);
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
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
          // infinite: false,
          dots: true,
        },
      },
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
    // prevArrow: slidersPrevBtn,
    // nextArrow: slidersNextBtn,
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

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  $(".business-model__track-slider").on("beforeChange", (a, b, c, d) => {
    activeSlide(d);
  });

  $(".reviews__slider-btns-block .slider-btn-next").click(() => {
    $(".reviews__slider-block").slick("slickNext");
  });

  $(".reviews__slider-btns-block .slider-btn-prev").click(() => {
    $(".reviews__slider-block").slick("slickPrev");
  });

  // $(".cities__slider-mobile").slick({
  //   infinite: true,
  //   slidesToScroll: 1,
  //   slidesToShow: 1,
  //   fade: false,
  //   dots: true,
  //   arrows: false,
  //   // variableWidth: true,
  // });

  let sliderCities = new Splide(".cities__splideSlider", {
    perPage: 1,
    type: "loop",
    arrows: false,
    // pagination: false,
    dragMinThreshold: 20,
    breakpoints: {
      950: {
        fixedWidth: 500,
      },

      601: {
        fixedWidth: 300,
      },
    },
    fixedWidth: 400,
    gap: 30,
  });

  sliderCities.mount();
}
