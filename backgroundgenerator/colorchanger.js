var firstColour = document.querySelector(".color1");
var secondColour = document.querySelector(".color2");
var heading = document.querySelector("h3");
var htmlBody = document.getElementById("gradient");
var randomButton = document.getElementById("random")

htmlBody.style.background = "linear-gradient(to right, " + firstColour.value + " , "+secondColour.value+ ")";	
heading.textContent = htmlBody.style.background + ";";

function changeColour(){
	htmlBody.style.background = "linear-gradient(to right, " + firstColour.value + " , "+secondColour.value+ ")";	
	heading.textContent = htmlBody.style.background + ";";
}

function generateRandom(){
	color= Math.floor(Math.random() * 256);
	return color
}

function randomColour(){
	htmlBody.style.background = "linear-gradient(to right, " + "rgb(" +generateRandom() +"," +generateRandom()+"," + generateRandom()+"),"
								 + "rgb("+generateRandom()+"," +generateRandom() +","+ generateRandom()+"))";	
	heading.textContent = htmlBody.style.background + ";";
}

firstColour.addEventListener("input", changeColour)

secondColour.addEventListener("input", changeColour)

randomButton.addEventListener("click", randomColour)