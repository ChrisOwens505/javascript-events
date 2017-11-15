//this makes the text turn red when clicked on

function myFunction() {
	document.getElementById("demo").style.color = "red";
}
// this makes a copy from one field to another

function myOtherFunction() {
	document.getElementById("field2").value = document.getElementById("field1").value;
}
/**
 * Font Style Changer
 * Changes the font style of the paragraph text on checkbox option
 **/
function fontStyle() {
	//grab the paragraph, store it in a variable
	var text = document.getElementById("font-style");

	//if the font has been changed, set it back to the default
	//otherwise change font family to Pacifico on checkbox click
	if (text.style.fontFamily === "oldEnglish") {
		text.style.fontFamily = "";
	} else {
		text.style.fontFamily = "oldEnglish";
	}
}