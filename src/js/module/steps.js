const mainBlock = document.querySelector(".steps__height-block");
const stickyBlock = document.querySelector(".steps__sticky-block");
const scrollTrack = document.querySelector(".steps__slider");
const slidersEl = [...document.querySelectorAll(".steps__slider-el")];

const countScroll = 800;

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

// const goToSlide = (slide) => {
//   if (slide < 0 || slide >= SLIDE_COUNT) {
//     return;
//   }

//   const [, translateY] = getTransform(scrollTrack, "transform");
//   const prevSlide = sliders[slide];
//   const nextSlide = sliders[slide + 1];
//   const distance = (prevSlide.offsetHeight + nextSlide.offsetHeight) / 2 + 60;

//   prevSlide.style.opacity = "0.2";
//   nextSlide.style.opacity = "1";
//   scrollTrack.style.transform = `translateY(${translateY - distance}px)`;

//   for (let i = 0; i < SLIDE_COUNT; i++) {
//     arrows[i].style.opacity = i <= slide ? 1 : 0;
//     lines[i].setAttribute("stroke", i <= slide ? "#1775E7" : "#2e2e2e");
//     circles[i].setAttribute(
//       "fill",
//       i <= slide ? "url(#paint0_linear_411_680)" : "#2e2e2e",
//     );
//   }
// };

const goToSlide = (() => {
  let previousSlide = 0;
  return (slide) => {
    if (previousSlide === slide) return;

    const [, translateY] = getTransform(scrollTrack, "transform");

    console.log(previousSlide, slide);
    if (previousSlide < slide) {
      const pos1 =
        (slidersEl[slide - 1].getBoundingClientRect().height +
          slidersEl[slide].getBoundingClientRect().height) /
          2 +
        60;

      slidersEl[slide - 1].style.opacity = "0.2";
      slidersEl[slide].style.opacity = "1";
      scrollTrack.style.transform = `translateY(${translateY - pos1}px)`;
    }

    if (previousSlide > slide) {
      const pos1 =
        (slidersEl[slide].getBoundingClientRect().height +
          slidersEl[slide + 1].getBoundingClientRect().height) /
          2 +
        60;

      slidersEl[slide + 1].style.opacity = "0.2";
      slidersEl[slide].style.opacity = "1";
      scrollTrack.style.transform = `translateY(${translateY + pos1}px)`;
    }

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

    previousSlide = slide;
  };
})();

export const steps = () => {
  window.addEventListener("load", () => {
    const width = document.documentElement.clientWidth;
    stickyBlock.style.top = `0px`;

    if (width <= 1200) {
      mainBlock.style.height = "auto";
      return;
    }

    let position = 0;
    let translateX = 0;
    let resaved = true;

    const animate = () => {
      const top = stickyBlock.getBoundingClientRect().top;
      const scrolled = Math.round(top) === 0;

      if (!scrolled) return;
      if (resaved) {
        position = window.pageYOffset;
        [, translateX] = getTransform(scrollTrack, "transform");
        resaved = false;
      }
      const scroll = Math.abs(window.pageYOffset - position);
      if (scroll <= countScroll * 10) {
        const slide = Math.floor(scroll / countScroll);
        goToSlide(slide);
      }
    };

    window.addEventListener("scroll", animate);
  });
};
