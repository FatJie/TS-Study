// 返回值为 Type 类型，更好
const firstElement1 = <Type>(arr: Type[]) => {
  return arr[0]
}

// 返回值为 any 类型
const firstElement2 = <Type>(arr: any[]) => {
  return arr[0]
}

const a = firstElement1([1, 2, 3])
const b = firstElement2([1, 2, 3])

// 应当尽可能少的适用类型参数
const filter1 = <Type>(arr: Type[], func: (arg: Type) => boolean) => {
  return arr.filter(func)
} // 此写法较好

const filter2 = <Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
) => {
  return arr.filter(func)
}
