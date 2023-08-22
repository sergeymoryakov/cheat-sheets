import { articles } from "./articles.js";

// const CS_OPEN_CLASSNAME = "cs-open";
// const BODY_FIXED_CLASSNAME = "body-fixed";

// const bodyNode = document.querySelector("body");
const csListNode = document.querySelector(".cs-list");
const csPopupNode = document.querySelector(".cs-popup");
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
    return (csPopupNode.innerHTML = "");
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
    const cheatSheet = "";
    articles.forEach((item) => {
        if (item.id === itemId) {
            cheatSheet.concat(`${item.title}`);
            cheatSheet.concat(item.body);
            console.log(cheatSheet);
        }
    });
    csPopupNode.innerHTML = cheatSheet;
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

// popupNode.addEventListener("click", (event) => {
//     const isClickOutsideContent = !event
//         .composedPath()
//         .includes(popupContentNode);

//     if (isClickOutsideContent) {
//         togglePopup();
//     }
// });

// function togglePopup() {
//     popupNode.classList.toggle(CS_OPEN_CLASSNAME);
//     bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
// }
