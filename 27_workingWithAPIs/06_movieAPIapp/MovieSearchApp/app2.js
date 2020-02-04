var express = require("express");
var app = express();
var request = require("request");
var port = 3000;

app.set("view engine", "ejs");

//HOME 
app.get("/", function (req, res) {
    res.render("search")
});

app.get("/results", function (req, res) {
    var query = req.query.search;
    var key = "&apikey=thewdb"
    var url = "http://www.omdbapi.com/?s=" +query+ "&apikey=thewdb";
    request(url, function (error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            // res.send(results["Search"][1]["Title"]);
            res.render("results", {data: data})
        }
    });
});

app.listen(port, () => console.log(`Movie app is listening on port ${port}!`));