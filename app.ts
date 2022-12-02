const increase = document.getElementById("increase") as HTMLButtonElement;
const decrease = document.getElementById("decrease") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;
const number = document.getElementById("number")as HTMLDivElement;

let count: number = 0;

increase.addEventListener("click", function() {
    count ++;
    let str = count.toString()
    number.innerHTML = str;

});

decrease.addEventListener("click", function() {
    count --;
    if (count <= 0) {
        count = 0;
        
    }
    let str = count.toString()
    number.innerHTML = str;
    

});

reset.addEventListener("click", function() {
    count = 0;
    let str = count.toString()
    number.innerHTML = str;
    

});