var express = require('express');
var app = express();
var port = 3000;



app.get('/', function (req, res) {
    res.send("Hi there! Welcome to my assignment!");
})


app.get('/speak/:animal', function (req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase;
    var sound = sounds[animal];
    res.send("The " + animal + " says'" + sound + "'");
});

app.get('/repeat/:message/:times', function (req, res) {
    var message = req.params.message;
    var times = Number(req.params.times);
    var finalMessage = "";
    for (var i = 0; i < times; i++) {
        finalMessage += message + " ";
    }
    res.send(finalMessage);
});

app.get('*', function (req, res) {
    res.send("Sorry page not found... What are you doing with your life?")
});


// SERVER

app.listen(port, () => console.log(`App is listening on port ${port}!`));
// app.listen(port, () => console.log(`app listening on port ${port}!`));