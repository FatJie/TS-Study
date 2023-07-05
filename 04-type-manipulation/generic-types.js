"use strict";
const identity = (arg) => {
    return arg;
};
let myIdentity = identity;
myIdentity('111');
myIdentity(111);
