//display which key is pressed
// var text = new PointText({
// 	point: view.center,
// 	content: 'Click here to focus and then press some keys.',
// 	justification: 'center',
// 	fontSize: 15
// });

var sound = new Howl({
	src: 'sounds/bubbles.mp3',
	html5: true,
	format: ['mp3', 'aac']
});

var circles = [];

function onKeyDown(event) {
	sound.play();
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	// A point between {x:0, y:0,} and {x:100, y:100}
	var point = maxPoint * randomPoint;
	// // When a key is pressed, set the content of the text item:
	// text.content = 'The ' + event.key + ' key was pressed!';

	var newCircle = new Path.Circle(point, 100);
	newCircle.fillColor = "orange";
	circles.push(newCircle);
}



function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);
	}
}