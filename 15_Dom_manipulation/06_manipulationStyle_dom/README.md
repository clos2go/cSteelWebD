
# Style
### The style property is one way to manipulate an element's style

```javascript
/SELECT
var tag = document.getElementById("highlight");

//MANIPULATE
tag.style.color = "blue"
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```
## This is not DRY and a bad idea. 
### It is recommended for styles to be defined in a seperate file or files. The style property allows for quick styling, for example MDN.

### Separation of Concerns

![Image of What is selected(sepCon.png)