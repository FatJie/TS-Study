"use strict";
const multiply = (n, ...m) => {
    return m.map(x => n * x);
};
console.log(multiply(10, 2, 3, 4));
