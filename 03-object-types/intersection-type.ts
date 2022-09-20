interface ColorsType {
  color: string
}
interface CirclesType {
  radius: number
}
type UnionType = ColorsType & CirclesType

const unionType: UnionType = {
  color: '#ccc',
  radius: 100
}

const draw = (prop: ColorsType & CirclesType) => {
  console.log(prop.color)
  console.log(prop.radius)
}
draw({ color: 'red', radius: 100 })