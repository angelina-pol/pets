'use strict'

window.onload = init;

function init() {
    let arrayImage = [
        './slide/img/1.png', 
        './slide/img/2.png', 
        './slide/img/3.png',
        './slide/img/4.png', 
        './slide/img/5.png', 
        './slide/img/6.png',
    ];

    let classImage = [
        "circle1",
        "circle2",
        "circle3",
        "circle4",
        "circle5",
        "circle6"
    ]

    document.getElementById(classImage[0]).style.backgroundColor = '#c3c7c7';
                  
    let image = document.getElementById('img');
    image.setAttribute('src', arrayImage[0]);
    let i = 0;

    right.onclick = function() {
        if (i < arrayImage.length - 1) {
            document.getElementById(classImage[i + 1]).style.backgroundColor = '#c3c7c7';
            i++;
            image.setAttribute('src', arrayImage[i]);
            document.getElementById(classImage[i - 1]).style.backgroundColor = '#ebeded';
        }
        else {
            document.getElementById(classImage[0]).style.backgroundColor = '#c3c7c7';
            image.setAttribute('src', arrayImage[0]);
            i = 0;
            document.getElementById(classImage[classImage.length - 1]).style.backgroundColor = '#ebeded';
        }
    }

    left.onclick = function() {
        if (i > 0) {
            document.getElementById(classImage[i - 1]).style.backgroundColor = '#c3c7c7';
            i--;
            image.setAttribute('src', arrayImage[i]);
            document.getElementById(classImage[i + 1]).style.backgroundColor = '#ebeded'
        }
        else {
            document.getElementById(classImage[classImage.length - 1]).style.backgroundColor = '#c3c7c7';
            image.setAttribute('src', arrayImage[arrayImage.length - 1]);
            i = arrayImage.length - 1;
            document.getElementById(classImage[0]).style.backgroundColor = '#ebeded';
        }
    }
}

