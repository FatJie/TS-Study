// string 类型约束
const printText = (text: string, alignment: 'left' | 'right' | 'center') => {
  console.log(text, alignment)
}

printText('fatjie', 'left')
// printText('fatjie', 'left1')

// number 类型约束
const compare = (a: string, b: string): -1 | 0 | 1 => {
  return a === b ? 1 : a > b ? 0 : -1


}

// 组合类型约束
interface Options {
  width: number
}

const configure = (obj: Options | 'auto') => {}

const obj = { width: 100 }
configure(obj)

configure('auto')
// configure('auto1')

// 文字类型约束
const handleReq = (url: string, method: 'GET' | 'POST') => {}

const req = {
  url: 'www.google.com',
  method: 'GET'
} as const
handleReq(req.url, req.method)