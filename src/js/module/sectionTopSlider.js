const btnPrev = document.querySelector(
  ".section-top__slider-btns-block .slider-btn-prev",
);
const btnNext = document.querySelector(
  ".section-top__slider-btns-block .slider-btn-next",
);

const track = document.querySelector(".section-top_bg-track");
const slides = [
  document.querySelector(".section-top_bg01"),
  document.querySelector(".section-top_bg02"),
  document.querySelector(".section-top_bg03"),
  document.querySelector(".last-slide"),
];

let activeSlide = 0;
const transitionTime = 300;

const containers = document.querySelectorAll(".section-top_bg");

containers.forEach((container) => {
  container.style.paddingRight = `${
    window.innerWidth - document.documentElement.clientWidth
  }px`;
});

const setActivePoint = () => {
  document
    .querySelector(
      ".section-top__slider-point.section-top__slider-point_active",
    )
    .classList.remove("section-top__slider-point_active");
  document
    .querySelector(`#sectionTopPoint-${activeSlide}`)
    .classList.add("section-top__slider-point_active");
};

const goToNextSlide = () => {
  activeSlide = (activeSlide + 1) % slides.length;
  setActivePoint();
  if (slides[slides.length - 1].getBoundingClientRect().left > 20) {
    track.style.transition = `transform 0.3s ease-in-out`;
    track.style.transform = `translateX(-${(activeSlide + 1) * 100}vw)`;
    setTimeout(() => {
      track.style.transition = "none";
    }, transitionTime);
  } else {
    track.style.transition = `transform 0.3s ease-in-out`;
    track.style.transform = `translateX(-${500}vw)`;
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = `translateX(-100vw)`;
      activeSlide = 0;
    }, transitionTime);
  }
};

const goToPrevSlide = () => {
  activeSlide = (activeSlide + slides.length - 1) % slides.length;
  setActivePoint();
  if (slides[0].getBoundingClientRect().right > 20) {
    track.style.transition = `transform 0.3s ease-in-out`;
    track.style.transform = `translateX(-${0}vw)`;
    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = `translateX(-400vw)`;
      activeSlide = slides.length - 1;
    }, transitionTime);
  } else {
    track.style.transition = `transform 0.3s ease-in-out`;
    track.style.transform = `translateX(-${(activeSlide + 1) * 100}vw)`;
  }
};
export function sectionTopSlider() {
  setInterval(() => {
    goToNextSlide();
  }, 3000);
  // btnNext.addEventListener("click", () => {
  //   goToNextSlide();
  // });
  // btnPrev.addEventListener("click", () => {
  //   goToPrevSlide();
  // });
}
