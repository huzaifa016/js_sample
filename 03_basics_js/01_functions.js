
function sayMyName(){
    console.log("H");
    console.log("U");
    console.log("Z");
    console.log("A");
    console.log("I");
    console.log("F");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){   //if we dont pass args it will return sam here
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("huzaifa")) //if we pass args it overwrites sam and returns huzaifa
// console.log(loginUserMessage("huzaifa"))


function calculateCartPrice(val1, val2, ...num1){    //... is rest operator used when u dont know the number of arguments passed and gives output as array
    return num1                                      // val1 = 200 val2= 400 ...num1 means [500,2000]
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


//********** passing objects in functions *******************************

const user = {
    username: "huzaifa",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)


//********************* object inside functions ************** 
handleObject({
    username: "sam",
    price: 399
})


//***************** passing Arrays inside functions **************/

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //or else we can pass array directly this way