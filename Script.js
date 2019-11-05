'use strict';

let icon = document.getElementById('menu-icon'),
    closeMenu = document.getElementById('close'),
    menu = document.getElementById('menu');

icon.addEventListener('click', switchMenu);
closeMenu.addEventListener('click', switchMenu);

function switchMenu() {
    if (menu.classList.contains('hide-menu')) {
        menu.classList.remove('hide-menu');
        menu.classList.add('show-menu');
    } else {
        menu.classList.remove('show-menu');
        menu.classList.add('hide-menu');
    }
}

let labels = document.querySelectorAll('.labels label'),
    selectButton = document.querySelector('.select-button'),
    selectButtonImg = document.querySelector('.select-button img'),
    flag = true;

for (let i = 0; i < labels.length; i++) {
    labels[i].style = 'top: -' + 50 * i + 'px; z-index: ' + (8 - i);
    labels[i].addEventListener('click', function () {
        for (let i = 0; i < labels.length; i++) {
            labels[i].style = 'top: -' + 50 * i + 'px; z-index: ' + (8 - i);
            labels[i].classList.remove('labels-over');
            selectButtonImg.style = 'transform:rotate(0deg);';
            flag = true;
        }
        this.style = 'top: -' + 50 * this.id + 'px; z-index: 9;';
    });
}

selectButton.addEventListener('click', function () {
    if (flag == true) {
        for (let i = 0; i < labels.length; i++) {
            labels[i].style = 'top: 0px;';
            labels[i].classList.add('labels-over');
            selectButtonImg.style = 'transform:rotate(180deg);';
            flag = false;
        }
    } else {
        for (let i = 0; i < labels.length; i++) {
            labels[i].style = 'top: -' + 50 * i + 'px; z-index: ' + (8 - i);
            labels[i].classList.remove('labels-over');
            selectButtonImg.style = 'transform:rotate(0deg);';
            flag = true;
        }
    }

});