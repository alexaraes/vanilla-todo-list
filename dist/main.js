var list = [];
var myButton = document.getElementById('clickme');
var myInput = document.getElementById('input');
var myList = document.getElementById('todolist');
myButton.addEventListener('click', onButtonClick);
myInput.addEventListener('click', onInput);

function onInput(); {
	list.push(myInput);
	myList.innerHTML = list.value;
	myInput.innerHTML = '';
}

function onButtonClick(); {

}