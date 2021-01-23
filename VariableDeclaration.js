// 01/21/21

var a = 3 // var declares global variables
if (true) {
  var b = 5
  console.log(a + b)
}
console.log(a + b)

if (true) {
  const c = 1.6 // const declares local constant variables
  let d = 3     // let declares local variables
  console.log(d - c)
}
// c and d cannot be called outside of the scope they were declared
console.log(d - c)
