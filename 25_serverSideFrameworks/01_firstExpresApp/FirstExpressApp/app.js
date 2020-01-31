var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
	res.send('Hi there!');
});

// "/bye" => "Goodbye!"
app.get('/bye', function(req, res) {
	res.send('Bye!');
});

app.get('/dog', function(req, res) {
	res.send('MEOW!!');
});

// app.listen(process.env.PORT, process.env.IP, function() {
// 	console.log('Server has started!!' ${[port]});
// });

app.listen(port, () => console.log(`app listening on port ${port}!`));
