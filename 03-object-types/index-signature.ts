// 索引签名
interface StringArray {
  [index: number]: string
}

const myArr: StringArray = ['a', 'b']
console.log(myArr[0])


interface NumObj {
  [key: string]: number
}

const numObj: NumObj = {
  // name: 'fatjie',
  age: 1,
  sex: 0
}

interface NotOk {
  [index: string]: number | string
  age: number
  sex: string
}

const notOk: NotOk = {
  name: 'fatjie',
  age: 1,
  sex: '男'
}

interface ReadonlyStringArr {
  readonly [index: number]: string
}

const arrs: ReadonlyStringArr = ['a', 'b']
arrs[0] = '100'