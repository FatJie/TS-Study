"use strict";
const printId = (id) => {
    console.log(id);
};
printId(111);
const getArea = (shape) => {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
};
const data = getArea({ kind: 'circle', radius: 10 });
console.log(data);
