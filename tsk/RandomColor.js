function setup () {
  createCanvas(windowWidth, windowHeight)
}
let k = 0
let goUp = true
function draw () {
  background(k)
  const ra = Math.random()
  k += goUp ? ra : -ra
  goUp = (k > 250 || k < 0) ? !goUp : goUp
}
