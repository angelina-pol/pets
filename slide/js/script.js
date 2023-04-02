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
                  
    let image = document.getElementById('img');
    image.setAttribute('src', arrayImage[0]);
    let i = 0;

    right.onclick = function() {
        if (i < arrayImage.length - 1) {
            i++;
            image.setAttribute('src', arrayImage[i]);
        }
        else {
            image.setAttribute('src', arrayImage[0]);
            i = 0;
        }
    }

    left.onclick = function() {
        if (i > 0) {
            i--;
            image.setAttribute('src', arrayImage[i]);
        }
        else {
            image.setAttribute('src', arrayImage[5]);
            i = 5;
        }
    }
}

