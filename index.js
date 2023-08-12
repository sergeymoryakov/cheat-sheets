const articleFiles = [
    "git-config-ssh-key.js",
    "git-useful-commands.js",
    "js-generate-id.js",
];

const articlePromises = articleFiles.map((filename) =>
    import(`./sheets/${filename}`)
);

Promise.all(articlePromises)
    .then((articleModules) => {
        const articleList = articleModules.map((module) => module.article);
        const cheatSheetNode = document.getElementById("cheatSheet");

        let newList = "";

        articleList.forEach((articleData) => {
            newList += articleData.title;
            newList += articleData.body;
        });
        cheatSheetNode.innerHTML = newList;
    })
    .catch((error) => {
        console.error("Error loading articles:", error);
    });
