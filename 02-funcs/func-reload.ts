// 示例一
function makeDate(timesTamp: number): Date // 重载签名
function makeDate(m: number, d: number, y: number): Date // 重载签名
function makeDate(mOrTimesTamp: number, d?: number, y?: number): Date { // 实现签名
  if (d !== undefined && y!== undefined) {
    return new Date(y, mOrTimesTamp, d)
  } else {
    return new Date(mOrTimesTamp)
  }
}
const d1 = makeDate(123132132)
const d2 = makeDate(5, 8, 12)
const d3 = makeDate(1, 11) // 不符合重载函数的参数个数要求

// 示例二
function fnUnion(x: boolean): void
function fnUnion(x: string): void
function fnUnion(x:boolean | string) {}

// 示例三
function funcReturn(x: boolean): boolean
function funcReturn(x: string): string
function funcReturn(x:boolean | string): string | boolean {
  return true
}

// 编写好的重载函数
// function len(s: string): number
// function len(arr: any[]): number
// function len(x: any) {
//   return x.length
// }

function len(x: string | any[]) {
  return x.length
}

len(Math.random() > 0.5 ? 'hello' : [4, 5, 6])