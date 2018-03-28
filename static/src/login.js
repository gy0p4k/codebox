'use strict'


let url = 'http://18.195.151.95/editor/';


const inputField = document.querySelector('#login');
const redirect = function () {
    window.location.href = url + inputField.value;
}


let submitButton = document.querySelector('#submit');    
submitButton.innerHTML='OK';
submitButton.addEventListener('click', redirect);

function submitClick() {
    methods('GET', inputField.value, callback );
}

