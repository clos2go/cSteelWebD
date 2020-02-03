// #EJS Control Flow

// * Show examples of control flow in EJS templates 
// * Write if statments in an EJS file
// * Write Loops in EJS File

// Loop through all posts
//     make an entry div
//     title
//     tagline

var express = require("express");
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.render('dogs2.ejs');
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love2.ejs", {
        thingVar: thing
    });
})

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Alex"},
        {title: "Can you believe this porgi?!", author: "Mike"}
    ];

    res.render("posts.ejs", {posts: posts});
});

app.listen(port, () => console.log(`App is listening to port ${port}!`));