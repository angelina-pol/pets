'use strict'

const daysMap = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
};

window.onload = init;

function init() {
    let today = new Date(); 

    let timeForAmPm = today.toLocaleTimeString("en");
    let amPm = timeForAmPm.replace(/[^AMPM]+/g, ' ');

    let hoursCurrent = today.getHours();
    let minutesCurrent = today.getMinutes();
    let dayNumber = today.getDay();

    let hours = twoNumbers(enHours(hoursCurrent));
    let minutes = twoNumbers(minutesCurrent);
    let day = daysMap[dayNumber];

    let nowTime = day + ' ' + hours + ' : ' + minutes + ' : ' + amPm;

    document.getElementById('time').innerHTML = nowTime;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 12) {
            arr[i] = arr[i] - 12;
        }
    }
}


function twoNumbers(elementOfTime) {
    let result = elementOfTime;
    if (elementOfTime < 10) {
        result = '0' + elementOfTime;
    }    
    return result
}

function enHours(hoursCurrent) {
    if (hoursCurrent > 12) {
        hoursCurrent = hoursCurrent - 12;
    }
    return hoursCurrent;
}