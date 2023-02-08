import {icon01, icon02, icon03} from "../const/organizationSvgIcon.js";

const slidersPrevBtn = `<svg class="founder__main-slider-btn founder__main-slider-prevBtn" width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="22.5" transform="matrix(-1 0 0 1 24 24.0232)" stroke="#D9D9D9" stroke-width="3"/>
<path d="M10.9393 25.1415C10.3536 24.5557 10.3536 23.6059 10.9393 23.0202L20.4853 13.4742C21.0711 12.8884 22.0208 12.8884 22.6066 13.4742C23.1924 14.06 23.1924 15.0097 22.6066 15.5955L14.1213 24.0808L22.6066 32.5661C23.1924 33.1519 23.1924 34.1016 22.6066 34.6874C22.0208 35.2732 21.0711 35.2732 20.4853 34.6874L10.9393 25.1415ZM36 25.5808H12V22.5808H36V25.5808Z" fill="#D9D9D9"/>
</svg>
`;

const slidersNextBtn = `<svg class="founder__main-slider-btn founder__main-slider-nextBtn" width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24.0232" r="22.5" stroke="#D9D9D9" stroke-width="3"/>
<path d="M37.0607 25.1415C37.6464 24.5557 37.6464 23.6059 37.0607 23.0202L27.5147 13.4742C26.9289 12.8884 25.9792 12.8884 25.3934 13.4742C24.8076 14.06 24.8076 15.0097 25.3934 15.5955L33.8787 24.0808L25.3934 32.5661C24.8076 33.1519 24.8076 34.1016 25.3934 34.6874C25.9792 35.2732 26.9289 35.2732 27.5147 34.6874L37.0607 25.1415ZM12 25.5808H36V22.5808H12V25.5808Z" fill="#D9D9D9"/>
</svg>
`;

const rotate = (line, deg) => {
  $(`${line}`).css("transform", `rotate(${deg}deg)`);
  $(`${line} svg`).css("transform", `rotate(-${deg}deg)`);
};

const testFunc = (() => {
  let slideT = null;
  return (deg, px, slide) => {
    if (slide !== slideT) {
      slideT = slide;
      $("#organization__list-track").css("transform", `translateY(${px}px)`);

      if (slide === 1) {
        $(`.organization__line svg`).css("transition", `transform 0.8s ease`);
        $(`.organization__line`).css("transition", `transform 0.8s ease`);
        rotate("#line0", 265);
        rotate("#line1", 189);
        rotate("#line2", 266);
        $(" .organization__svg-border").removeClass(
          "organization__svg-border_active",
        );
        $("#line1 .organization__svg-border").addClass(
          "organization__svg-border_active",
        );
        $(".organization__photo_visible").addClass("organization__photo_hide");
        $("#organization__photo01").addClass("organization__photo_visible");
        setTimeout(() => {
          $(
            ".organization__photo_visible.organization__photo_hide",
          ).removeClass("organization__photo_visible");
          $(".organization__photo_hide").removeClass(
            "organization__photo_hide",
          );
        }, 800);
      }
      if (slide === 2) {
        rotate("#line0", 360);
        rotate("#line1", 360);
        rotate("#line2", 360);
        setTimeout(() => {
          $(`.organization__line`).css("transition", `none`);
          $(`.organization__line svg`).css("transition", `none`);
          rotate("#line0", 0);
          rotate("#line1", 0);
          rotate("#line2", 0);
          setTimeout(() => {
            $(`.organization__line svg`).css(
              "transition",
              `transform 0.8s ease`,
            );
            $(`.organization__line`).css("transition", `transform 0.8s ease`);
          }, 800);
        }, 800);
        $(`.organization__line svg`).css("transition", `transform 0.8s ease`);
        $(`.organization__line`).css("transition", `transform 0.8s ease`);

        $(" .organization__svg-border").removeClass(
          "organization__svg-border_active",
        );
        $("#line2 .organization__svg-border").addClass(
          "organization__svg-border_active",
        );
        $(".organization__photo_visible").addClass("organization__photo_hide");
        $("#organization__photo02").addClass("organization__photo_visible");

        setTimeout(() => {
          $(
            ".organization__photo_visible.organization__photo_hide",
          ).removeClass("organization__photo_visible");
          $(".organization__photo_hide").removeClass(
            "organization__photo_hide",
          );
        }, 800);
      }
      if (slide === 0) {
        rotate("#line0", 454);
        rotate("#line1", 454.6);
        rotate("#line2", 531);
        setTimeout(() => {
          $(`.organization__line`).css("transition", `none`);
          $(`.organization__line svg`).css("transition", `none`);
          rotate("#line0", 94);
          rotate("#line1", 94.6);
          rotate("#line2", 171);
          setTimeout(() => {
            $(`.organization__line svg`).css(
              "transition",
              `transform 0.8s ease`,
            );
            $(`.organization__line`).css("transition", `transform 0.8s ease`);
          }, 800);
        }, 800);

        $(" .organization__svg-border").removeClass(
          "organization__svg-border_active",
        );
        $("#line0 .organization__svg-border").addClass(
          "organization__svg-border_active",
        );
        $(".organization__photo_visible").addClass("organization__photo_hide");
        $("#organization__photo00").addClass("organization__photo_visible");

        setTimeout(() => {
          $(
            ".organization__photo_visible.organization__photo_hide",
          ).removeClass("organization__photo_visible");
          $(".organization__photo_hide").removeClass(
            "organization__photo_hide",
          );
        }, 800);
      }
    }
  };
})();

export function sliders() {
  $(".founder__main-slider").slick({
    prevArrow: slidersPrevBtn,
    nextArrow: slidersNextBtn,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    // variableWidth: true,
    fade: true,
  });

  $(".founder__sup-slider").slick({
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 2,
    variableWidth: true,
    infinite: true,
  });

  $(".founder__main-slider").on("beforeChange", (a, b, c, d) => {
    console.log(c, d);
    if (c - d === 5 || c - d === -1) {
      $(`.founder__sup-slider-el`).removeClass("animClass");

      $(`.founder__sup-slider-el${d - 1 === -1 ? 5 : d - 1}`).addClass(
        "animClass",
      );
      $(".founder__sup-slider").slick("slickNext");
    }

    if (c - d === -5 || c - d === 1) {
      $(`.founder__sup-slider-el${d - 1 === -1 ? 5 : d - 1}`).addClass(
        "animClass",
      );
      $(`.founder__sup-slider-el${d}`).addClass("animClass2");
      $(".founder__sup-slider").slick("slickPrev");

      setTimeout(() => {
        $(`.founder__sup-slider-el${d}`).removeClass("animClass");
        $(`.founder__sup-slider-el${d}`).removeClass("animClass2");
      }, 500);
    }
  });

  $(".section-top__bullets-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  setTimeout(() => {
    $(".section-top__bullets-slider").slick("refresh");
  }, 200);

  $(".about__list-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    variableWidth: true,
  });

  $(".volume__list-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    variableWidth: true,
  });

  $(".organization__list-slider").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });

  $(".organization__list-slider").on("beforeChange", (a, b, c, d) => {
    testFunc("", "", d);
  });

  if (document.documentElement.clientWidth < 1200) {
    testFunc("", "", 0);
  }

  $(".information__list-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    variableWidth: true,
  });

  $(".candidates__scroll-list-track-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    variableWidth: true,
    centerMode: true,
  });
}
