var elem = document.documentElement;

function fullscreen () {
    //elem.requestFullscreen();
}

document.onkeydown = function (e) {
    //fullscreen();
    console.log(e);
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false;
        console.log(e);
        }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
        return false;
        }
}

document.oncontextmenu = function (){
    return false;
}