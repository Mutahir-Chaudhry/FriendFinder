var path = require("path");
//Adding GET route for survey page
module.exports = function (app) {
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });

    //Default catch-all route to home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/home.html"));
    })
};