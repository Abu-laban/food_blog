'use strict';

let sideNav = document.getElementById('sideBar');

let btnEl1 = document.getElementById('btn1');

let btnEl2 = document.getElementById('btn2');

let btnEl3 = document.getElementById('btn3');

let btnEl4 = document.getElementById('btn4');

btnEl1.href = 'javascript:void(0)';

btnEl1.onclick = function closeNav() {

    sideNav.style.display = 'none';

};

btnEl2.href = '#food';

btnEl2.onclick = function closeNav() {

    sideNav.style.display = 'none';

};

btnEl3.href = '#about';

btnEl3.onclick = function closeNav() {

    sideNav.style.display = 'none';

};

btnEl4.onclick = function openNav() {

    sideNav.style.display = 'block';
};

