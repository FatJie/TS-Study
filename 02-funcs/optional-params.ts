// 参数默认值
const f1 = (n: number = 100) => {
  console.log(n.toFixed())
  console.log(n.toFixed(2))
}

// 当为回调写一个函数时永远不要写可选参数
const myForEach = (arr: any[], callback: (arg: any, index?: number) => void) => {
  for(let i = 0; i< arr.length; i++) {
    callback(arr[i], i)
  }
}

myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed())
  // console.log(i?.toFixed())
})