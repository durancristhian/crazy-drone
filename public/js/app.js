var drone;
document.addEventListener("DOMContentLoaded", init);

function init () {

	console.log("It works!");
	drone = document.getElementById("drone");
	document.addEventListener("mousemove", updateDrone);
}

function updateDrone (event) {

	var currentX = event.pageX - 50;
	var currentY = event.pageY - 25;

	drone.style.left = currentX + "px";
	drone.style.top = currentY + "px";
}