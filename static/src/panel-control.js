let drag = document.querySelector('.handle');
let topPanel = document.querySelector('.top');
let bottomPanel = document.querySelector('.bottom');
let isDragging = false;
let dragStart = {};

drag.addEventListener('click', function(e){
    isDragging = !isDragging;
    dragStart.y = e.clientY;
})

document.addEventListener('mousemove', function(e){
    if( isDragging ) {
        let topPercent = e.clientY / window.innerHeight * 100;
        let bottomPercent = (100 - topPercent) - 1;
        topPanel.style.flex = '1 1 ' + topPercent + '%';
        bottomPanel.style.flex = '1 1 ' + bottomPercent + '%';
    }
    resize();
})