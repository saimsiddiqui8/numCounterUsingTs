"use strict";
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const number = document.getElementById("number");
let count = 0;
increase.addEventListener("click", function () {
    count++;
    let str = count.toString();
    number.innerHTML = str;
});
decrease.addEventListener("click", function () {
    count--;
    if (count <= 0) {
        count = 0;
    }
    let str = count.toString();
    number.innerHTML = str;
});
reset.addEventListener("click", function () {
    count = 0;
    let str = count.toString();
    number.innerHTML = str;
});
