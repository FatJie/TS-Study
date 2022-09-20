type voidFunc = () => void

const func1: voidFunc = () => {
  return true
}
const v1: void = func1()
const v2 = func1()

const func2 = (): void => {
  return true
}