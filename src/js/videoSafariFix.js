const videos = document.querySelectorAll("video");
const thumbnails = document.querySelectorAll(".thumbnail");
let triggered = false;

const playVideo = async () => {
  if (triggered) return;
  try {
    await Promise.all([...videos].map((video) => video.play()));
    [...thumbnails].forEach((img) => {
      img.style.opacity = 0;
    });
    [...videos].forEach((video) => {
      video.style.opacity = 1;
    });
  } catch (e) {
    // do nothing
  }
};

playVideo();

document.addEventListener("click", playVideo);
document.addEventListener("touchstart", playVideo);
