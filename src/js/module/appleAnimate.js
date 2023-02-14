const stickyBlock = document.querySelector(".apple__container-sticky");
const appleLogo = document.querySelector(".apple__logo-apple");

// Функция для получения масштаба элемента
const getScale = (elem) => {
  const transformString = window.getComputedStyle(elem).transform;
  if (transformString === "none") return 1;
  return +transformString
    .slice(transformString.indexOf("(") + 1, transformString.lastIndexOf(")"))
    .split(", ")[0];
};

let pos = 0;
let scale = getScale(appleLogo);

export const appleAnimate = () => {
  const onLoad = () => {
    const widthWindow = document.documentElement.clientWidth;
    const heightWindow = document.documentElement.clientHeight;

    // Устанавливаем масштаб для appleLogo с учетом ширины окна
    appleLogo.style.transform = `scale(${widthWindow / 63})`;

    // Вычисляем коэффициент масштабирования для appleLogo
    const coefScale = getScale(appleLogo) / (heightWindow * 1.25);

    const animate = () => {
      const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
      if (Math.round(stickyBlockPosTop) !== 0) return;

      if (!pos) {
        pos = window.pageYOffset;
        scale = getScale(appleLogo);
      }

      const scroll = Math.abs(window.pageYOffset - pos);
      const valueOffset = Math.max(scale - scroll * coefScale, 1);
      appleLogo.style.transform = `scale(${valueOffset})`;
    };

    window.addEventListener("scroll", animate);
  };

  window.addEventListener("load", onLoad);
  window.addEventListener("resize", onLoad);
};
