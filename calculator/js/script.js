'use strict'

window.onload = init;

function init() {
    let del = document.getElementById('delete');
    let num = document.getElementsByClassName('number');
    let inpCurrent = document.getElementById('userInput');
    let inpResult;

    for (let i = 0; i < num.length; i++) {
        num[i].onclick = function() {
            inpCurrent.value += num[i].innerHTML;
            inpResult = inpCurrent.value;
            console.log(inpResult)
        }
    }

    del.onclick = function() {
        inpCurrent.value = "";
    }
}