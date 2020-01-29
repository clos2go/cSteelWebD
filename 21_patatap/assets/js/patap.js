var text = new PointText({
	point: view.center,
	content: 'Click here to focus and then press some keys.',
	justification: 'center',
	fontSize: 15
});

function onKeyDown(event) {
	// When a key is pressed, set the content of the text item:
	text.content = 'The ' + event.key + ' key was pressed!';
	new Path.Circle(new Point(100, 100), 10).fillColor = "orange";
	console.log(view.size)
}