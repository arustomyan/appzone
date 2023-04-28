const markers = document.querySelectorAll(".cities__marker");
const gradient = `
          <defs>
            <linearGradient
              id="paint0_linear_395_631"
              x1="22"
              y1="19.5"
              x2="0"
              y2="19.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2794f9" class='cities__gradient1' />
              <stop offset="1" stop-color="#0c5fdb" class='cities__gradient2'  />
            </linearGradient>
          </defs>
`;

export function cities() {
  for (const el of markers) {
    const id = +el.id.split("-")[1];
    el.childNodes[3].insertAdjacentHTML("beforeend", gradient);
  }

  $(".cities__marker").click((e) => {
    const id = +e.currentTarget.id.split("-")[1];
    for (const el of markers) {
      el.childNodes[3].childNodes[1].setAttribute("fill", "white");
    }

    const marker = document.querySelector(`#cities__marker-${id}`);

    marker.childNodes[3].childNodes[1].setAttribute(
      "fill",
      "url(#paint0_linear_395_631)",
    );
    $(`.cities__el`).removeClass("cities__el_active");
    $(`#cities__el-${id}`).addClass("cities__el_active");
  });
}
