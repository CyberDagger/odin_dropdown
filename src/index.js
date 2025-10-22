import "./normalize.css";
import "./styles.css";

const htmlBody = document.querySelector("body");
const menuButton = document.querySelector("#dropdown-button");
const menuList = document.querySelector("#dropdown-list");

menuButton.addEventListener("click", () => {
    menuList.style.visibility = "visible";
});

document.addEventListener("click", (e) => {
    if ((e.target.id != "dropdown-button") || (e.target.parentElement.id != "dropdown-button")) {
        menuList.style.visibility = "hidden";
    }
})