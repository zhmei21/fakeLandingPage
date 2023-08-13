const burgerButton = document.querySelector(".burger");
const leftsideMenu = document.querySelector(".leftside-menu");

burgerButton.addEventListener("click", () => {
    leftsideMenu.classList.toggle("open");
});
