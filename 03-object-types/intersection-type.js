"use strict";
const unionType = {
    color: '#ccc',
    radius: 100
};
const draw = (prop) => {
    console.log(prop.color);
    console.log(prop.radius);
};
draw({ color: 'red', radius: 100 });
