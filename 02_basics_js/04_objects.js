
// const tinderUser = new Object() // this is singleton obj...can declare this way
const tinderUser = {}              // not a singleton object   

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {               //we can declare objects inside object
            firstname: "Huzaifa",
            lastname: "Siddiqa"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  //accessing the object insside obj using . dot operator
 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//************ merging objects ******************
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // {} act as target and obj 1 2 & 3 act as source. assign mdn

const obj3 = {...obj1, ...obj2}  // best way to merge obj using ... spread operator
// console.log(obj3);


const users = [                    // its array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email                  // accessing array of obj with this simple syntax
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));        //here will get keys in array formate as output
// console.log(Object.values(tinderUser));      //we get values in array formate as output
// console.log(Object.entries(tinderUser));     // we get seperate key value pairs as arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //hasOwnProperty is used to check weather this property present or not & returns true or false


//****************** Deconstruction ****************************/

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "huzaifa"
}

// course.courseInstructor  //instead of this we can use const {courseInstructor: instructor} = course 

const {courseInstructor: instructor} = course // here we are changing courseInstructor as instructor in shorter way


// console.log(courseInstructor);             // we usually use {} for deconstruction
console.log(instructor);


//****************************** JSON  ***************/

// {
//     "name": "huzaifa",                   //almost in the form of obj bt key n value r treated as strings n theres no obj name
//     "coursename": "javascript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
