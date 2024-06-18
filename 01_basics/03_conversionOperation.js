let score = "33"
console.log(typeof score) //type string

let newVar = Number(score)
console.log(typeof newVar) //type number

let score1 = "33abc"
let newVar1 = Number(score1)

console.log(typeof newVar1) //This will still be number
console.log(newVar1) //Value of this will be NaN

//conversion to boolean

let isLoggedIn = Boolean(1)
console.log(isLoggedIn)

let isLoggedIn1 = Boolean(0)
console.log(isLoggedIn1)

let isLoggedIn2 = Boolean(5) //This will still give true
console.log(isLoggedIn2)

let isLoggedIn3 = Boolean("")
console.log(isLoggedIn3) //would return false for empty string

let isLoggedIn4 = Boolean("Shantanu")
console.log(isLoggedIn4) //true

//one interesting thing

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) // true

/*

This happens because equality check and conversion operator work differently in JS

When comparing null to 0 using ==, JavaScript does not convert null to a number. Instead, it checks if null is equal to 0, which it is not

When using a comparison operator, JavaScript converts null to a number before making the comparison. The null value is converted to 0 when it's involved in a numeric comparison

*/