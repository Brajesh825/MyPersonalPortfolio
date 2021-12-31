const hamburgerBtn = document.querySelector(".hamburger");
const menuItem = document.querySelector(".menu_item");

const bar = document.querySelector(".bar");
const cross = document.querySelector(".cross");

hamburgerBtn.addEventListener("click", function () {
  menuItem.classList.toggle("menu_on");

  bar.classList.toggle("bar_invisible");
  cross.classList.toggle("cross_visible");

  if (cross.classList.contains("cross_visible")) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "auto";
  }
});
