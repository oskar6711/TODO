var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var clear = document.getElementById("clear");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var delButton = document.createElement("button")
    var span = document.createElement("span")
    ul.appendChild(li);
    li.appendChild(span);
    span.appendChild(document.createTextNode(input.value))
    li.appendChild(delButton);
    delButton.appendChild(document.createTextNode("Delete"))
    delButton.className = "delete"
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.key === 'Enter') {
        createListElement();
    }
}

function deleteElement(event) {
    event.target.parentElement.remove();
}

function clearList() {
    while (ul.childElementCount > 0) {
        let li = document.querySelector("li")
        ul.removeChild(li);
    } 
}

function ulClick(event) {
    if (event.target.className === "delete"){
        deleteElement(event);
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

clear.addEventListener("click", clearList);

ul.addEventListener("click", ulClick);