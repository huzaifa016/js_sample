const accountId = 1234
let accountEmail = "abcd@gmail.com"
var accountPassword = "qwertz"
accountCity = "Bengalore"
let accountState;

// accountId = 2 // not allowed

accountEmail =  "hijk@google.com"
accountPassword = "lmnop"
accountCity = "kunigal"

console.log(accountId);

console.table ([accountId , accountEmail ,accountPassword, accountCity, accountState]);

/*
prefer not to use var
because of issue in block scope and in functional scope

*/