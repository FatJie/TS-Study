type Greeter = (a: string) => void

const greeter = (fn: Greeter) => {
  fn('hello word')
}

const printToConsole = (s: string) => {
  console.log(s)
}

greeter(printToConsole)
