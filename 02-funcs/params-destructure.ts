type ObjType = { a: number, b: number, c: number }
const sum = ({ a, b, c }: ObjType) => {
  console.log(a + b + c)
}
sum({
  a: 10,
  b: 11,
  c: 12
})