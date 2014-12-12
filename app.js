document.addEventListener("DOMContentLoaded", init);

function init () {

	console.log("It works!");
	
	document.addEventListener("mousemove", updateDrone);
}

function updateDrone (event) {

	var currentX = event.pageX - 50;
	var currentY = event.pageY - 25;

	console.log("pageX -> " + currentX);
	console.log("pageY -> " + currentY);
	console.log("----------");

	var drone = document.getElementById("drone");

	drone.style.left = currentX + "px";
	drone.style.top = currentY + "px";
}