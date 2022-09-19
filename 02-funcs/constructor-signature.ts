class Ctor {
  s: string
  constructor(s: string) {
    this.s = s
  }
}

type SomeConstructor = {
  new (s: string): Ctor
}

const fn = (ctor: SomeConstructor) => {
  return new ctor('hello')
}

const f = fn(Ctor)

console.log(f.s)




interface DateType {
  (n?: number): number
  new (s: string): Date
}

const fnDate = (date: DateType) => {
  const d = new date('2012-12-12')
  const n = date(1000)
}