"use strict";
let listItems = document.querySelectorAll('li');

function changeColor() {
    let inputNumber = document.getElementById('example-number-input').value,
        inputColor = document.getElementById('example-color-input').value;
    console.log(inputNumber);
    if (inputNumber < 1 || inputNumber > listItems.length) {
        alert('List has ' + listItems.length + ' elements');
        return;
    }
    listItems[inputNumber - 1].style.backgroundColor = inputColor;
}

function changeSizetoBig(item) {
    item.style.fontSize = "25px";
}

function changeSizetoNormal(item) {
    item.style.fontSize = "16px";
}