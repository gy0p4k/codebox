// 'use strict'

let treePanel = document.querySelector(".tree");
let codePanel = document.querySelector(".code");

let ajax = function (method, URL, data, callback) {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			callback(JSON.parse(ajax.response));
		}
	};
	ajax.open(method, URL, true);
	ajax.setRequestHeader("Content-type", "application/json");
	ajax.send(data);
}



let renderTree = function (tree) {
	treePanel.innerHTML = ""
	let level = document.createElement("p");
	level.className = "level back"
	level.innerText = "..";
	level.addEventListener("click", function(event){
        var targetElement = event.target;
        var where = targetElement.innerText
        ajax("GET", "http://localhost:2001/cd/<<<", null, renderTree);
    });
	treePanel.appendChild(level)
	tree.forEach( function(element, index) {
		renderLevel(element)
	});
}

let renderLevel = function (levelMessage) {
	let level = document.createElement("p");
	level.className = "level"
	level.innerText = levelMessage;
	level.addEventListener("click", function(event){
        var targetElement = event.target;
        var where = targetElement.innerText
        if(where.split(".").length == 1){
        	ajax("GET", "http://localhost:2001/cd/" + where, null, renderTree);
        } else {
        	ajax("GET", "http://localhost:2001/file/" + where, null, renderDocument);
       	}
    });
	treePanel.appendChild(level);
}

let renderDocument = function (file) {
	updateCode(file.content)
}


ajax("GET", "http://localhost:2001/tree", null, renderTree)
