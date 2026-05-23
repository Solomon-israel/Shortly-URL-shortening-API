const toggleBtnEl = document.getElementById("toggle-btn");
const sidebarEl = document.getElementById("sidebar");

toggleBtnEl.addEventListener("click", () => {
  //   console.log(sidebarEl);
  sidebarEl.classList.toggle("open-nav");
});
