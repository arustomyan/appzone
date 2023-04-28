const mainBlock = document.querySelector(".galery");
const stickyBlock = document.querySelector(".galery__sticky-block");
const fakeHeightBlock = document.querySelector(".galery__fake-height");
const galeryTitle = document.querySelector(".galery__title");
const galeryImgs = [
  document.querySelector("#galery__ImgLeft-0"),
  document.querySelector("#galery__ImgLeft-1"),
  document.querySelector("#galery__Img-2"),
  document.querySelector("#galery__ImgCenter-3"),
  document.querySelector("#galery__ImgCenter-4"),
  document.querySelector("#galery__Img-5"),
  document.querySelector("#galery__ImgRight-6"),
];

const galeryImgsMob = [
  document.querySelector("#galeryMob__Img-0"),
  document.querySelector("#galeryMob__Img-1"),
  document.querySelector("#galeryMob__Img-2"),
  document.querySelector("#galeryMob__Img-3"),
  document.querySelector("#galeryMob__Img-4"),
];

const blockI = document.querySelector(".block-i");

const getTransform = (elem, property) => {
  const transformString = window.getComputedStyle(elem).transform;
  if (transformString === "none") return 1;
  const matrix = transformString
    .slice(transformString.indexOf("(") + 1, transformString.lastIndexOf(")"))
    .split(", ");
  switch (property) {
    case "scale":
      return matrix[0];
    case "transform":
      return [matrix[4], matrix[5]];
    default:
      return matrix;
  }
};

const countTransition = 200;

galeryImgs.forEach((element) => {
  element.style.transition = `transform ${countTransition / 1000}s linear`;
});

galeryTitle.style.transition = `transform ${countTransition / 1000}s linear`;
let pos = 0;
let scale = getTransform(galeryImgs[2], "scale");
const COUNT_SCROLL = 500;

const centerImg = {};

centerImg.height = galeryImgsMob[2].getBoundingClientRect().height;
centerImg.width = galeryImgsMob[2].getBoundingClientRect().width;
centerImg.coefWidth = (centerImg.width - 360) / COUNT_SCROLL;
centerImg.coefHeight = (centerImg.height - 192) / COUNT_SCROLL;
centerImg.marginTop = 237 / COUNT_SCROLL;
let i = 0;

let coefScale = 1;
let offset = 0;
let coefMove = 1;

const animate = () => {
  const mainBlockPosTop = mainBlock.getBoundingClientRect().top;
  const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
  const scroll = stickyBlockPosTop - mainBlockPosTop;

  if (document.documentElement.clientWidth < 800) {
    animateMob(scroll);
    return;
  }

  const countScale = Math.max(scale - scroll * coefScale, 1);

  const translateNegative = Math.max(0, offset - coefMove * scroll);
  const translatePositive = Math.min(0, -offset + coefMove * scroll);

  galeryTitle.style.transform = `translate(-50%,-50%) scale(${1 / countScale})`;
  galeryImgs[2].style.transform = `scale(${countScale})`;
  galeryImgs[0].style.transform = `translate(${translatePositive}px, 0)`;
  galeryImgs[1].style.transform = `translate(${translatePositive}px, ${translateNegative}px)`;
  galeryImgs[3].style.transform = `translate(0, ${translateNegative}px)`;
  galeryImgs[4].style.transform = `translate(0, ${translateNegative}px)`;
  galeryImgs[5].style.transform = `translate(${translateNegative}px, 0)`;
  galeryImgs[6].style.transform = `translate(${translateNegative}px, ${translateNegative}px)`;
};

const animateMob = (scroll) => {
  const distanseMove = Math.max(250 - coefMove * scroll, 0);
  const valueWidth = Math.max(
    centerImg.width - centerImg.coefWidth * scroll,
    360,
  );
  const valueHeight = Math.max(
    centerImg.height - centerImg.coefHeight * scroll,
    192,
  );

  galeryImgsMob[0].style.transform = `translate(-${distanseMove}px, -${distanseMove}px)`;
  galeryImgsMob[1].style.transform = `translate(${distanseMove}px, -${distanseMove}px)`;
  galeryImgsMob[3].style.transform = `translate(-${distanseMove}px, ${distanseMove}px)`;
  galeryImgsMob[4].style.transform = `translate(${distanseMove}px, ${distanseMove}px)`;
  galeryImgsMob[2].style.width = `${valueWidth}px`;
  galeryImgsMob[2].style.height = `${valueHeight}px`;
};

export const galery = () => {
  const onLoad = () => {
    const widthWindow = document.documentElement.clientWidth;
    const galeryImgCenterWidth = galeryImgs[2].getBoundingClientRect().width;

    scale = widthWindow / galeryImgCenterWidth;

    galeryImgs[2].style.transform = `scale(${scale})`;
    galeryTitle.style.transform = `translate(-50%, -50%) scale(${1 / scale})`;

    offset =
      widthWindow < 800
        ? 250
        : galeryImgs[0].getBoundingClientRect().x +
          galeryImgs[0].getBoundingClientRect().width +
          150;

    coefScale = (scale - 1) / COUNT_SCROLL;

    coefMove = offset / COUNT_SCROLL;

    fakeHeightBlock.style.height = `${COUNT_SCROLL}px`;

    animate();
  };

  window.addEventListener("scroll", animate);
  window.addEventListener("load", onLoad);
  window.addEventListener("resize", onLoad);
};
