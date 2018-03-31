'use strict';

let statusPanel = document.querySelector(".bottom");

let statusPanelRender = () => {
	ajax('GET', '/status', null ,statusUpdate);
}

//text size None
let statusUpdate = (status) => {
	statusPanel.innerText = status.join("\n");
}

setInterval( statusPanelRender, 1000);