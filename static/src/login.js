'use strict'


let url = 'http://localhost:2001/editor/';

const methods = function ( methodType, data, callback ) {
    const xhr = new XMLHttpRequest();
    xhr.open( methodType, url + data);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            console.log({ 'resp' : xhr.responseText});
            callback(JSON.parse(xhr.responseText));
        };
    };
    
    xhr.send();
    console.log('request sent')
};

const inputField = document.querySelector('#login');

let submitButton = document.querySelector('#submit');    
    submitButton.innerHTML='OK';
    submitButton.addEventListener('click', function(){
        window.location= url + inputField.value;
    });




function submitClick() {
    methods('GET', inputField.value, callback );
}