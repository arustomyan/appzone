const testBlock = document.querySelector(".block-teast");
const testSec = document.querySelector(".test");

let isResave = true;
let pos = 0;
let offsetAdvantagesScroll = 0;

window.addEventListener("scroll", () => {
  const testBlockTop = testBlock.getBoundingClientRect().top;

  if (
    Math.round(
      document.documentElement.clientHeight -
        testBlock.getBoundingClientRect().bottom,
    ) === 20
  ) {
    if (isResave) {
      pos = window.pageYOffset + testBlockTop;
      offsetAdvantagesScroll = testSec.style.height
        ? +testSec.style.height.split("px")[0]
        : 0;
      isResave = false;
    }

    const scroll = Math.abs(
      window.pageYOffset - pos + document.documentElement.clientHeight - 50,
    );

    $(".test").css("height", `${scroll + 5000}px`);
    // const valueOffset = Math.abs(
    //   offsetAdvantagesScroll + scroll > widthScroll - widthWindow
    //     ? widthScroll - widthWindow
    //     : offsetAdvantagesScroll + scroll,
    // );
  }
});
