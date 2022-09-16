"use strict";
var Derection;
(function (Derection) {
    Derection[Derection["up"] = 1] = "up";
    Derection[Derection["down"] = 2] = "down";
    Derection[Derection["left"] = 3] = "left";
    Derection[Derection["right"] = 4] = "right";
})(Derection || (Derection = {}));
console.log(Derection.up);
console.log(Derection.down);
