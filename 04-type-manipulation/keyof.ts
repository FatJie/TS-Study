type PointKeyof = {
  x: number
  y: number
}

type P = keyof PointKeyof

const p1: P = 'x'
const p2: P = 'y'
const p3: P = 'z'

type Most = {
  [n: number]: boolean
}
