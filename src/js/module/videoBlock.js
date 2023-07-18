export const videoBlock = (selector) => {
  const videos = document.querySelectorAll(selector);

  if (videos.length > 0) {
    videos.forEach((video) => {
      videoGenerate(video);
    });
  }

  const iframeGenerate = (videoID) => {
    const iframe = document.createElement("iframe");

    const src =
      "https://www.youtube.com/embed/DzR7puuVVFE?rel=0&showinfo=0&autoplay=1";
    iframe.setAttribute("src", src);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("allowfullscreen", "");
    iframe.classList.add("video-block__content");

    console.log(iframe);
    return iframe;
  };

  function videoGenerate(video) {
    const btn = video.querySelector(".video-block__btn");
    const videoID = btn.dataset.videoId;
    const container = video.querySelector(".video-block__inner");
    btn.addEventListener("click", () => {
      const iframe = iframeGenerate(videoID);
      container.appendChild(iframe);
      video.classList.add("video--play");
    });
  }
};
