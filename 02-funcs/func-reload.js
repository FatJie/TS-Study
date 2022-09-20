"use strict";
function makeDate(mOrTimesTamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimesTamp, d);
    }
    else {
        return new Date(mOrTimesTamp);
    }
}
const d1 = makeDate(123132132);
const d2 = makeDate(5, 8, 12);
const d3 = makeDate(1, 11); // 不符合重载函数的参数个数要求
function fnUnion(x) { }
function funcReturn(x) {
    return true;
}
// 编写好的重载函数
// function len(s: string): number
// function len(arr: any[]): number
// function len(x: any) {
//   return x.length
// }
function len(x) {
    return x.length;
}
len(Math.random() > 0.5 ? 'hello' : [4, 5, 6]);
