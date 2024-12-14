// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint
// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

let age = 18;                   // number     => range of number (2 to the power 53)
let Name = "Coder";             // string     => " " use double quotes.
let StockPrice = 7500056464n;   // bigint     => used for big number.
let isLogedIn = "true";         // boolean    => true/ false.
let temp = null;                // null       => it is a standalone va;ue/ represent empty /("typeof null is object.")
let city;                       // undefined  => declare variable but not initalize any value to it.
                                // symbol     => used for unique value.
                                // object     =>

// ***********************************************************************************************
console.log(typeof age);        // console.log(typeof ang)
console.log(typeof Name);
console.log(typeof StockPrice);
console.log(typeof isLogedIn);
console.log(typeof temp);
console.log(typeof city);
console.log(typeof undefined);  // typeof undefined is undefined.

// ***********************************************************************************************


// 2) Non-primitive Datatypes
// Array declaration
const heros = ["hulk" ,"ironman","puspa","marshal"];  

// function declaration
const myFunction = function name(params) 
        {
            console.log("hello from function"); 
        }

// object declaration
    let myObject = 
        {
            name:"coder",
            age: 17,
        }