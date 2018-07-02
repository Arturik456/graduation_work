(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let modalEng = require('../parts/modalEng.js');
	let modalPhone = require('../parts/modalPhone.js');
	let modalCalc = require('../parts/modalCalc.js');
	let tab = require('../parts/tab.js');
	let ajax = require('../parts/ajax.js');

	modalEng();
	modalPhone();
	modalCalc();
	ajax();
	tab();


});
},{"../parts/ajax.js":2,"../parts/modalCalc.js":3,"../parts/modalEng.js":4,"../parts/modalPhone.js":5,"../parts/tab.js":6}],2:[function(require,module,exports){
function ajax() {
	
	let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Ваше сообщение отправлено!";
		messege.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('form'),
		phone = document.getElementsByName('user_phone'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

	for (let j = 0; j < phone.length; j++) {
		phone[j].addEventListener('keypress', function() {
			let res = /[^\d]/g.exec(this.value);
			this.value = this.value.replace(res, '');
		});
	}
	
	for (let i = 0; i < form.length; i++) {
		let input = form[i].getElementsByTagName('input');
	
		form[i].addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

	//AJAX
		let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//Добавляем контент на страницу
					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
				function func () {
					statusMessage.style.display = 'none'
		}
			}
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				//Очищаем поля ввода
			}
	});

	}

}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function modalCalc() {

	let btnPrice = document.querySelector('.popup_calc_btn'),
		popup = document.querySelector('.popup_calc'),
		close = document.querySelector('.popup_calc_close');

	  	btnPrice.addEventListener('click', function() {
			this.classList.add('more-splash');
			popup.style.display = "block";
			document.body.style.overflow = 'hidden';
		});		

		close.addEventListener('click', function() {
			popup.style.display = 'none';
			btnPrice.classList.remove('more-splash');
			document.body.style.overflow = '';			
		}); 

};

module.exports = modalCalc;
},{}],4:[function(require,module,exports){
function modalEng () {

	let btnEng = document.querySelector('.header_btn'),
		window = document.querySelector('.popup_engineer'),
		contentEng = document.getElementsByClassName('popup_content')[1];

		btnEng.addEventListener('click', function() {
			window.style.display = 'block';
		});

		window.addEventListener('click', function(event) {
			if(event.target == contentEng 
				|| event.target == document.getElementsByClassName('popup_dialog')[1]
				|| event.target == document.getElementsByClassName('popup_form')[1]
				|| event.target == document.getElementsByClassName('form')[1]
				|| event.target == document.getElementsByClassName('form-control')[14]
				|| event.target == document.getElementsByClassName('form-control')[15]) {
				window.style.display = 'block';
			} else {
				window.style.display = "none";
			}
			
		}); 

};

module.exports = modalEng;

},{}],5:[function(require,module,exports){
function modalPhone() {
	let phone = document.getElementsByClassName('phone_link')[0],
		phoneFutter = document.getElementsByClassName('phone_link')[1],
		popup = document.querySelector('.popup'),
		content = document.getElementsByClassName('popup_content')[0];

	phone.addEventListener('click', function() {
		popup.style.display = "block";
	});

	phoneFutter.addEventListener('click', function() {
		popup.style.display = "block";
	});
	

	popup.addEventListener('click', function(event) {
		if(event.target == content 
			|| event.target == document.getElementsByClassName('popup_dialog')[0]
				|| event.target == document.getElementsByClassName('popup_form')[0]
				|| event.target == document.getElementsByClassName('form')[0]
				|| event.target == document.getElementsByClassName('form-control')[12]
				|| event.target == document.getElementsByClassName('form-control')[13]) {
	 		popup.style.display = 'block';
	 	} else {
	 		popup.style.display = 'none';
	 	}
	});

	setTimeout(function() {
		popup.style.display = "block";
	}, 60000);



};
module.exports = modalPhone;
},{}],6:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('glazing_block'),
		parent = document.getElementsByClassName('glazing')[0],
		contBlock = parent.getElementsByClassName('row'),
		slider = document.getElementsByClassName('glazing_slider')[0];

	function hideTabContent(a) {
		for (let i = a; i < contBlock.length; i++) {
			contBlock[i].classList.remove('active');
			contBlock[i].classList.add('passive');
		}
	}

	hideTabContent(1) 

	function showTabContent(b) {
		if( сontent[b].classList.contains('passive')) {
			hideTabContent(0);
			сontent[b].classList.remove('passive');
			сontent[b].classList.add('active');
		}
	}

	slider.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'glazing_block') {
			for (let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;




},{}]},{},[1]);
