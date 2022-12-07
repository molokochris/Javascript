class Rabbit {
  constructor(type) {
    this.type = type
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`)
  }
}


let whiteRabbit = new Rabbit("white")

console.log(whiteRabbit, Rabbit.prototype.speak("ill"))

let sym = Symbol("name")
console.log(sym == Symbol("name"))

console.log(Rabbit.prototype[sym])

Rabbit.prototype[sym] = 55

console.log(whiteRabbit[sym], Rabbit.prototype)