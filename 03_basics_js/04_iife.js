// Immediately Invoked Function Expressions (IIFE)


(function DB(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                // to execuite iffe after the execution of one iife we use semicolon ; to avoid error



( (name) => {                                  //CAN use arrow func in iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('huzaifa')                                //we are sending args here


//to avoid pollution from global scope we use iife
//syntax ()()    first () is for function inside it , second () is for execution