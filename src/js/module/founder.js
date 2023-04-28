const mainBlock = document.querySelector(".founder");
const stickyBlock = document.querySelector(".founder__bg");
const scrollTrack = document.querySelector(".founder__content");
const overflowBlock = document.querySelector(".founder__overflow");

let maxOfset = 0;

const animate = () => {
  if (document.documentElement.clientWidth < 1200) return;

  const mainBlockPosTop = mainBlock.getBoundingClientRect().top;
  const stickyBlockPosTop = stickyBlock.getBoundingClientRect().top;
  const scroll = stickyBlockPosTop - mainBlockPosTop;

  const valueOffset = Math.min(Math.abs(maxOfset), scroll);
  scrollTrack.style.transform = `translateY(-${valueOffset}px)`;
};

export const founder = () => {
  const onLoad = () => {
    const stickyBlockHeight = stickyBlock.getBoundingClientRect().height;

    const overflowBlockHeight = overflowBlock.getBoundingClientRect().height;
    const scrollTrackHeight = scrollTrack.getBoundingClientRect().height;
    maxOfset = scrollTrackHeight - overflowBlockHeight + 50;

    if (document.documentElement.clientWidth > 1200) {
      mainBlock.style.height = `${stickyBlockHeight + maxOfset}px`;
    } else {
      mainBlock.style.height = "auto";
      scrollTrack.style.transform = "none";
    }
  };

  window.addEventListener("scroll", animate);
  window.addEventListener("load", onLoad);
  window.addEventListener("resize", onLoad);
};
