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

export const galery = () => {
  const onLoad = () => {
    console.log(getTransform(galeryImgs[2], "scale"));
    const widthWindow = document.documentElement.clientWidth;
    const heightWindow = document.documentElement.clientHeight;
    const coefScale = (getTransform(galeryImgs[2], "scale") - 1) / countScroll;
    const coefMove = 500 / countScroll;

    fakeHeightBlock.style.height = `${countScroll}px`;

    const animate = () => {
      const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
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
