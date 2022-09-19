"use strict";
const longest = (a, b) => {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
};
const nums = longest([1, 2], [2, 3, 5]);
console.log(nums);
const strs = longest('fatjie', 'fat');
console.log(strs);
// 受限制条件
const minimumLength = (obj, min) => {
    if (obj.length >= min) {
        return obj;
    }
    else {
        return { length: min };
    }
};
const arrMin = minimumLength([1, 2, 3], 5);
console.log(arrMin.slice(0));
