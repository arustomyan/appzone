const appleBlock = document.querySelector(".apple");
const mainBlock = document.querySelector(".apple__container");
const stickyBlock = document.querySelector(".apple__container-sticky");
const appleLogo = document.querySelector(".apple__logo-apple");
const appleTitle = document.querySelector(".apple__title");

// Функция для получения масштаба элемента
const getScale = (elem) => {
  const transformString = window.getComputedStyle(elem).transform;
  if (transformString === "none") return 1;
  return +transformString
    .slice(transformString.indexOf("(") + 1, transformString.lastIndexOf(")"))
    .split(", ")[0];
};

let pos = 0;
let scale = 1;
let coefScale = 1;

const animate = (heightWindow) => {
  if (document.documentElement.clientWidth < 601) return;

  const mainBlockPosTop = mainBlock.getBoundingClientRect().top;
  const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;

  // поправка для скролла скролла, чтобы анимация началась раньше
  const modScroll = Math.min(
    heightWindow / 3 - Math.min(mainBlockPosTop, heightWindow / 3),
    heightWindow / 3,
  );
  const scroll = stickyBlockPosTop - mainBlockPosTop + modScroll;
  const valueOffset = Math.max(scale - scroll * coefScale, 1);

  appleLogo.style.transform = `translate3d(0, 0, 0) scale(${valueOffset})`;
};

export const appleAnimate = () => {
  let heightWindow = document.documentElement.clientHeight;
  let widthWindow = document.documentElement.clientWidth;

  const onLoad = () => {
    if (widthWindow < 601) {
      appleLogo.style.transform = `scale(${1})`;
      return;
    }
    widthWindow = document.documentElement.clientWidth;
    heightWindow = document.documentElement.clientHeight;

    // Устанавливаем масштаб для appleLogo с учетом ширины окна
    appleLogo.style.transform = `scale(${widthWindow / 70})`;
    stickyBlock.style.top = `${0}px`;
    scale = getScale(appleLogo);

    // Определяем длинну скролла
    const PADDING_BOTTOM_APPLE_SECTION = 130;
    const maxScroll =
      appleBlock.getBoundingClientRect().height -
      stickyBlock.getBoundingClientRect().height -
      appleTitle.getBoundingClientRect().height -
      PADDING_BOTTOM_APPLE_SECTION +
      heightWindow / 3;

    // Вычисляем коэффициент масштабирования для appleLogo
    coefScale = (getScale(appleLogo) - 1) / maxScroll;

    animate(heightWindow);
  };

  window.addEventListener("scroll", () => animate(heightWindow));
  window.addEventListener("load", onLoad);
  window.addEventListener("resize", onLoad);
};
