const accountId = 622018
let accountEmail = "yuvrajsingh@reediff.com"
var accountPassword = "uv"
accountCity = "CRJ"

// accountId = 8

accountEmail = "uv@uv.com"
accountPassword = "12"
accountCity = "Bihar"

console.log(accountId);

/**
 * prefer not to use var 
 * because of the issue in block scope and functional scope
 */

console.table([accountEmail,accountId,accountCity,accountPassword])