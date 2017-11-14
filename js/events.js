//this makes the text turn red when clicked on

function myFunction() {
	document.getElementById("demo").style.color = "red";
}
// this makes a copy from one field to another

function myOtherFunction() {
	document.getElementById("field2").value = document.getElementById("field1").value;
}
document.getElementById("strap").onclick = function () { niceClickFunction() }
function niceClickFunction() {
	document.getElementById("strap").innerHTML = "GoodShit!";
}