// 只读属性
interface SomeType {
  readonly name: string
}

function todo(obj: SomeType) {
  console.log(obj.name)
  obj.name = "fatjie"
}

// 对象上的readonly不能被对象上的属性继承
interface Home {
  readonly resident: {
    age: number
    name: string
  }
}

function visitIt(home: Home) {
  home.resident.age++
}

