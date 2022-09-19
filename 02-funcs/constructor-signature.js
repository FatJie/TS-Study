"use strict";
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
const fn = (ctor) => {
    return new ctor('hello');
};
const f = fn(Ctor);
console.log(f.s);
const fnDate = (date) => {
    const d = new date('2012-12-12');
    const n = date(1000);
};
