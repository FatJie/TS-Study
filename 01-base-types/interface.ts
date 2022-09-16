interface exp {
  x: number
  y: number
}

const printEx = () => {

}

// 扩展接口
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: true
}

const bear: Bear = {
  name: 'winne',
  honey: true
}
console.log(bear.name)

// 扩展类型别名 type
type Dog = {
  name: string
}
type Cat = Animal & {
  cut: boolean
}

const cat: Cat = {
  name: 'jack',
  cut: false
}

// 向现有的接口添加字段
interface MyWindow {
  count: number
}
interface MyWindow {
  title: string
}

// 类型别名 type 创建后不能更改
// type MyWindowType = {
//   name: string
// }
// type MyWindowType = {
//   count: string
// }
