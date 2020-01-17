var todos = ["Buy a new turtle"];

var input = prompt("Wat would you like to do?");


//Lists your todos in your array by typing 'list'
function listTodos() {
    console.log("************")
    todos.forEach(function (todo, index) {
        console.log(index + " : " + todo);
    });
    console.log("************")
}

//adds todos by typing 'new' and adding new todo
function addTodos() {
    var newTodo = prompt("Enter new todo");
    //add todo to array
    todos.push(newTodo);
    console.log("Added " + newTodo);
}

//Deletes to do by typing 'delete' and inputing index you would like deleted
function deleteTodos() {
    //ask for index to delete
    var delInd = prompt("What index would you like to delete?");
    var item = todos[delInd];
    todos.splice(delInd, 1);
    var itemCap = item.charAt(0).toUpperCase(1) + item.slice(1);
    console.log(itemCap + " has been deleted!")
}

//
while (input !== "quit") {
    //handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodos();
    } else if (input === "delete") {
        deleteTodos();
    }
    //ask again for new input
    input = prompt("Wat would you like to do?");
}
console.log("ok, you quit the app")