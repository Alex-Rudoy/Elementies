console.log("loaded");
document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded 2");
  document.body.classList.remove("no_transition");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 1500);
});
