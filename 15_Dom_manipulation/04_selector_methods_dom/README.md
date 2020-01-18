# Document Selectors
## Open up the JS console and try these 4 line:
```javascript
document.URL;
document.head;
document.body;
document.links;
console.dirv(variable);
```

## Methods
### The document comes with a bunch of methods for selecting elements. We're going to learn about the following 5:
```javascript
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()
```

## getElementById()
#### Takes a string argument and returns the one element with a matching ID

```javascript
vat tag = document.getElementById("highlight");
```

```html
<body>
    <h1>Hello</h1>
    <h1>Goodbye</h1>
    <ul>
        <li id="highlight">List Item 1</li>  <!-- This is selected -->
        <li class="bolded">List Item 2</li>
        <li class="bolded">List Item 3</li>
    </ul>
</body>
```
```javascript
var tag = document.getElementById("highlight");

console.dir(tag);
```
## getElementsByClassName
#### Takes a string argument and returns a list of elements that have a matching class

```javascript
var tags = document.getElementsByClassName("bolded");
```

```html
<body>
    <h1>Hello</h1>
    <h1>Goodbye</h1>
    <ul>
        <li id="highlight">List Item 1</li>  
        <li class="bolded">List Item 2</li> <!-- This is selected -->
        <li class="bolded">List Item 3</li> <!-- This is selected -->
    </ul>
</body>
```

## getElementsByTagName
#### Returns a list of elements of a given tag name, like `<li>` or `<h1>`

```javascript
var tags = document.getElementsByClassName("bolded");
```

```html
<body>
    <h1>Hello</h1>
    <h1>Goodbye</h1>
    <ul>
        <li id="highlight">List Item 1</li> <!-- This is selected -->
        <li class="bolded">List Item 2</li> <!-- This is selected -->
        <li class="bolded">List Item 3</li> <!-- This is selected -->
    </ul>
</body>
```

# querySelector
### Returns the first element that matches a given CSS-style selector

```javascript
var tag = document.querySelector("#highlight");
```

```html
<body>
    <h1>Hello</h1>
    <h1>Goodbye</h1>
    <ul>
        <li id="highlight">List Item 1</li> <!-- This is selected -->
        <li class="bolded">List Item 2</li> 
        <li class="bolded">List Item 3</li> 
    </ul>
</body>
```

# querySelectorAll
### Returns a list of elements that matches a given CSS-style selector

```javascript
var tags = document.querySelectorAll("h1");
var tags = document.querySelectorAll(".bolded");
```

```html
<body>
    <h1>Hello</h1> <!-- This is selected -->
    <h1>Goodbye</h1>
    <ul>
        <li id="highlight">List Item 1</li> 
        <li class="bolded">List Item 2</li> 
        <li class="bolded">List Item 3</li> 
    </ul>
</body>
```