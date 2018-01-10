var terminal = document.querySelector('#terminal');
var handle = document.querySelector('.handle');
var top = document.querySelector('.top');
handle.addEventListener('mousedown', initialiseResize, false);


function initialiseResize(e) {
    window.addEventListener('mousemove', startResizing, false);
    window.addEventListener('mouseup', stopResizing, false);
}
function startResizing(e) {
    let mouseY = (e.clientY - top.offsetBottom) + 'px';
    top.setAttribute("style", mouseY);
    //top.style.height = (e.clientY - top.offsetLeft) + 'px';
    console.log(e.clientY)
    terminal.style.height = (e.clientY - terminal.offsetTop) + 'px';
}

function stopResizing(e) {
    window.removeEventListener('mousemove', startResizing, false);
    window.removeEventListener('mouseup', stopResizing, false);
}
    