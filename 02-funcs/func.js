"use strict";
const greeter = (fn) => {
    fn('hello word');
};
const printToConsole = (s) => {
    console.log(s);
};
greeter(printToConsole);
