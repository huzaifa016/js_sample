// Dates

// let Mydate = new Date ()
// console.log(Mydate);
// console.log(Mydate.toString());
// console.log(Mydate.toDateString());
// console.log(Mydate.toLocaleString());
// console.log(typeof Mydate);

// let MyCreatedDate = new Date (2025, 0 , 14)
// let MyCreatedDate = new Date (2025, 0 , 14, 5, 3 )
// let MyCreatedDate = new Date ("2025-01-14")
let MyCreatedDate = new Date ("06-01-2003")
// console.log(MyCreatedDate.toLocaleString());

let MyTimeStamp = new Date()

// console.log(MyTimeStamp);
// console.log(MyCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let NewDate =  new Date()
console.log(NewDate);
console.log(NewDate.getDay());     // 0 means sunday
console.log(NewDate.getMonth()+1); //0 means january so we add + 1

NewDate.toLocaleString ('default',{

    weekday: "long"

})










