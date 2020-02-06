var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");
port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var campgrounds = [{
        name: "Lazy Creek",
        image: "https://pixabay.com/get/52e7d0454d55a814f6da8c7dda793f7f1636dfe2564c704c7d2f73d7924dc25c_340.jpg"
    },
    {
        name: "Ruidoso",
        image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2f73d7924dc25c_340.jpg"
    },
    {
        name: "Cloudcroft",
        image: "https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d2f73d7924dc25c_340.jpg"
    }
];


app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {
        campgrounds: campgrounds,
    });

});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
    // res.send("YOU made it POSt!")
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});


app.listen(port, () => console.log(`Yelp app is listening on port ${3000}!`));