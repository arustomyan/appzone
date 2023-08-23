const mainBlock = document.querySelector(".business-model__height-block");
const stickyBlock = document.querySelector(".business-model__sticky-block");
const scrollTrack = document.querySelector(".business-model__track");
const slides = [
  document.querySelector("#modelSlide-0"),
  document.querySelector("#modelSlide-1"),
  document.querySelector("#modelSlide-2"),
  document.querySelector("#modelSlide-3"),
];

const infoBlocks = document.querySelectorAll(".business-model__city-info-el");
const todler = document.querySelector(".modelProgressBarToddler");

const datePoints = [
  ...document.querySelectorAll(".business-model__progress-bar-el"),
];

const countScroll = 1500;

const setActiveInfoBlock = (slide) => {
  const ACTIVE_SELECTOR = "business-model__city-info-el_active";
  const currentBlock = document.getElementById(`businessModel__info-${slide}`);

  infoBlocks.forEach((block) => {
    block.classList.remove(ACTIVE_SELECTOR);
  });
  currentBlock.classList.add(ACTIVE_SELECTOR);
};

let isAnimated = true;
let isAnimatedBring = true;

const setSlidePosition = (() => {
  let prevSlide = null;

  const pos = {
    nextY: "translateY(0)",
    currentY: "translateY(225px)",
    prevY: "translateY(151px)",
  };

  return (slide) => {
    if (prevSlide === slide) return;

    slides[slide].style.transform = pos.currentY;
    if (slide > 0) slides[slide - 1].style.transform = pos.prevY;
    if (!!slides[slide + 1]) slides[slide + 1].style.transform = pos.nextY;
    if (!!slides[slide + 2]) slides[slide + 2].style.transform = pos.prevY;

    setActivePoint(slide);
    moveToddler(slide);
    setActiveInfoBlock(slide);
    prevSlide = slide;
  };
})();

let isTimeout = true;

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

  let slide = 0;

  if (valueOffset < countScroll) {
    slide = 0;
    scrollTrack.style.transform = `translateX(0)`;
  } else if (valueOffset > countScroll && valueOffset < countScroll * 2) {
    slide = 1;
    scrollTrack.style.transform = `translateX(-865px)`;
  } else if (valueOffset > countScroll * 2 && valueOffset < countScroll * 3) {
    slide = 2;
    scrollTrack.style.transform = `translateX(-1730px)`;
  } else if (valueOffset > countScroll * 3) {
    slide = 3;
    scrollTrack.style.transform = `translateX(-2595px)`;
  }
  setSlidePosition(slide);
};

export const horizontalScroll = () => {
  const onLoad = () => {
    const stickyBlockHeight = stickyBlock.getBoundingClientRect().height;
    const widthWindow = document.documentElement.clientWidth;

    scrollTrack.style.transition = "transform 0.7s ease";
    slides.forEach((slide) => {
      slide.style.transition = "transform 0.5s ease";
    });

    stickyBlock.style.top = `0px`;

    mainBlock.style.height =
      window.innerWidth > 1200
        ? `${stickyBlockHeight + countScroll * 3.5 + 150}px`
        : "auto";

    animate();
  };

  window.addEventListener("scroll", animate);
  window.addEventListener("load", onLoad);
  window.addEventListener("resize", onLoad);
};
