const printId = (id: number | string) => {
  console.log(id)
}

printId(111)

interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square

const getArea = (shape: Shape) => {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
  }
}

const data = getArea({ kind: 'circle', radius: 10 })
console.log(data)