var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String
});

var Cat = mongoose.model("Cat", catSchema);

// // adding cats to database
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 21,
//     temperment: "Cuddly"
// });

// george.save(function (err, cat) {
//     if (err) {
//         console.log("Something Went Wrong!!!")
//     } else {
//         console.log("We Just saved a cat to the DB:");
//         console.log(cat);
//     }
// });


Cat.create({
    name: "Snow White",
    age: 15,
    temperment: "Bland"
}, function (err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log() each one
Cat.find({}, function (err, cats) {
    if (err) {
        console.log("Oh no! An error!!!");
    } else {
        console.log("ALLLLLL THE CATS....");
        console.log(cats);
    }
});