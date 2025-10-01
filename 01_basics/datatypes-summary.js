// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non-Primitive)
// Arrays, Objects, Functions

// const score:number = 100 // In TypeScript we have to write like this.

const scoreValue = 100.3
// console.log(typeof scoreValue) // number

const isLoggedIn = false

const outsideTemp = null
// console.log(typeof outsideTemp) // object

let userEmail;
// console.log(typeof userEmail)

const id = Symbol('1234')
const anotherId = Symbol('1234')
// console.log(id === anotherId) // false
// console.log(typeof anotherId) // symbol

// const bigNumber = 3455677565355385398538958385035830282489n
// console.log(typeof bigNumber) // bigint

const heroes = ["Shaktimaan", "Nagraj", "Doga"]
// console.log(typeof heroes) // object
// console.log(heroes)

let myObj = {
    name : "Kushagra",
    age : 18,
}

// console.log(myObj)
// console.log(typeof myObj) // object

let myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof myFunction) // function (But we call it as Object Function.)
