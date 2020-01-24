# jQuery Events
## Making things interactive

### 3 important methods
* click()
* keypress()
* on()

## click()
### jQuery's click() metod is a quick and easy way to add a click listener to element(s);
```javascript
//prints when item with id 'submit is clicked
$('#submit').click(function() {
    console.log("Another click");
});

//alerts when ANY button is clicked
$('button').click(finctino() {
    alert("Someone clicked a bitton");
});
```

