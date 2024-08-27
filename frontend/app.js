//why we use OOPS let's see 
// //normal objects :- 
// const student1 = {
//     name: "Anil Yadav",
//     age: 21,
//     country: "Nepal",
// }

// const student2 = {
//     name: "Sunil Yadav",
//     age: 26,
//     country: "Nepal",
// }

// const student3 = {
//         name: "Rupak Yadav",
//         age: 21,
//         country: "Nepal",
//     }
//what like these if we have to create same data lakhs time think of it so we use Class Oops Concepts start from here  we use Class (Template/Blueprint)
//there are many more concepts in Oops let's see

//Prototypes :- Every obj has it's prototype where exist many methods like push,pop etc
let arr = [2, 3, 4, 5];
arr.push(6); //here there is no push propertie for arr but there is prototype exist for arr obj where push,pop,etc exist
// console.log(arr.__proto__); // arr of prototype 
//changing definition of push in prototype
arr.__proto__.push = (n) => {
    console.log(`Pushing Number ${n} to arr`);
} //push is now changed for copy it's not actual working for pushed elements in arr

//Outputs 
// Array(5) [ 2, 3, 4, 5, 6 ]

// arr.push(7)
// Pushing Number 7 to arr


//for Actual :- Arrays.prototype(actual obj) 
//for string :- String.prototype
//prototypes is more efficient it lowers the memory let's see

//it will print false bcoz these string takes diff memory ref but while using prototype objs it will be same if we use same methods
const student3 = {
    name: "Rupak Yadav",
    age: 21,
    country: "Nepal",
    getmsg: () => {
        console.log("hey how are you");
    }
}

const student4 = {
    name: "Rupak Yadav",
    age: 21,
    country: "Nepal",
    getmsg: () => {
        console.log("hey how are you");
        return "hi hell0";
    }
}

student3.getmsg === student4.getmsg; // it will show false bcoz still it is not prototype method but after using prototype it reference to same memorry let'se see altough are not same
"abc" === "abc"; //it will show false also


//factory function :- it is a simple function which make object efficiently but we don't use later bcoz it takes diff indivisual copy for diff objects
function StudentMaker(name, age, branch) {
    const student = {
        name: name,
        age: age,
        branch: branch,
        printName() {
            console.log(`Student name is ${this.name}`);
        }
    };
    return student; //this function make student obj efficiently but it make diff copies let's see with comparing
}
let s1 = StudentMaker("Anil", 21, "CSE");
let s2 = StudentMaker("Nitesh", 20, "CSE");

//while comparing 
s1 === s2; // it will show false bcoz diff copies taken

//we have mostly used and efficient operator to create object that is new operator
//Constructor :- Doesn't return any things and start with capital letter for 

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let s3 = new Person("Anil", 23);
// let s4 = new Person("Guddu", 25);

// Person.prototype.msg = function () {
//     console.log(`Person name is ${this.name}`);
// } 
//this method will set to the prototype so while accesing it is same for objs

//s3.msg() === s4.msg() ; //it's msg value is diff although it will show 'true' bcoz we made that prototype for all both obj 

//One more better way is "Classes" will be used as better way than above 
//Classes:- imagine class as template to make objects 
//Constructor keyword is used to define that this function is Constructor like


//We use a constructor in a class to initialize the object's properties when an instance of the class is created. The constructor sets up the initial state of the object, ensuring that it starts with the necessary values and configuration.

//achieving same results using class

class Person {
    constructor(name, age, branch) {
        this.name = name;
        this.age = age;
        this.branch = branch;
    }
    msg() {
        console.log(`Person name is ${this.name}`);
    } //auto this functon added as prototype 
}
//creating objects is same process but one advantage is we class auto add prototype 

//check console : Person there auto msg is exist in prototype we don't have to manually set prototype




//INHERITANCE:- inheritance is used to avoid writing repeating codes it is concepts that allows one child class to accesss parent or base class properties
// extends is used to inherit while super is used to call parent or base class in child so that parent properties can be accessed 

//parent or base class that is simillar for all mammal
class mammal {
    constructor(name, weight, legs) {
        this.name = name;
        this.weight = weight;
        this.legs = legs;
        this.type = "warm-blooded";
    }
} //this mammal parent is mostly common for all mammal so it can extend on many other mammal type

class dog extends mammal {
    constructor(name, weight, legs) {
        super(name, weight, legs); //mammal class called
    }
    barks() {
        console.log("Whooo...!");
    }
}

class cat extends mammal {
    constructor(name, weight, legs) {
        super(name, weight, legs); //mammal class called
    }
    meow() {
        console.log("meoww...!");
    }
}


//console outputs :-
//let d1 = new dog("tonny",18,4)
//d1
//Object { name: "tonny", weight: 18, legs: 4, type: "warm-blooded" }

// d1.type
// "warm-blooded"
// d1.name
// "tonny"
// let c1 = new cat("kity",8,4)
// c1
// Object { name: "kity", weight: 8, legs: 4, type: "warm-blooded" }

// c1.legs
//4 