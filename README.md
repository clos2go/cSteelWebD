# cSteelWebD


# ~~~~~~~~~~~ Functions ~~~~~~~~~~~~

Functions let us wrap bits of code up into RESUSABLE packages. They are one of the building blocks of JS. 
Practice this code in chrome dev tools.

#### Declare function first:

    function doSomething() {
        console.log("HELLO WORLD");
    }

#### Then call it:

    doSomething();
    doSomething();
    doSomething();
    doSomething();

## Example:

    function sayHi() {
        console.log("HELLO!");
        console.log("GOODBYE");
    }

#### Call it:

    sayHi();


#### Example 2:

    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the the world so high, ");
    console.log("Like a daimond in the sky.");

#### Put it in a function to make it DRY. 

    function singSong() {
        console.log("Twinkle, twinkle, little star,");
        console.log("How I wonder what you are!");
        console.log("Up above the the world so high, ");
        console.log("Like a daimond in the sky.");
    }

#### Call the verse as many times as you want to sing it. 
    (Sings song 4 times);
    singSong();
    singSong();
    singSong();
    singSong();

# ~~~~~~~~~~ ARGUMENTS  ~~~~~~~~~~~

#### Often we want to write functions that take inputs. 

## Example1:
    function square(num) {
        console.log(num * num);
    }

#### Now when we need to call square we need to pass in a value. 

    square(10); //prints 100
    square(3);  //prints 9
    square(4);  //prints 16

## Example2 

    function sayHello(name) {
        console.log("Hell
    }

### Call it
    sayHello("Rusty");
    sayHello("Carlos");
    sayHello("Rachel");

## Example3

    function area(length, width) {
        console.log(length * width);
    }

### Call it: 
    area(9, 2);  //18


## Example 4
    function greet(person1, person2, person3) {
        console.log("Hi, " + person1);
        console.log("Hi, " + person2);
        console.log("Hi, " + person3);
    }
### Call it:
    greet("Michael", "Alex", "Freddy");