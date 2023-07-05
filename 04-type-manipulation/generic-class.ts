class GenericNumber<NumType> {
  zeroVal: NumType
  add: (x: NumType, y: NumType) => NumType
}

let myGeneric = new GenericNumber<number>
myGeneric.zeroVal = 100
myGeneric.add = (x, y) => { return x + y }