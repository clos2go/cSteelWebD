var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addfriend", function (req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends")
});

app.get("/friends", function (req, res) {
    res.render("friends", {
        friends: friends
    });
});

//Server 
app.listen(port, () => console.log(`App is listening on on port ${port}!`));