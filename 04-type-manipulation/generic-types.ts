const identity = <Type>(arg: Type): Type => {
  return arg
}

interface GenericIdentityFn<Type> {
  (arg: Type): Type
}

let myIdentity: GenericIdentityFn<string> = identity

myIdentity('111')
myIdentity(111)