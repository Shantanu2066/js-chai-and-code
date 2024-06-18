//one interesting thing

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) // true

/*

This happens because equality check and conversion operator work differently in JS

When comparing null to 0 using ==, JavaScript does not convert null to a number. Instead, it checks if null is equal to 0, which it is not

When using a comparison operator, JavaScript converts null to a number before making the comparison. The null value is converted to 0 when it's involved in a numeric comparison

*/

//strict check in JS

console.log("2"==2) // true
console.log("2"===2) //false 

/*
This is because in first case Javascript converts "2" to 2 and then checks. In strict check === operator, it compares the data type, if they don't match, its false rightaway
*/