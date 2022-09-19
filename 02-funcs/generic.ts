// 泛型
const firstElement = <T>(arr: any[]): T | undefined => {
  return arr[0]
}

firstElement<string>(['1', 100, true])
firstElement<number>([100, '1', true])
firstElement<boolean>([true, '1', 100])
firstElement<undefined>([])

const map = <Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] => {
  return arr.map(func)
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n))