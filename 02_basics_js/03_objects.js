// singleton. singleton obj are created when we use constructor
// Object.create is used to create singleton objs

// object literals

const mySym = Symbol("key1")  // here we are declaring Symbol data type


const JsUser = {
    name: "Huzaifa",
    "full name": "Huzaifa Siddiqa",
    [mySym]: "mykey1",     // here we are using declared symbol dt as object 
    age: 18,
    location: "bengalore",
    email: "huz@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   // accessing the obj
// console.log(JsUser["email"]) // better way to access
// console.log(JsUser["full name"]) // coz "full name" can only accessed in this syntax using [] n not with . operator
// console.log(JsUser[mySym])     // check the dt it will show Symbol dt

JsUser.email = "huzaifa@chatgpt.com"  // change or over write the obj
// Object.freeze(JsUser)            // syntax to freez the obj
JsUser.email = "huzaifa@microsoft.com" //this wont chage coz the obj is freezed , it wont show any error
// console.log(JsUser);



//**************** functions with objects ***********************


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());