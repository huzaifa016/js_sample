const name = "Huzaifa"
const repocount = 5

console.log(name + repocount + " value" );
// instead of this we can use backticks `` amd ${}

//string interpolation
console.log(`Hello! my name is ${name} and my repo count is ${repocount} .`);

//Declaring strings
const MyName = new String ("Huzaifa");
console.log(typeof MyName);

//string methods
console.log(MyName[1]);
console.log(MyName.__proto__);

console.log(MyName.length);
console.log(MyName.toUpperCase());
console.log(MyName.charAt(1));
console.log(MyName.indexOf('z'));


const NewName = MyName.substring( 0 , 4)  // 4 is excluded
console.log(NewName);


const NewName1 = MyName.slice( -5,-2)  // can access from last by - symbole
console.log(NewName1);

const city = "     Bengalore    "
console.log(city);
console.log(city.trimStart());

const url = "https://Huzaifa.com/huz%20abcd"
console.log(url.replace('%20' , '-'));

console.log(url.includes("huz"));   //returns true if the sting is available else false

const GameName = "Find-the-cat"
console.log(GameName.split("-"));




