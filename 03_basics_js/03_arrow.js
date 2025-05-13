
//here we are declaring func in obj n using this 

const user = {
    username: "huzaifa",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);     //here we get current running obj 
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);          //here we get empty obj {}  bt on console window will b default obj


// function chai(){
//     let username = "huzaifa"
//     console.log(this.username);    
// }

// chai()

// const chai = function () {
//     let username = "huzaifa"
//     console.log(this.username);    
// }

const chai =  () => {
    let username = "huzaifa"
    console.log(this);
}


// chai()
 

// =================== Arrow Functions =================

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2    // implicite func no need to use {} and return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )  // if we use {} thn u should write return keyword else if u use () no need of return keyword

const addTwo = (num1, num2) => ({username: "huzaifa"}) // u have to wrap obj inside () 


console.log(addTwo(3, 4))

//======== we use arrow func in these =========
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
