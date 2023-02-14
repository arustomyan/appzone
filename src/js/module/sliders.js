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
