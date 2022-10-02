const videos = document.querySelectorAll("video");
let triggered = false;

const playVideo = async () => {
  if (triggered) return;
  try {
    await Promise.all(videos.map((video) => video.play()));
    document.querySelectorAll(".videoThumbnail").forEach((img) => img.remove());
  } catch (e) {
    // do nothing
  }
};

playVideo();

document.addEventListener("click", playVideo);
document.addEventListener("touchstart", playVideo);
