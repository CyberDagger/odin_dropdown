import "./normalize.css";
import "./styles.css";

const menuButton = document.querySelector("#dropdown-button");
const menuList = document.querySelector("#dropdown-list");

menuButton.addEventListener("click", () => {
    menuList.style.visibility = "visible";
});

document.addEventListener("click", (e) => {
    if (!e.target.closest("#dropdown-button") && !e.target.closest("#dropdown-list")) {
        menuList.style.visibility = "hidden";
    }
})