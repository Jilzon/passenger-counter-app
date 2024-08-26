let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
   count = count + 1;
   countEl.textContent = count;
}

function save(){
    let result = count + " - ";
    saveEl.textContent += result;
    count = 0;
    countEl.textContent = count;
}