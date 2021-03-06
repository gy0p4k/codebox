'use strict' 


var editableCodeMirror = CodeMirror.fromTextArea(document.querySelector(".code"), {
    mode: "javascript",
    theme: "monokai",
    lineNumbers: true,
    scrollbarStyle: "overlay",
    extraKeys: {
        "F11": function(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            },
        "Esc": function(cm) {
                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            }
    }
})

let resize = function () {
     // editableCodeMirror.setSize(getProperty(".code", "width"), getProperty(".top", "height"))
     editableCodeMirror.setSize(document.width, getProperty(".top", "height"))
}

let updateCode =function(content){
    editableCodeMirror.setValue(content)
}

let getProperty = function (elementQuery, property) {
    var style = window.getComputedStyle(document.querySelector(elementQuery), null);
    return style.getPropertyValue(property);
}

resize()