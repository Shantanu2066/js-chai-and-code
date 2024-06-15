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