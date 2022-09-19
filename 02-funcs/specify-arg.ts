// 指定类型参数
const combine = <Type>(arr1: Type[], arr2: Type[]): Type[] => {
  return arr1.concat(arr2)
}

// const arrCombine = combine([1, 2, 3], [true, 3])
// console.log(arrCombine)

const arrCombine = combine<number | boolean>([1, 2, 3], [true, 3])
console.log(arrCombine)