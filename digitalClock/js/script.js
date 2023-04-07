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
    let previousMinutes = null;
    function time() {
        const today = new Date();

        const timeForAmPm = today.toLocaleTimeString("en");
        const amPm = timeForAmPm.replace(/[^AMPM]+/g, ' ');

        const hoursCurrent = today.getHours();
        const minutesCurrent = today.getMinutes();
        const dayNumber = today.getDay();

        const hours = twoNumbers(enHours(hoursCurrent));
        const minutes = twoNumbers(minutesCurrent);
        const day = daysMap[dayNumber];

        if (previousMinutes !== null && minutes - previousMinutes === 0) {
            return;
        }

        previousMinutes = minutes;

        const colon = '<span class="colon">:</span>';

        const wrapInSpan = (str) => `<span>${str}</span>`;

        const nowTime = `${wrapInSpan(day)} ${wrapInSpan(hours)} ${wrapInSpan(colon)} ${wrapInSpan(minutes)} ${wrapInSpan(colon)} ${wrapInSpan(amPm)}`;

        document.getElementById('clock').innerHTML = nowTime;
    }

    setInterval(time, 100);                                            //частота обновления страницы 100                                      
}

function twoNumbers(elementOfTime) {                                   //добавляю к минутам от 0 до 9 вперед 0
    let result = elementOfTime;
    if (elementOfTime < 10) {
        result = '0' + elementOfTime;
    }    
    return result
}

function enHours(hoursCurrent) {                                        //перевожу все часы 13-24 в 1-12
    if (hoursCurrent > 12) {
        hoursCurrent = hoursCurrent - 12;
    }
    return hoursCurrent;
}