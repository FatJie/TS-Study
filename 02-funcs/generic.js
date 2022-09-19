"use strict";
// 泛型
const firstElement = (arr) => {
    return arr[0];
};
firstElement(['1', 100, true]);
firstElement([100, '1', true]);
firstElement([true, '1', 100]);
firstElement([]);
const map = (arr, func) => {
    return arr.map(func);
};
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
