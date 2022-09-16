"use strict";
const getAreaNever = (shape) => {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        case 'triangle':
            return shape.sideLength;
        default:
            // 此时可利用 never 做穷尽性检查(必须添加case 'triangle'才可通过检查)
            const defaultVal = shape;
            return defaultVal;
    }
};
