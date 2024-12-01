const learnMore = document.getElementById("btn");
const info = document.getElementById("hidden-description");

learnMore.addEventListener("click", function () {
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
});
