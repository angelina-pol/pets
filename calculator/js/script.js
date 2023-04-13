'use strict'

window.onload = init;

function init() {
    let del = document.getElementById('delete');
    let num = document.getElementsByClassName('number');
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let mul = document.getElementById('mul');
    let divide = document.getElementById('divide');
    let inpCurrent = document.getElementById('userInput');
    let inpResult;

    for (let i = 0; i < num.length; i++) {
        num[i].onclick = function() {
            inpCurrent.value += num[i].innerHTML;
            inpResult = inpCurrent.value;
            return inpResult;
        }
    }

    del.onclick = function() {
        inpCurrent.value = "";
    }

    plus.onclick = function() {
        inpCurrent.value = inpResult + plus.innerHTML;
        inpResult = inpCurrent.value;
        return inpResult;
    }

    minus.onclick = function() {
        inpCurrent.value = inpResult + minus.innerHTML;
        inpResult = inpCurrent.value;
        return inpResult;
    }

    mul.onclick = function() {
        inpCurrent.value = inpResult + mul.innerHTML;
        inpResult = inpCurrent.value;
        return inpResult;
    }

    divide.onclick = function() {
        inpCurrent.value = inpResult + divide.innerHTML;
        inpResult = inpCurrent.value;
        return inpResult;
    }

}