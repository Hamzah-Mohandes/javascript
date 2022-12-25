//bad

// var count = 1
// if (true) {
//     count += 1
// console.log(count);
// }


//good 

// let count = 1
// if (true) {
//     count += 1
//     console.log(count);
// }

// Bad Objects

// const item = new Object()

// good

// const item = {}
// bad

// function getkey(k) {
//     return `a key named ${k}`
// }
// const obj = {
//     id: 5,
//     name: 'Frane'
// };
// obj[getkey('enabled')] = true
// console.log(obj);

// good

// function getkey(k) {
//     return `a key named ${k}`
// }
// const obj = {
//     id: 5,
//     name: 'Frane'
//     obj[getkey('enabled')] = true
// };

// console.log(obj);