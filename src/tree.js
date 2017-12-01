// 'use strict'

let treePanel = document.querySelector(".tree");

let tree = `
├── README.md
├── requirements.txt
├── setup.cfg
├── setup.py
├── setup.sh
├── tests
│   ├── test_environment_checks.py
│   ├── test_environment_checks.pyc
│   ├── test_env_test_datas.py
│   ├── test_env_test_datas.pyc
│   ├── test_file_operator.py
│   ├── test_file_operator.pyc
│   ├── test_hello.pyc
│   ├── test_user_presenter.py
│   └── test_user_presenter.pyc
└── workshop_toolchain.egg-info
    ├── dependency_links.txt
    ├── entry_points.txt
    ├── PKG-INFO
    ├── requires.txt
    ├── SOURCES.txt
    └── top_level.txt


`
let getTree = function(){
	return tree;
}

let renderTree = function () {
	getTree().split("   ").forEach( function(element, index) {
		renderLevel(element)
	});
}

let renderLevel = function (levelMessage) {
	let level = document.createElement("p");
	level.className = "level"
	level.innerText = levelMessage;
	treePanel.appendChild(level);
}


renderTree()
