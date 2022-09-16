"use strict";
// string 类型约束
const printText = (text, alignment) => {
    console.log(text, alignment);
};
printText('fatjie', 'left');
// printText('fatjie', 'left1')
// number 类型约束
const compare = (a, b) => {
    return a === b ? 1 : a > b ? 0 : -1;
};
const configure = (obj) => { };
const obj = { width: 100 };
configure(obj);
configure('auto');
// configure('auto1')
// 文字类型约束
const handleReq = (url, method) => { };
const req = {
    url: 'www.google.com',
    method: 'GET'
};
handleReq(req.url, req.method);
