"use strict";
const getProps = (obj, key) => {
    return obj[key];
};
const myObj = {
    x: 1,
    y: 2
};
getProps(myObj, 'x');
getProps(myObj, 'm');
