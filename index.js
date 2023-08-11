import { articles } from "./articles.js";
const cheatSheetNode = document.getElementById("cheatSheet");

let newList = "";

articles.forEach((article) => {
    newList += article.tytle;
    newList += article.body;
});

cheatSheetNode.innerHTML = newList;

// // const articleContext = require.context("./sheets");
// const articleContext = require.context("./sheets");

// const articleFiles = articleContext.keys();

// const articlePromises = articleFiles.map((filename) =>
//     import(`./sheets/${filename}`)
// );

// Promise.all(articlePromises)
//     .then((articleModules) => {
//         const articleList = articleModules.map((module) => module.article);
//         const cheatSheetNode = document.getElementById("cheatSheet");

//         let newList = "";

//         articleList.forEach((articleData) => {
//             newList += articleData.tytle;
//             newList += articleData.body;
//         });
//         cheatSheetNode.innerHTML = newList;
//     })
//     .catch((error) => {
//         console.error("Error loading articles:", error);
//     });

// // const articleList = [];

// // articleFiles.forEach((filename) => {
// //     const articleModule = articleContext(filename);
// //     const articleData = articleModule.article; // Access to the constant name in data files
// //     articleList.push(articleData);
// // });
