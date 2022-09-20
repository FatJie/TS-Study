// 处理冲突
interface Sister {
  name: string
}

interface Sister {
  age: number
}
// 合并处理
const sister1: Sister = {
  name: 'Allen',
  age: 20
}

// 类型别名重复报错
type SisterType = {
  name: string
}
type SisterType = {
  age: string
}
