'use strict'

window.onload = init;

function calculate(num1, num2, action) {
    let result;
    switch(action) {
        case '+':
            result = num1 + num2;
            break
        case '-':
            result = num1 - num2;
            break
        case '*':
            result = num1 * num2; 
            break
        case '/':
            result = num1 / num2;   
            break     
    }
    return result;
}

function init() {

    const del = document.getElementById('delete');
    const num = document.getElementsByClassName('number');
    const plus = document.getElementById('plus');
    const minus = document.getElementById('minus');
    const mul = document.getElementById('mul');
    const divide = document.getElementById('divide');
    const equally = document.getElementById('equally');
    const inpCurrent = document.getElementById('userInput');
    let inpResult;

    let num1 = null;
    let num2 = null;
    let result = [];
    let action;
    let actionPressed = false;

    for (let i = 0; i < num.length; i++) {
        num[i].onclick = function() {
            if (actionPressed) {
                inpCurrent.value = num[i].innerHTML;
            } else {
                inpCurrent.value += num[i].innerHTML;
            }
            actionPressed = false;
            result.push(num[i].innerHTML)
            console.log(result)
        }
    }

    plus.addEventListener('click', getAction);
    minus.addEventListener('click', getAction);
    mul.addEventListener('click', getAction);
    divide.addEventListener('click', getAction);

    function getAction(event) {
        actionPressed = true;
        if (num1 === null) {
            num1 = +result.join('');
        } else {
            num2 = +result.join('');
        }

        if (num1 !== null & num2 !== null) {
            let resultCalculate = calculate(num1, num2, action);
            inpCurrent.value = resultCalculate;
            num1 = resultCalculate;
            num2 = null;
        }
        action = event.target.innerHTML;
        result = [];
    }

    del.onclick = function() {
        inpCurrent.value = "";
        num1 = null;
        num2 = null;
        result = [];
    }

    equally.onclick = function() {
        actionPressed = true;
        if (num1 === null) {
            num1 = +result.join('');
        } else {
            num2 = +result.join('');
        }

        if (num1 !== null & num2 !== null) {
            let resultCalculate = calculate(num1, num2, action);
            inpCurrent.value = resultCalculate;
            num1 = resultCalculate;
            num2 = null;
        }
        result = [];
    }
}