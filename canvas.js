var canvas = getElementById("slate");
var toggler = getElementById("toggler");
var clear = getElementById("clearer");
var context = canvas.getContext("2d");
var toggle = 1;

function toggle_button() {
    if (toggle) {
	toggle = 0;
    }
    else {
	toggle = 1;
    }
}

function 

function execute() {
    if (toggle) {
	squar(event.clientX, event.clientY, 30, 30);
    }
    else {
	circ(event.clientX, event.clientY, 15);
    }
}

function squar(x, y, xMag, yMag) {


}

function circ(x, y, r) {
}



canvas.addEventListener('click', execute);
toggler.addEventListener('click', toggle_button);
