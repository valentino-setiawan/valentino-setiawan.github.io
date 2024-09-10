// toggle kelas aktif/memunculkan sidebar nya
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu sedang di klik
document.querySelector("#Drink-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//  klik di manapun selain di side bar untuk menghilangkan side bar
const drink = document.querySelector("#Drink-menu");
document.addEventListener("click", function (e) {
  if (!drink.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});