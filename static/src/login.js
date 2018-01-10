'use strict'


let url = 'http://localhost:2001';

const methods = function ( methodType, data ) {
    const xhr = new XMLHttpRequest();
    xhr.open( methodType, url );
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            console.log({ 'resp' : xhr.responseText});
            callback(JSON.parse(xhr.responseText));
        };
    };
    
    xhr.send(data);
    console.log('request sent')
};

let submitButton = document.querySelector('#submit');    
    submitButton.innerHTML='OK';
    submitButton.addEventListener('click', submitClick);

let inputField = document.querySelector('#login');

function submitClick() {
    methods('POST', inputField.value );
}