const getProps = <Type, Key extends keyof Type>(obj: Type, key: Key) => {
  return obj[key]
}

const myObj = {
  x: 1,
  y: 2
}

getProps(myObj, 'x')
getProps(myObj, 'm')