// Chocolate button
document.querySelector('#numOfChoc').innerText = Cookies.get('amountC', amountC);

var amountC = 0;
document.querySelector('#subChoc').onclick = function() {
	amountC = amountC + 1;
	document.querySelector('#numOfChoc').innerText = amountC;
	Cookies.set('amountC', amountC);

};


// Sugar Button
document.querySelector('#numOfSugar').innerText = Cookies.get('amountS', amountS);

var amountS = 0;
document.querySelector('#subSug').onclick = function() {
	amountS = amountS + 1;
	document.querySelector('#numOfSugar').innerText = amountS;
	Cookies.set('amountS', amountS);	
};




// Lemon Button
document.querySelector('#numOfLemon').innerText = Cookies.get('amountL', amountL);

var amountL = 0;
document.querySelector('#subLem').onclick = function() {
	amountL = amountL + 1;
	document.querySelector('#numOfLemon').innerText = amountL;
	Cookies.set('amountL', amountL);	
};


document.querySelector('#resetButton').onclick = function() {
	Cookies.set("amountC", 0);
	document.querySelector('#numOfChoc').innerText = amountC;
	
	Cookies.set("amountS", 0);
	document.querySelector('#numOfSugar').innerText = amountS
	
	Cookies.set("amountL", 0);
	document.querySelector('#numOfLemon').innerText = amountL;
};














// function Cookie(name, submit, amount) {
// 	this.name = name;
// 	this.submit = document.querySelector('.submit');
// 	this.amount = document.querySelector('.numOfCookies');
// };


// function Button(amount, submit, counter) {
// 	Cookie.call(this, submit, amount);
	
// 	Button.prototype = Object.create(Button.prototype);
	
// 	this.submit = function() {
// 		this.submit.onclick = function() {
// 			alert('hello');
// 		}
// 	}
// 	this.counter = function() {

// 	}
// }




// var chocolate = new Cookie('chocolate', )