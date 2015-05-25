// var list = [];
// var myButton = document.getElementById('clickme');
// var myInput = document.getElementById('input');
// var myList = document.getElementById('todolist');
// myButton.addEventListener('click', onButtonClick);
// myInput.addEventListener('click', onInput);

// function onInput(); {
// 	list.push(myInput.value());
// 	myList.innerHTML = list;
// 	myInput.innerHTML = '';
// }

// function onButtonClick(); {

// }



var myButton = document.getElementById('click-me');
var messageList = document.getElementById('todo-list');
var messageInput = document.getElementById('input');
var fullList = [];
myButton.addEventListener('click', onButtonClick);
messageList.addEventListener('click', addStrike);

// var state = false;
// myButton.innerHTML = 'Add a To-do Item!';

// function addItem(e) {
// 	fullList.push(messageInput.value);
// 	console.log(fullList);
// 	messageInput.innerHTML = '';
// }

// function addItem(e) {
// 	fullList.push(messageInput.value);
// 	// if (messageInput > 0) {
// 	// 	messageInput.innerHTML = '';
// 	// }
// 	console.log(fullList);
// }

function onButtonClick(eventObj) {
	
		
	messageList.innerHTML += '<div>' + messageInput.value + '</div>';
	fullList.push(messageInput.value);
	messageInput.value = '';
	console.log(fullList);
	// messageList.innerHTML = messageList.innerHTML + '<div>' + messageInput.value + '</div>';

	// console.log(messageInput.value);
}

function addStrike(){
	messageList
}


// var parent = document.getElementById('parent');
// parent.addEventListener('click', onButtonClick);