var todos = ["Buy a new turtle"];

var input = prompt("Wat would you like to do?");

while (input !== "quit") {
    //handle input
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");
        //add todo to array
        todos.push(newTodo);
    }
    //ask again for new input
    input = prompt("Wat would you like to do?");
}

console.log("ok, you quit the app")