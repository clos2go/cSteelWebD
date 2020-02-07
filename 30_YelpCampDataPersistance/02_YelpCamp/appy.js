var express = require('express'),
	app = express(),
	request = require('request'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 3000;

mongoose.connect('mongodb://localhost:27017/yelp_camp', {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(express.static('public'));
app.set('view engine', 'ejs');

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create({
// 		name: 'Ruidoso',
// 		image: 'https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2f73d7924dc25c_340.jpg',
// 		description: 'This campground is dope!!'
// 	},
// 	function (err, campground) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(campground);
// 		}
// 	}
// );

app.get('/', function (req, res) {
	res.render('landing');
});
//      INDEX - shows all campgrounds
app.get('/campgrounds', function (req, res) {
	//Get all campgrounds from DB
	Campground.find({}, function (err, allCampgrounds) {
		if (err) {
			console.log(err);
		} else {
			res.render('index', {
				campgrounds: allCampgrounds
			});
		}
	});
});
//           CREATE  - adds new campgrounds to DB
app.post('/campgrounds', function (req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {
		name: name,
		image: image
	};
	//Create a new campground and save to DB
	Campground.create(newCampground, function (err, newlyCreated) {
		if (err) {
			console.log(err);
		} else {
			//redirect back to campgrounds page
			res.redirect('/campgrounds');
		}
	});
});
//          NEW - show form to create new campground
app.get('/campgrounds/new', function (req, res) {
	res.render('new');
});

//      SHOW - shows more info about one campground
app.get("/campgrounds/:id", function (req, res) {
	// find the campground with provided ID
	//render show template with that campground 
	res.render('show')
});

app.listen(port, () => console.log(`Yelp app is listening on port ${3000}!`));


//           RESTFUL ROUTES
// name      url      verb   description
// =======================================================
// INDEX    /dogs      GET    Display a list of all dogs
// NEW      /dogs/new  GET    Displays a form to make a new dog. 
// CREATE   /dogs      POST   Add new dog to DB
// SHOW     /dogs/:id  GET    Shows info about 1 dog