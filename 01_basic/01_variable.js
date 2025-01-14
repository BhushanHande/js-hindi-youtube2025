const accountId = 144553
let accountEmail = "Bhushan@google.com"
var accountPassword = "12345"
accountCity = "Klayan"
let accountState = 2+"u824u8" ;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([ "accountId :" +  accountId, accountEmail, accountPassword, accountCity, accountState])