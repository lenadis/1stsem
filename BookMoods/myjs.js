/*var numberOfChildren = 0;
var nameOfPartner = "Viktor";
var geoLocation = "Spain";
var jobTitle = "Programmer";

console.log("You will be a " + jobTitle + " in " + geoLocation + " and married	to " + nameOfPartner +	" with "	+ numberOfChildren + " kids.");*/

var dude = document.querySelector("#dude");
console.log(dude);

dude.addEventListener("click", addClassToDude);

function addClassToDude() {
    dude.classList.add("moving");
    happy.play();
    background.play(10);
}
