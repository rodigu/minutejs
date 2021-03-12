// function lE (xn, r) {
//   return r * xn * (1 - xn)
// }
//
// function lEE (r_, i_) {
//   let ret = 0.8
//   for (let i = 0; i < i_; i++) {
//     ret = lE(ret, r_)
//   }
//   return ret
// }
//
// function setup () {
//   canv = createCanvas(windowWidth - 10, windowHeight)
//   noStroke()
// }
//
// let xp = 10
// let cl = 0.8
//
// function draw () {
//   if (cl < 0 || cl > height) cl = 0.8
//   fill(220, 50)
//   if (xp > width) xp = 10
//   cl = lE(cl, 4 * xp / width)
//   circle(xp += 10, height / 2 + 500 * cl, 20)
// }
function lE (xn, r) {
  return r * xn * (1 - xn)
}

function lEE (r_, i_) {
  let ret = 0.8
  for (let i = 0; i < i_; i++) {
    ret = lE(ret, r_)
  }
  return ret
}

function setup () {
  canv = createCanvas(windowWidth - 10, windowHeight)
  noStroke()
  background(0)
}

let l = 0.8
let R = 2
let xp = 0
let togl = false

function mousePressed () {
  background(0, 50)
  togl = togl ? false : true
}

function draw () {
  fill(250 * (1 - mouseX / width), 250 * mouseX / width, 220, 20)
  if (togl) {
    R = 3 * mouseX / width + 1
    l = 0.8 // comment for smooth switching
  }
  for (let i = 0; i < 50 + 50 * Math.random(); i++) {
    l = lE(l, R)
    if (i > 40) circle(mouseX, height * l, 5)
  }
}
