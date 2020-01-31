var express = require("express");
var app = express();
var port = 3000;

app.get("/", function (req, res) {
    res.send("Welcome to the homepage!!")
});





app.listen(port, () => console.log(`App is listening to port ${port}!`));