# Objects in JS

* Objectives
    * Understand objects conceptually
    * Write code using JS objects


#### Suppose you wanted to model a single person: name, age, city

    //You could use an array like this;

    var person = ["Cindy", "32", "Missoula"];

    //To retrieve the person's hometown:
    personpp[2]; //this is not very meaningful code

    //what if I accidently reversed the order?
    var person2 = ["Travis", "Los Angeles", "21"];

## This makes better use of the object
#### Stores data in key: value pairs

    var person = {
        name: "Cindy",
        age: 32,
        city: "Missoula"
    };

## Retrieving Data

#### You have 2 choices: bracket and dot notation

    var person = {
        name: "Travis",
        age: 21, 
        city: "LA"
    }

    //bracket notation, similar to arrays
    console.log(person["name"]);

    //dot notation
    console.log(person.name);

### Example #2

    var dog = {
        name: "Rusty",
        breed: "Mutt",
        age: 3
    }

    //call breed with:
    
    console.log(dog["breed"]);

    //or

    console.log(dog.breed);

## 3 main differences between brackets and dot notation

    //You cannot use dot notation if the property starts with a number
    someObject.1blah   // invalid
    someObject["1blah"]; //valid

    //You can lookup using a variable with bracket notation
    var str = "name";
    someObject.str   //doesn't look for name
    someObject[str]  // does evaluate str and looks for name

    // You cannot use dot notation for property names with spaces
    someObject.fav color //invalid
    someObject["fav color"];  //valid

## Updating Data
#### Just like an array: access a property and reassign it

    var person = {
        name: "Travis",
        age: 21, 
        city: "LA"
    };

    //to update age 
    person["age"] += 1;
    //to update city
    person.city = "London";

## Creating Object
#### Just like arrays there are a few methods of initializing objects


    //make an empty object and then add to it
    var person = {};
    person.name = "Travis";
    person.age = 21;
    person.city = "LA"

    //all at once
    var person = {
        name: "Travis",
        age: 21,
        city: "LA"
    }

    //Another way of initializing an object 

    var person = new Object();
    person.name = "Travis";
    person.age = 21;
    person.city = "LA";

## Objects Data
#### Objects can hold all sorts of data 

var junkObject = {
    age: 57,
    color: "purple",
    isHungry: true,
    friends: ["Horatio", "Hamlet"],
    pet: {
        name: "Rusty",
        species: "Dog",
        age: 2
    }
};