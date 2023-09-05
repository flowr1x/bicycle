
const menuIcon = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

menuIcon.addEventListener("click",  () => {
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    document.body.classList.toggle("_acitve");
});