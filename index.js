import { articles } from "./articles.js";

const CS_OPEN_CLASSNAME = "cs-popup-open";
const BODY_FIXED_CLASSNAME = "body-fixed";

const bodyNode = document.querySelector("body");
const csListNode = document.getElementById("csList");
const csPopupNode = document.getElementById("csPopup");
const csPopupContentNode = document.getElementById("csPopupContent");
// const popupNode = document.querySelector(".js-popup");
// const btnOpenNode = document.querySelector(".js-btn-order");
// const popupContentNode = document.querySelector(".js-popup-order-content");
// const btnCloseNode = document.querySelector(".js-btn-order-close");

// btnOpenNode.addEventListener("click", togglePopup);
// btnCloseNode.addEventListener("click", togglePopup);

function clearTitleList() {
    return (csListNode.innerHTML = "");
}

function clearCheatSheet() {
    return (csPopupContentNode.innerHTML = "");
}

function createListElement(item) {
    const listItem = document.createElement("button");
    listItem.className = "list-item-btn";
    listItem.id = `liBtn_${item.id}`;
    listItem.innerText = item.title;

    // console.log(`liBtn_${item.id}`);
    // console.log(item.title);

    return listItem;
}

function popupCheatSheet(itemId) {
    clearCheatSheet();
    let cheatSheetHTML = "";
    articles.forEach((item) => {
        if (item.id === itemId) {
            cheatSheetHTML += `<h2>${item.title}</h2>`;
            cheatSheetHTML += item.body;
            console.log(cheatSheetHTML);
        }
    });
    togglePopup();
    csPopupContentNode.innerHTML = cheatSheetHTML;
}

function handlePopup(event) {
    const button = event.target;
    const itemId = button.id.split("_")[1];
    console.log(`popup item number: ${itemId}`);
    popupCheatSheet(itemId);
}

function renderTitleList(articles) {
    console.log(articles);
    clearTitleList();
    articles.forEach((element) => {
        const listElement = createListElement(element);
        csListNode.appendChild(listElement);
    });

    const listElements = document.querySelectorAll(".list-item-btn");
    listElements.forEach((element) => {
        element.addEventListener("click", (event) => handlePopup(event));
    });
}

renderTitleList(articles);

csPopupNode.addEventListener("click", (event) => {
    const isClickOutsideContent = !event
        .composedPath()
        .includes(csPopupContentNode);

    if (isClickOutsideContent) {
        togglePopup();
    }
});

function togglePopup() {
    csPopupNode.classList.toggle(CS_OPEN_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
