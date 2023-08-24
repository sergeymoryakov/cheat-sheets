import { articles } from "./articles.js";

const CS_OPEN_CLASSNAME = "cs-popup-open";
const BODY_FIXED_CLASSNAME = "body-fixed";

const bodyNode = document.querySelector("body");
const csListNode = document.getElementById("csList");
const csPopupNode = document.getElementById("csPopup");
let csPopupContentNode = document.getElementById("csPopupContent");
const csTitleNode = document.getElementById("csTitle");
const csBodyNode = document.getElementById("csBody");
const returnBtnNode = document.getElementById("returnBtn");
const printBtnNode = document.getElementById("printBtn");

function clearTitleList() {
    return (csListNode.innerHTML = "");
}

function clearCheatSheet() {
    csTitleNode.innerHTML = "";
    csBodyNode.innerHTML = "";
}

function createListElement(item) {
    const listItem = document.createElement("li");
    listItem.className = "list-item";

    const listItemBtn = document.createElement("button");
    listItemBtn.className = "list-item-btn";
    listItemBtn.id = `liBtn_${item.id}`;
    listItemBtn.innerText = item.title;

    // console.log(`liBtn_${item.id}`);
    // console.log(item.title);

    listItem.appendChild(listItemBtn);

    console.log(listItem);
    return listItem;
}

function popupCheatSheet(itemId) {
    clearCheatSheet();

    const cheatSheetContent = document.createElement("span");

    // const cheatSheetContent = document.createElement("div");
    // cheatSheetContent.className = "cs-popup-content";
    // cheatSheetContent.id = "csPopupContent";

    // Create buttons wrapper at the top of Cheat Sheet:
    // const wrapperBtn = document.createElement("div");
    // wrapperBtn.className = "wrapper-btn";
    // wrapperBtn.id = "wrapperBtn";

    // const returnBtnX = document.createElement("button");
    // returnBtnX.className = "return-btn";
    // returnBtnX.id = "returnBtn";
    // returnBtnX.innerText = "returnBtn";

    // const printBtn = document.createElement("button");
    // printBtn.className = "print-btn";
    // printBtn.id = "printBtn";
    // printBtn.innerText = "printBtn";

    // wrapperBtn.appendChild(returnBtnX);
    // wrapperBtn.appendChild(printBtn);

    // // Initialize Cheat Sheet Template:
    // cheatSheetContent.appendChild(wrapperBtn);

    articles.forEach((item) => {
        if (item.id === itemId) {
            csTitleNode.innerHTML = `<h2>${item.title}</h2>`;
            csBodyNode.innerHTML = item.body;
            // const itemTitle = document.createElement("h2");
            // itemTitle.innerHTML = item.title;
            // const itemBody = document.createElement("span");
            // itemBody.innerHTML = item.body;

            // cheatSheetContent.appendChild(itemTitle);
            // cheatSheetContent.appendChild(itemBody);
        }
    });

    togglePopup();

    // console.log(cheatSheetContent);

    // csPopupContentNode.appendChild(cheatSheetContent);
    // csPopupContentNode.innerHTML = cheatSheetHTML;
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

function csPrint() {
    console.log("PRINT COMMAND RECEIVED");
}

returnBtnNode.addEventListener("click", togglePopup);
printBtnNode.addEventListener("click", csPrint);
