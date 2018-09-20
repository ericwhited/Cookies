var amountC = 0;
var amountL = 0;
var amountS = 0;


// Chocolate button
document.querySelector('#numOfChoc').innerText = Cookies.get('amountC', amountC);

document.querySelector('#subChoc').onclick = function() {
	amountC = amountC + 1;
	document.querySelector('#numOfChoc').innerText = amountC;
	Cookies.set('amountC', amountC);

};


// Sugar Button
document.querySelector('#numOfSugar').innerText = Cookies.get('amountS', amountS);

document.querySelector('#subSug').onclick = function() {
	amountS = amountS + 1;
	document.querySelector('#numOfSugar').innerText = amountS;
	Cookies.set('amountS', amountS);	
};




// Lemon Button
document.querySelector('#numOfLemon').innerText = Cookies.get('amountL', amountL);

document.querySelector('#subLem').onclick = function() {
	amountL = amountL + 1;
	document.querySelector('#numOfLemon').innerText = amountL;
	Cookies.set('amountL', amountL);	
};


document.querySelector('#resetButton').onclick = function() {
	amountC = 0;
	amountS = 0;
	amountL = 0;

	Cookies.set("amountC", amountC);
	document.querySelector('#numOfChoc').innerText = amountC;
	
	Cookies.set("amountS", amountS);
	document.querySelector('#numOfSugar').innerText = amountS
	
	Cookies.set("amountL", amountL);
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