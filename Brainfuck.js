// Brainfuck interpreter in JS
function bf (code) {
  let cell = []
  let pointer = 0
  let looper = {
    loopBackTo: [],
    loopEnd: []
  }
  let output = ''
  let err = 0
  for (let reader = 0; reader < code.length; reader ++) {
    cell[pointer] = cell[pointer] ?? 0
    cell[pointer] = (cell[pointer] < 0) ? 0 : cell[pointer]
    reader = (reader < 0) ? 0 : reader
    if (code[reader] === '>') { pointer ++ }
    else if (code[reader] === '<') { pointer -- }
    else if (code[reader] === '+') { cell[pointer] ++ }
    else if (code[reader] === '-') { cell[pointer] -- }
    else if (code[reader] === '.') { output += (String.fromCharCode(cell[pointer])) }
    else if (code[reader] === '[') {
      if (looper.loopBackTo[looper.loopBackTo.length - 1] != reader){
        looper.loopBackTo.push(reader)
      }
    }
    else if (code[reader] === ']') {
      if (cell[pointer] > 0) {
        looper.loopEnd.push(reader)
        reader = looper.loopBackTo[looper.loopBackTo.length - 1] - 1
      } else {
        looper.loopBackTo.pop()
        looper.loopEnd.pop()
      }
    }
    err ++
    // console.log(code[reader], looper.loopBackTo)
    if (err > 1500) return cell
    // if (code[reader] === ']') {
    //   let out = prompt()
    //   if (out === 'a') return "out"
    // }
  }
  return output
}

(() => {
  console.log(bf("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."))
})()
