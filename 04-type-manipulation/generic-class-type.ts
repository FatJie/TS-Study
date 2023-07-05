class BeeKeeper {
  hasMask: boolean = true
}
class ZooKeeper {
  nametag: string = 'Bob'
}
class Animal {
  numLegs: number = 4
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper()
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper()
}

const createInstance = <A extends Animal>(c: new () => A): A => {
  return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask
createInstance(BeeKeeper)