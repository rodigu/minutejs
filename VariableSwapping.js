// 01/21/21

// with a third variable
let a = 10, b = 5
let c = a
a = b
b = c
console.log(a, b)

// with array destructuring
let x = 10, y = 5
x, y = [y, x]
console.log(x, y)
