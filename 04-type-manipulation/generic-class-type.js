"use strict";
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = 'Bob';
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
const createInstance = (c) => {
    return new c();
};
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
createInstance(BeeKeeper);
