// var myCircle = new Path.Circle(new Point(0, 0), 10);
// myCircle.fillColor = 'purple';

// var myCircle = new Path.Circle(new Point(800, 0), 10);
// myCircle.fillColor = 'purple';

var x = 0;
var y = 15;
var radius = 10;
var r = 0;
var g = 0;
var b = 0;

function colorCircle(r, g, b) {
	var circleColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	return circleColor;
}
console.log(colorCircle(r, g, b));

function createCircles(x, y, radius) {
	var circles = (new Path.Circle(new Point(x, y), radius).fillColor = colorCircle(r, g, b));
}

for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		createCircles(x, y, radius);
		x += 100;
		r += 25;
		b += 25;
		radius += 0.5;
	}
	x = 10;
	b = 0;
	r = 0;
	y += 100;
}

// var circle2 = new Path.Circle(new Point(400, 400), 25);
// circle2.fillColor = 'blue';

// // Create a Paper.js Path to draw a line into it:
// var path = new Path();
// // Give the stroke a color
// path.strokeColor = 'red';
// var start = new Point(100, 100);
// // Move to start and draw a line from there
// path.moveTo(start);
// // Note the plus operator on Point objects.
// // PaperScript does that for us, and much more!
// path.lineTo(start + [ 100, -50 ]);

// // Create a circle shaped path with its center at the center
// // of the view and a radius of 30:
// var path = new Path.Circle({
// 	center      : view.center,
// 	radius      : 30,
// 	strokeColor : 'black'
// });

// function onResize(event) {
// 	// Whenever the window is resized, recenter the path:
// 	path.position = view.center;
// }

// var myPath = new Path();
// myPath.strokeColor = 'black';
// myPath.add(new Point(0, 0), new Point(100, 50));
// //insert a segment  between the 2 existing segments in path
// myPath.insert(1, new Point(30, 40));

// //SMOOTHING PATHS
// var path = new Path();
// path.strokeColor = 'red';
// path.add(new Point(30, 75), new Point(30, 25), new Point(80, 25), new Point(80, 75));
// path.closed = true;

// // Select the path, so we can see its handles
// path.fullySelected = true;

// //Create a copu of the path and move it 100pt to the right
// var copy = path.clone();
// copy.fullySelected = true;
// copy.position.x += 100;

// //smooth the segments of the copy
// copy.smooth();

// //Removing segments and paths

// var myCircle = new Path.Circle(new Point(100, 100), 50);
// myCircle.strokeColor = 'pink';
// myCircle.selected = true;

// // remove the first segment of the path after creating it
// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.strokeColor = 'green';
// myCircle.selected = true;

// myCircle.removeSegment(0);

// // var myCircle = new Path.Circle(new Point(100, 100), 50);
// // myCircle.fillColor = 'black';

// // myCircle.remove();
