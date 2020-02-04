var express = require("express");
var app = express();
var port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addfriend", function (req, res) {
    res.send("YOU HAVE REACHED THE POST ROUTE!")
    console.log('You have reached the post route!!')
});

app.get("/friends", function (req, res) {
    var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
    res.render("friends", {
        friends: friends
    });
});

//Server 
app.listen(port, () => console.log(`App is listening on on port ${port}!`));