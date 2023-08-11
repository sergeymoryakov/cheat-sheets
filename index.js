import { sheet } from "./sheets/js-generate-id.js";

const cheatSheetNode = document.getElementById("cheatSheet");

cheatSheetNode.innerHTML = sheet.tytle + sheet.body;
