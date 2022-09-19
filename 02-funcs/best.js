"use strict";
// 返回值为 Type 类型，更好
const firstElement1 = (arr) => {
    return arr[0];
};
// 返回值为 any 类型
const firstElement2 = (arr) => {
    return arr[0];
};
const a = firstElement1([1, 2, 3]);
const b = firstElement2([1, 2, 3]);
// 应当尽可能少的适用类型参数
const filter1 = (arr, func) => {
    return arr.filter(func);
}; // 此写法较好
const filter2 = (arr, func) => {
    return arr.filter(func);
};
