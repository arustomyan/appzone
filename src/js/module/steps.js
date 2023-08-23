const mainBlock = document.querySelector(".steps__height-block");
const stickyBlock = document.querySelector(".steps__sticky-block");
const scrollTrack = document.querySelector(".steps__slider");
const slidersEl = [
  ...document.querySelectorAll(
    ".steps__slider:not(.steps__slider-mobile) .steps__slider-el",
  ),
];

let countScroll = 1200;
const COUNT_SLIDES = slidersEl.length;
const arr = [0];

const getTransform = (elem, property) => {
  const style = window.getComputedStyle(elem);
  const matrix = style.transform
    .slice(style.transform.indexOf("(") + 1, -1)
    .split(", ");
  switch (property) {
    case "scale":
      return style.transform === "none" ? 1 : +matrix[0];
    case "transform":
      return style.transform === "none" ? [0, 0] : [+matrix[4], +matrix[5]];
    default:
      return matrix;
  }
};

const goToSlide = (() => {
  let previousSlide = 0;
  return (slide) => {
    if (previousSlide === slide) return;

    if (previousSlide < slide) {
      if (slide != 9) {
        slidersEl[slide - 1].style.opacity = "0.2";
      }
      slidersEl[slide].style.transition =
        "opacity 0.5s ease-in, transform 0.25s ease";
      slidersEl[slide].style.opacity = "1";
      slidersEl[slide].style.transform = "none";
      slidersEl[slide].style.zIndex = "0";
    }

    if (previousSlide > slide) {
      slidersEl[slide + 1].style.opacity = "0.2";
    }

    slidersEl[slide].style.opacity = "1";
    scrollTrack.style.transform = `translateY(-${arr[slide]}px)`;

    for (let i = 1; i <= 9; i++) {
      const arrow = document.querySelector(`#steps__arrow-${i}`);
      const line = document.querySelector(`#steps__line-${i}`);
      const circle = document.querySelector(`#steps__circle-${i}`);

      if (i <= slide) {
        arrow.style.opacity = 1;
        line.setAttribute("stroke", "#1775E7");
        circle.setAttribute("fill", "url(#paint0_linear_411_680)");
      } else {
        arrow.style.opacity = 0;
        line.setAttribute("stroke", "#2e2e2e");
        if (i != 9) circle.setAttribute("fill", "#2e2e2e");
      }
    }

    previousSlide = slide;
  };
})();

const getReadySlide = (slide, scroll, coefOpacity, coefTransform) => {
  const scrollToNextSlide = scroll - slide * countScroll;
  const currentSlide = document.querySelector(`#steps__sliderEl-${slide + 1}`);
  const valueTranslateY = scrollToNextSlide * coefTransform;
  if (!currentSlide) return;
  currentSlide.style.transition = "none";
  currentSlide.style.opacity = 0.2 + scrollToNextSlide * coefOpacity;
  currentSlide.style.transform = `translateY(-${valueTranslateY}px)`;
  currentSlide.style.zIndex = `5`;
};

const animate = () => {
  const mainBlockPosTop = mainBlock.getBoundingClientRect().top;
  const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
  const coefOpacity = 0.7 / countScroll;
  const coefTransform = 50 / countScroll;
  const scroll = stickyBlockPosTop - mainBlockPosTop;

  if (scroll <= countScroll * 10) {
    const slide = Math.floor(scroll / countScroll);
    goToSlide(Math.min(slide, 9));
    getReadySlide(slide, scroll, coefOpacity, coefTransform);
  }
};

export const steps = () => {
  const onLoad = () => {
    const width = document.documentElement.clientWidth;
    stickyBlock.style.top = `0px`;

    if (width <= 1200) {
      mainBlock.style.height = "auto";
      return;
    }

    for (let i = 1; i < COUNT_SLIDES; i++) {
      const heightCurrentSlide = slidersEl[i].getBoundingClientRect().height;
      const heightPreviousSlide = slidersEl[i].getBoundingClientRect().height;
      const pos = (heightPreviousSlide + heightCurrentSlide) / 2 + 60;
      arr.push(arr[i - 1] + pos);
    }

    const maxScroll =
      mainBlock.getBoundingClientRect().height -
      stickyBlock.getBoundingClientRect().height;

    // значение скролла на один слайд:
    countScroll = maxScroll / COUNT_SLIDES;
  };

  window.addEventListener("scroll", animate);
  window.addEventListener("load", onLoad);
  window.addEventListener("resize", onLoad);
};
