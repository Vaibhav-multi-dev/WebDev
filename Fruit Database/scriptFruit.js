let mylist = document.getElementById("biglist");
let deleteButton = document.getElementsByClassName("delete");
let inputText= document.getElementById("addText");
let inputButton = document.getElementById("addButton");

// deleteButton.click(function(event){
// 	console.log(event.target);
// })

mylist.onclick = function (event){
	event.target.parentElement.remove();
}

inputButton.addEventListener("click", function(){
		liItem = document.createElement("li");
		liItem.appendChild(document.createTextNode(inputText.value));
		mylist.appendChild(liItem);
		inputText.value="";
})

inputButton.addEventListener("keydown", function(event){
	if(event.keyCode ===13){
		liItem = document.createElement("li");
		liItem.appendChild(document.createTextNode(inputText.value));
		mylist.appendChild(liItem);
		inputText.value="";
	}
})