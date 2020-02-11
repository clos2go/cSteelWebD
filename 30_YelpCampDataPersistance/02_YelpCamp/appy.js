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

Campground.create({
		name: 'Ruidoso',
		image: 'https://cdn.pixabay.com/photo/2020/02/04/10/42/camping-4817872_960_720.jpg',
		description: 'This campground is dope!!'
	},
	function (err, campground) {
		if (err) {
			console.log(err);
		} else {
			console.log(campground);
		}
	}
);

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
	var desc = req.body.description;
	var newCampground = {
		name: name,
		image: image,
		description: desc
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
	Campground.findById(req.params.id, function (err, foundCampground) {
		// console.log(req.params.id)
		if (err) {
			console.log(err);
		} else {
			//render show template with that campground 
			res.render('show', {
				campground: foundCampground
			});
		}
	});

});

app.listen(port, () => console.log(`Yelp app is listening on port ${port}!`));


//           RESTFUL ROUTES
// name      url      verb   description
// =======================================================
// INDEX    /dogs      GET    Display a list of all dogs
// NEW      /dogs/new  GET    Displays a form to make a new dog. 
// CREATE   /dogs      POST   Add new dog to DB
// SHOW     /dogs/:id  GET    Shows info about 1 dog