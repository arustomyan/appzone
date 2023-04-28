const mainBlock = document.querySelector(".steps__height-block");
const stickyBlock = document.querySelector(".steps__sticky-block");
const scrollTrack = document.querySelector(".steps__slider");
const slidersEl = [
  ...document.querySelectorAll(
    ".steps__slider:not(.steps__slider-mobile) .steps__slider-el",
  ),
];
let countScroll = 800;
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
      slidersEl[slide].style.opacity = "1";
    }

    if (previousSlide > slide) {
      slidersEl[slide + 1].style.opacity = "0.2";
    }

    slidersEl[slide].style.opacity = "1";
    scrollTrack.style.transform = `translateY(-${arr[slide]}px)`;

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

    previousSlide = slide;
  };
})();

const animate = () => {
  const mainBlockPosTop = mainBlock.getBoundingClientRect().top;
  const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
  const scroll = stickyBlockPosTop - mainBlockPosTop;

  if (scroll <= countScroll * 10) {
    const slide = Math.floor(scroll / countScroll);
    goToSlide(Math.min(slide, 9));
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
      const pos1 =
        (slidersEl[i - 1].getBoundingClientRect().height +
          slidersEl[i].getBoundingClientRect().height) /
          2 +
        60;
      arr.push(arr[i - 1] + pos1);
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
