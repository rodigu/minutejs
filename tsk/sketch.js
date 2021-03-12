let y = (x_, y_) => {
  return -3 * x_
}
let x = (x_, y_) => {
  return -y_
}

class Walker {
  constructor (x_, y_, c_ = 0xFFFFFF, s_ = 7, speed_ = 5) {
    this.x = x_
    this.y = y_
    this.size = s_
    this.color = c_
    this.speed = speed_
    this.nV = createVector(0, 0)
  }

  move (dx_, dy_) {
    this.nV.x = dx_(this.x, this.y)
    this.nV.y = dy_(this.x, this.y)
    this.nV.normalize() // Normalized Vector
    this.x += - this.speed * this.nV.x
    this.y += - this.speed * this.nV.y
  }

  draw () {
    fill(this.color)
    push()
    translate(width / 2, height / 2)
    translate(this.x, this.y)
    rotate(-atan2(-this.nV.x, -this.nV.y))
    circle(0, -this.size / 2, 2 * this.size)
    rect(-this.size, -this.size / 2, 2 * this.size, this.size / 2)
    triangle(-this.size, -this.size / 2, this.size, -this.size / 2, 0, this.size)
    pop()
  }
}

const colors = [
  '#8B1E3F', '#3C153B', '#89BD9E', '#F0C987', '#DB4C40', '#C78283', '#607196'
]
let currentColor = 0
const walkers = []
let SCALE = 1

function setup () {
  createCanvas(windowWidth, windowHeight)
  fill(250)
  background(0)
  noStroke()
}

function mousePressed () {
  walkers.push(new Walker(mouseX - width / 2, mouseY - height / 2, colors[currentColor]))
  currentColor = (currentColor >= colors.length - 2) ? 0 : currentColor + 1
}

function draw () {
  background(0, 5)
  strokeWeight(2)
  stroke(250, 100, 100)
  line(width / 2, 0, width / 2, height)
  line(0, height / 2, width, height / 2)
  noStroke()
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].move(x, y)
    walkers[i].draw()
  }
  for (let i = 0; i < walkers.length; i++) {
    let cw = walkers[i]
    if (cw.x > 2 * width || cw.x < -2 * width || cw.y < -2 * height || cw.y > 2 * height) {
      walkers.splice(i, 1)
      i--
    }
  }
}
