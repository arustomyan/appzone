const mainBlock = document.querySelector(".business-model__height-block");
const stickyBlock = document.querySelector(".business-model__sticky-block");
const scrollTrack = document.querySelector(".business-model__track");
const slides = [
  document.querySelector("#businessModel__sliderPhoto-0"),
  document.querySelector("#businessModel__sliderPhoto-1"),
  document.querySelector("#businessModel__sliderPhoto-2"),
  document.querySelector("#businessModel__sliderPhoto-3"),
];

const countScroll = 800;

const getTranslateX = (elem) => {
  const transformString = elem.style.transform;
  if (!transformString) return 0;

  const startIndex = transformString.indexOf("translateX(");
  const endIndex = transformString.indexOf("px");
  return +transformString.slice(startIndex + 11, endIndex);
};

const setSlidePosition = () => {
  const translateX = getTranslateX(scrollTrack);

  switch (translateX) {
    case 0:
      slides[0].style.transform = `translateY(225px)`;
      slides[1].style.transform = `translateY(0)`;
      slides[2].style.transform = `translateY(225px)`;
      slides[3].style.transform = `translateY(151px)`;
      break;
    case -865:
      slides[0].style.transform = `translateY(151px)`;
      slides[1].style.transform = `translateY(225px)`;
      slides[2].style.transform = `translateY(0)`;
      slides[3].style.transform = `translateY(151px)`;
      break;
    case -1730:
      slides[0].style.transform = `translateY(0px)`;
      slides[1].style.transform = `translateY(151px)`;
      slides[2].style.transform = `translateY(225px)`;
      slides[3].style.transform = `translateY(0)`;
      break;
    case -2595:
      slides[0].style.transform = `translateY(151px)`;
      slides[1].style.transform = `translateY(0)`;
      slides[2].style.transform = `translateY(151px)`;
      slides[3].style.transform = `translateY(225px)`;
      break;
    default:
      break;
  }
};

// const setSlidePosition = (translateX) => {
//   switch (translateX) {
//     case 0:
//       slides.forEach((slide, index) => {
//         slide.style.transform = `translateY(${[225, 0, 225, 151][index]}px)`;
//       });
//       break;
//     case -865:
//       slides.forEach((slide, index) => {
//         slide.style.transform = `translateY(${[151, 225, 0, 151][index]}px)`;
//       });
//       break;
//     case -1730:
//       slides.forEach((slide, index) => {
//         slide.style.transform = `translateY(${[0, 151, 225, 0][index]}px)`;
//       });
//       break;
//     case -2595:
//       slides.forEach((slide, index) => {
//         slide.style.transform = `translateY(${[151, 0, 151, 225][index]}px)`;
//       });
//       break;
//     default:
//       break;
//   }
// };

export const horizontalScroll = () => {
  window.addEventListener("load", () => {
    const stickyBlockHeight = stickyBlock.getBoundingClientRect().height;
    const widthWindow = document.documentElement.clientWidth;

    stickyBlock.style.top = `0px`;

    mainBlock.style.height =
      widthWindow > 1200
        ? `${stickyBlockHeight + countScroll * 3 + 150}px`
        : "auto";

    let isResave = true;
    let pos = 0;
    let translateXScrollTrack = 0;

    const animate = () => {
      if (widthWindow > 1200) {
        const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
        const isScroll = Math.round(stickyBlockPosTop) === 0;

        if (isScroll) {
          if (isResave) {
            pos = window.pageYOffset;
            translateXScrollTrack = getTranslateX(scrollTrack);
            isResave = false;
          }

          const scroll = Math.abs(window.pageYOffset - pos);

          const valueOffset = Math.abs(translateXScrollTrack + scroll);

          $(".business-model__slider-photo").css(
            "transition",
            "transform 1s ease",
          );

          scrollTrack.style.transition = "transform 1s ease";

          if (valueOffset < countScroll) {
            scrollTrack.style.transform = `translateX(0)`;
          } else if (
            valueOffset > countScroll &&
            valueOffset < countScroll * 2
          ) {
            scrollTrack.style.transform = `translateX(-865px)`;
          } else if (
            valueOffset > countScroll * 2 &&
            valueOffset < countScroll * 3
          ) {
            scrollTrack.style.transform = `translateX(-1730px)`;
          } else if (valueOffset > countScroll * 3) {
            scrollTrack.style.transform = `translateX(-2595px)`;
          }
          setSlidePosition();
        } else {
        }
      }
    };

    window.addEventListener("scroll", animate);
  });
};
