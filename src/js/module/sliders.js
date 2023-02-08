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
}
