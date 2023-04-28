import {debounce} from "./debounce.js";

const mainBlock = document.querySelector(".business-model__height-block");
const stickyBlock = document.querySelector(".business-model__sticky-block");
const scrollTrack = document.querySelector(".business-model__track");
const slides = [
  document.querySelector("#businessModel__sliderPhoto-0"),
  document.querySelector("#businessModel__sliderPhoto-1"),
  document.querySelector("#businessModel__sliderPhoto-2"),
  document.querySelector("#businessModel__sliderPhoto-3"),
];
const todler = document.querySelector(".business-model__progress-bar-toddler");

const datePoints = [
  ...document.querySelectorAll(".business-model__progress-bar-el"),
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
      setActivePoint(0);
      moveToddler(0);
      $(`.business-model__city-info-el`).removeClass(
        "business-model__city-info-el_active",
      );
      $(`#businessModel__info-${0}`).addClass(
        "business-model__city-info-el_active",
      );

      break;
    case -865:
      slides[0].style.transform = `translateY(151px)`;
      slides[1].style.transform = `translateY(225px)`;
      slides[2].style.transform = `translateY(0)`;
      slides[3].style.transform = `translateY(151px)`;
      setActivePoint(1);
      moveToddler(1);
      $(`.business-model__city-info-el`).removeClass(
        "business-model__city-info-el_active",
      );
      $(`#businessModel__info-${1}`).addClass(
        "business-model__city-info-el_active",
      );

      break;
    case -1730:
      slides[0].style.transform = `translateY(0px)`;
      slides[1].style.transform = `translateY(151px)`;
      slides[2].style.transform = `translateY(225px)`;
      slides[3].style.transform = `translateY(0)`;
      setActivePoint(2);
      moveToddler(2);
      $(`.business-model__city-info-el`).removeClass(
        "business-model__city-info-el_active",
      );
      $(`#businessModel__info-${2}`).addClass(
        "business-model__city-info-el_active",
      );
      break;
    case -2595:
      slides[0].style.transform = `translateY(151px)`;
      slides[1].style.transform = `translateY(0)`;
      slides[2].style.transform = `translateY(151px)`;
      slides[3].style.transform = `translateY(225px)`;
      setActivePoint(3);
      moveToddler(3);
      $(`.business-model__city-info-el`).removeClass(
        "business-model__city-info-el_active",
      );
      $(`#businessModel__info-${3}`).addClass(
        "business-model__city-info-el_active",
      );

      break;
    default:
      break;
  }
};

const setActivePoint = (numPoint) => {
  datePoints.forEach((item) => {
    item.style.fontSize = "24px";
    item.style.opacity = "0.2";
  });
  datePoints[numPoint].style.fontSize = "30px";
  datePoints[numPoint].style.opacity = "1";
};

const moveToddler = (slide) => {
  const positions = ["16%", "38%", "59.7%", "81%"];
  todler.style.left = positions[slide];
};

const animate = () => {
  if (window.innerWidth < 1200) return;

  const mainBlockPosTop = mainBlock.getBoundingClientRect().top;
  const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
  const scroll = stickyBlockPosTop - mainBlockPosTop;

  const valueOffset = scroll;

  if (valueOffset < countScroll) {
    scrollTrack.style.transform = `translateX(0)`;
  } else if (valueOffset > countScroll && valueOffset < countScroll * 2) {
    scrollTrack.style.transform = `translateX(-865px)`;
  } else if (valueOffset > countScroll * 2 && valueOffset < countScroll * 3) {
    scrollTrack.style.transform = `translateX(-1730px)`;
  } else if (valueOffset > countScroll * 3) {
    scrollTrack.style.transform = `translateX(-2595px)`;
  }
  setSlidePosition();
};

export const horizontalScroll = () => {
  const onLoad = () => {
    const stickyBlockHeight = stickyBlock.getBoundingClientRect().height;
    const widthWindow = document.documentElement.clientWidth;

    scrollTrack.style.transition = "transform 1s ease";
    stickyBlock.style.top = `0px`;
    $(".business-model__slider-photo").css("transition", "transform 1s ease");

    mainBlock.style.height =
      window.innerWidth > 1200
        ? `${stickyBlockHeight + countScroll * 3 + 150}px`
        : "auto";

    animate();
  };

  window.addEventListener("scroll", animate);
  window.addEventListener("load", onLoad);
  window.addEventListener("resize", onLoad);
};
