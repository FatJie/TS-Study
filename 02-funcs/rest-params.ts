const multiply = (n: number, ...m: number[]) => {
  return m.map(x => n*x)
}

console.log(multiply(10, 2, 3, 4))