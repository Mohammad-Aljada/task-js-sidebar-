const btnAddSidebar = document.querySelector(".btn-addsidbar");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-closeSidbar");
btnAddSidebar.onclick = (e) => {
  overlay.classList.toggle("show");
};

btnClose.onclick = (e) => {
  overlay.classList.toggle("show");
};
