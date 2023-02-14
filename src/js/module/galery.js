const stickyBlock = document.querySelector(".galery__sticky-block");
const fakeHeightBlock = document.querySelector(".galery__fake-height");
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
  element.style.transition = `transform ${countTransition / 1000}s ease`;
});

let pos = 0;
let scale = getTransform(galeryImgs[3], "scale");
const countScroll = 650;

const centerImg = {};

centerImg.height = galeryImgsMob[2].getBoundingClientRect().height;
centerImg.width = galeryImgsMob[2].getBoundingClientRect().width;
centerImg.coefWidth = (centerImg.width - 360) / countScroll;
centerImg.coefHeight = (centerImg.height - 192) / countScroll;
centerImg.marginTop = 237 / countScroll;
let i = 0;

export const galery = () => {
  const onLoad = () => {
    const widthWindow = document.documentElement.clientWidth;
    const coefScale = (getTransform(galeryImgs[2], "scale") - 1) / countScroll;
    const coefMove = 500 / countScroll;

    fakeHeightBlock.style.height = `${countScroll}px`;

    const animate = () => {
      const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
      if (widthWindow < 601) {
        if (Math.round(stickyBlockPosTop) !== 0) return;
        i++;
        if (!pos) {
          pos = window.pageYOffset;
        }

        const scroll = Math.min(
          Math.abs(window.pageYOffset - pos),
          countScroll,
        );

        const distanseMove = Math.max(250 - coefMove * scroll, 0);
        const valueWidth = Math.max(
          centerImg.width - centerImg.coefWidth * scroll,
          360,
        );
        const valueHeight = Math.max(
          centerImg.height - centerImg.coefHeight * scroll,
          192,
        );
        const valueMarginTop = Math.max(237 - centerImg.marginTop * scroll, 0);

        blockI.innerHTML = `${valueHeight} + ${i}`;

        galeryImgsMob[0].style.transform = `translate(-${distanseMove}px, -${distanseMove}px)`;
        galeryImgsMob[1].style.transform = `translate(${distanseMove}px, -${distanseMove}px)`;
        galeryImgsMob[3].style.transform = `translate(-${distanseMove}px, ${distanseMove}px)`;
        galeryImgsMob[4].style.transform = `translate(${distanseMove}px, ${distanseMove}px)`;
        galeryImgsMob[2].style.width = `${valueWidth}px`;
        galeryImgsMob[2].style.marginTop = `-${valueMarginTop}px`;
        galeryImgsMob[2].style.height = `${valueHeight}px`;
      }

      if (Math.round(stickyBlockPosTop) !== 0) return;

      if (!pos) {
        pos = window.pageYOffset;
        scale = getTransform(galeryImgs[2], "scale");
      }

      const scroll = Math.abs(window.pageYOffset - pos);
      const countScale = Math.max(scale - scroll * coefScale, 1);
      const translateNegative = Math.max(0, 500 - coefMove * scroll);
      const translatePositive = Math.min(0, -500 + coefMove * scroll);

      galeryImgs[2].style.transform = `scale(${countScale})`;
      galeryImgs[0].style.transform = `translate(${translatePositive}px, 0)`;
      galeryImgs[1].style.transform = `translate(${translatePositive}px, ${translateNegative}px)`;
      galeryImgs[3].style.transform = `translate(0, ${translateNegative}px)`;
      galeryImgs[4].style.transform = `translate(0, ${translateNegative}px)`;
      galeryImgs[5].style.transform = `translate(${translateNegative}px, 0)`;
      galeryImgs[6].style.transform = `translate(${translateNegative}px, ${translateNegative}px)`;
    };

    window.addEventListener("scroll", animate);
  };

  window.addEventListener("load", onLoad);
  window.addEventListener("resize", onLoad);
};
