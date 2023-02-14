const mainBlock = document.querySelector(".founder");
const stickyBlock = document.querySelector(".founder__bg");
const scrollTrack = document.querySelector(".founder__content");
const overflowBlock = document.querySelector(".overflow");

const countScroll = 800;

export const founder = () => {
  window.addEventListener("load", () => {
    const height = document.documentElement.clientHeight;

    const mainBlockHeight = mainBlock.getBoundingClientRect().height;
    const overflowBlockHeight = overflowBlock.getBoundingClientRect().height;
    const scrollTrackHeight = scrollTrack.getBoundingClientRect().height;
    const maxOfset = scrollTrackHeight - overflowBlockHeight + 71;
    let position = 0;
    let resaved = true;

    mainBlock.style.height = `${mainBlockHeight + maxOfset}px`;

    const animate = () => {
      const top = stickyBlock.getBoundingClientRect().top;

      console.log(scrollTrackHeight - overflowBlockHeight);
      const scrolled = Math.round(top) === 0;
      if (Math.round(top) > 0) scrollTrack.style.transform = `translateY(0px)`;
      if (!scrolled) return;
      if (resaved) {
        position = window.pageYOffset;
        resaved = false;
      }
      const scroll = Math.abs(window.pageYOffset - position);

      const valueOffset = Math.min(Math.abs(maxOfset), scroll / 2);
      console.log(
        "🚀 ~ file: founder.js:34 ~ animate ~ valueOffset",
        valueOffset,
      );
      scrollTrack.style.transform = `translateY(-${valueOffset}px)`;
    };

    window.addEventListener("scroll", animate);
  });
};
