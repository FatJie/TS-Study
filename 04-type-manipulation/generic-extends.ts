interface LengthWith {
  length: number
}

const loginIdentity = <Type extends LengthWith>(arg: Type): Type => {
  console.log(arg.length)
  return arg
}

loginIdentity(1445)
loginIdentity('1445')
loginIdentity(['1445'])