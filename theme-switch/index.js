module.exports = {
    website: {
        assets: "./assets",
        js: [
            "theme-switch.js"
        ],
        css: [
            "theme-switch.css"
        ]
    },
    hooks: {
        "page:before": function(page) {
            return page;
        }
    }
}; 