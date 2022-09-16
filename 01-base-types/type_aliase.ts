type Point = {
  x: 1
  y: 2
}

type ID = string | number

type BaseType = boolean

const func = (id: ID): BaseType => {
  if (typeof id === 'string') {
    return true
  } else {
    return false
  }
}