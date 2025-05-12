"use strict" // treat all js code as newer version

//alert (3 + 3)  //we are using nodejs , not browser

console.log( 3 
    +3)          // code readability should be high
    
 
let name = "Huzaifa"
let age = 18
let isLoggedIn = false 
let state = null

//========== primitive datatypes =======
//numbers => 2^53 (range)
//bigint
//strings => ""
//boolean => true/false
//null => standalone value
//undefined => undefined
//symbole => unique


//========== non primitive datatypes====
//objects , Arrays , Functions

console.log(typeof null); //object
console.log(typeof undefined); //undefined


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stacks(primitive) ,  Heap(non primitive)

let Myyoutubename = "CookWithMe"

let anotherName = Myyoutubename
anotherName = "MyKitchen"

console.log(Myyoutubename);
console.log(anotherName);

let user1 = {
    email : "user1@google.com" ,
    upi : "7654@ybl"
}

let user2 = user1

user2.email = "users@google.com"

console.log(user1.email)
console.log(user2.email);



