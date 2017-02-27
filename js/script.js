var newItem = document.querySelector("#new-item");
var list = document.querySelector("#list");
var listItem;

function removeItem() {
	this.remove();
} 

function addItem() {
	listItem = document.createElement("li");
	listItemText = prompt("Enter a new item for to-buy list:");
	if (listItemText) {
		listItem.innerHTML = listItemText;
		list.appendChild(listItem);
		listItem.addEventListener("click", removeItem, false);
	}
}

newItem.addEventListener("click", addItem, false);
