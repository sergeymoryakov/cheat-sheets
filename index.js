import { articles } from "./articles";

const CS_OPEN_CLASSNAME = "cs-open";
const BODY_FIXED_CLASSNAME = "body-fixed";

const bodyNode = document.querySelector("body");
const popupNode = document.querySelector(".js-popup");
const btnOpenNode = document.querySelector(".js-btn-order");
const popupContentNode = document.querySelector(".js-popup-order-content");
const btnCloseNode = document.querySelector(".js-btn-order-close");

btnOpenNode.addEventListener("click", togglePopup);
btnCloseNode.addEventListener("click", togglePopup);

popupNode.addEventListener("click", (event) => {
    const isClickOutsideContent = !event
        .composedPath()
        .includes(popupContentNode);

    if (isClickOutsideContent) {
        togglePopup();
    }
});

function togglePopup() {
    popupNode.classList.toggle(CS_OPEN_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
