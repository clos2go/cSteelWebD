var bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express(),
    port = 3000;

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.static('public'));
app.set('view engine', 'ejs');

//APP CONFIGURATION
mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

var Blog = mongoose.model('Blog', blogSchema);

// // CREATE BLOG
// Blog.create({
//     title: 'I love dogs',
//     image: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg',
//     body: 'Doggo ipsum you are doing me the shock porgo very jealous pupper pupperino, adorable doggo. Vvv pupper doing me a frighten heckin good boys smol borking doggo with a long snoot for pats, heckin angery woofer heck wow very biscit pupperino, mlem noodle horse pupper. Shooberino wow very biscit boof what a nice floof heck, very good spot big ol. Heckin good boys adorable doggo big ol porgo extremely cuuuuuute, very jealous pupper you are doing me the shock noodle horse you are doing me the shock, wrinkler you are doing me the shock long woofer.',
//     // created: "date??"
//     }, function (err, blog){
//     if(err) {
//         console.log(err) 
//     } else {  
//         console.log(blog);
//     }
//     }
// );

//RESTFUL ROUTES

app.get('/', function (req, res) {
    res.redirect('/blogs');
});

app.get('/blogs', function (req, res) {
    //GET ALL BLOGS FROM DB
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log(err)
        } else {
            res.render('index', {
                blogs: blogs
            });
        }
    })
});


//NEW ROUTE
app.get("/blogs/new", function (req, res) {
    res.render("new");
});


//CREATE ROUTE
app.post('/blogs', function (req, res) {
    // var title = req.body.title;
    // var image = req.body.image;
    // var body = req.body.body;
    // var newBlog = {
    //     title: title,
    //     image: image,
    //     body: body 
    //create blog
    Blog.create(req.body.blog, function (err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            //redirect to the index
            res.redirect("/blogs")
        }

    });
});

// SHOW - shows more info about one blog
app.get("/blogs/:id", function (req, res) {
    Blog.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render('show', {
                blog: foundBlog
            });
        }
    });
});





app.listen(port, () => console.log(`blog app is listening on port ${port}!`));