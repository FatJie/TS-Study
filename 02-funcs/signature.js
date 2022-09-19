"use strict";
const doSomething = (fn) => {
    console.log(fn.description + ' returned ' + fn(6));
};
const fn1 = (n) => {
    console.log(n);
    return false;
};
fn1.description = 'hello';
doSomething(fn1);
