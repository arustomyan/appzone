export const proposal = () => {
  const proposal = document.querySelector(".proposal");
  const stickyBlock = document.querySelector(".proposal__container-top");
  const title = document.querySelector("#proposalElTitle-1");

  let isAddClick = false;
  let top = +window.getComputedStyle(stickyBlock).top.split("px")[0];

  const handleClick = () => {
    window.scrollTo(
      0,
      proposal.getBoundingClientRect().top + window.pageYOffset - top,
    );
    isAddClick = false;
  };

  window.addEventListener("scroll", () => {
    top = +window.getComputedStyle(stickyBlock).top.split("px")[0];
    let pos = Math.round(stickyBlock.getBoundingClientRect().top);
    if (pos <= top) {
      title.style.cursor = "pointer";
      title.onclick = handleClick;
    } else {
      title.style.cursor = "initial";
      title.onclick = null;
    }
  });
};
