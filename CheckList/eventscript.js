var enterButton = document.getElementById('mybutton');
var buttonText = document.getElementById('mytext');
var mylist = document.querySelector("ol");
var ordList = document.getElementById("mylist");
var liItem;


function checkLength(){
	if(buttonText.value.length>0){
		return true;
	}
}

function makeListItem(){
	liItem = document.createElement("li");
	liItem.appendChild(document.createTextNode(buttonText.value));
	deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.className="strikeoff";
	liItem.appendChild(deleteButton);
}

function addListItem(){
	mylist.appendChild(liItem);
}

function resetInput(){
	buttonText.value = "";
}

ordList.onclick = function(event) {
	var merilist = event.target;
	if (merilist.className!=="strikeoff") {
		merilist.classList.toggle("done");
	}
	else if(merilist.className==="strikeoff"){
		merilist.parentElement.remove();
	}
}

enterButton.addEventListener("click", function(){
	if (checkLength()){
		makeListItem();
		addListItem();
		resetInput();
	}
})

buttonText.addEventListener("keydown", function(e){
	if(checkLength() && e.keyCode ===13){
		makeListItem();
		addListItem();
		resetInput();
	}
})