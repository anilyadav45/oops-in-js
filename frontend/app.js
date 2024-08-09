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