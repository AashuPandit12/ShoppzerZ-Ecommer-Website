const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

const searchInput = document.querySelector("#input");
const items = document.querySelectorAll(".items");

searchInput.addEventListener("keyup", () => {
  let searchValue = searchInput.value.toLowerCase();

  items.forEach(item => {
    let productName = item.querySelector(".name").textContent.toLowerCase();

    if (productName.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});