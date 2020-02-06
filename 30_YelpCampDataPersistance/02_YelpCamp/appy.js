var express = require('express'),
	app = express(),
	request = require('request'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 3000;

mongoose.connect('mongodb://localhost/yelp_camp');

app.use(
	bodyParser.urlencoded({
		extended : true
	})
);
app.use(express.static('public'));
app.set('view engine', 'ejs');

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name  : String,
	image : String
});

var Campground = mongoose.model('Campground', campgroundSchema);

Campground.create(
	{
		name  : 'Ruidoso',
		image : 'https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2f73d7924dc25c_340.jpg'
	},
	function(err, campground) {
		if (err) {
			console.log(err);
		} else {
			console.log(campground);
		}
	}
);

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/campgrounds', function(req, res) {
	//Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds) {
		if (err) {
			console.log(err);
		} else {
			res.render('campgrounds', { campgrounds: allCampgrounds });
		}
	});
	// res.render('campgrounds', {
	// 	campgrounds : campgrounds
	// });
});

app.post('/campgrounds', function(req, res) {
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {
		name  : name,
		image : image
	};
	campgrounds.push(newCampground);
	res.redirect('/campgrounds');
	// res.send("YOU made it POSt!")
});

app.get('/campgrounds/new', function(req, res) {
	res.render('new');
});

app.listen(port, () => console.log(`Yelp app is listening on port ${3000}!`));
