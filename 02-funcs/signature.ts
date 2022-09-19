type Describle = {
  description: string
  (arg: number): boolean
}

const doSomething = (fn: Describle) => {
  console.log(fn.description + ' returned ' + fn(6))
}

const fn1 = (n: number) => {
  console.log(n)
  return false
}
fn1.description = 'hello'

doSomething(fn1)