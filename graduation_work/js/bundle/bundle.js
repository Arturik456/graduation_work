(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let modalEng = require('../parts/modalEng.js');
	let modalPhone = require('../parts/modalPhone.js');
	let calc = require('../parts/calc.js');
	let tabs = require('../parts/tabs.js');
	let tabsDec = require('../parts/tabsDec.js');
	let ajax = require('../parts/ajax.js');
	// let slider = require('../parts/slider.js');

	modalEng();
	modalPhone();
	calc();
	ajax();
	tabs();
	tabsDec();
	// slider();


});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modalEng.js":4,"../parts/modalPhone.js":5,"../parts/tabs.js":6,"../parts/tabsDec.js":7}],2:[function(require,module,exports){
function ajax() {
	
let message = new Object();
	message.loading = "Загрузка...";
	message.success = 'Спасибо, скоро мы с вами свяжемся!';
	message.failure = 'Что-то пошло не так...';

let form = document.getElementsByTagName('form'),
	input = document.getElementsByTagName('input'),
	statusMessage = document.createElement('div');


  for (let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', (event) => {
      event.preventDefault();
      form[i].appendChild(statusMessage);

      let messageTimeOut = setTimeout(() => {
        statusMessage.innerHTML = '';
      }, 7000);

      //AJAX
      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

      let formData = new FormData(form[i]);

      request.send(formData);

      request.onreadystatechange = () => {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
          messageTimeOut();
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            statusMessage.textContent = message.success;
            messageTimeOut();
          };
        } else {
          statusMessage.textContent = message.failure;
          messageTimeOut();
        }
      }
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      };
    });
  };
  
};

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {
	
	let buttonCalc = document.getElementsByClassName('glazing_price_btn'),
		popupCalc = document.getElementsByClassName('popup_calc')[0],
		popupCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
		popupCalcProfileClose = document.getElementsByClassName('popup_calc_profile_close')[0],
		popupCalcClose = document.getElementsByClassName('popup_calc_close')[0],
		popupCalcButton = document.getElementsByClassName('popup_calc_button')[0],
		inputWidth = document.getElementById('width'),
		inputHeight = document.getElementById('height');

	//работаем с объектом
	let data = {};

	inputWidth.addEventListener('keypress', () => {
		let that = inputWidth;
		setTimeout(function() {
				let res = /[^0-999]/g.exec(that.value);
				that.value = that.value.replace(res, '');
		}, 0);
	});
	inputHeight.addEventListener('keypress', () => {
		let that = inputHeight;
		setTimeout(function() {
				let res = /[^0-999]/g.exec(that.value);
				that.value = that.value.replace(res, '');
		}, 0);
	});
			

	for (let i = 0; i < buttonCalc.length; i++) {
		buttonCalc[i].addEventListener('click', () => {
			popupCalc.classList.add('show');
			popupCalc.classList.add('animated');
			popupCalc.classList.remove('fadeOut');
			popupCalc.classList.add('fadeIn');
		})
	};
	popupCalcClose.addEventListener('click', popupClose);


	function popupClose() {
		popupCalc.classList.remove('fadeIn');
		popupCalc.classList.add('fadeOut');
		inputWidth.value = '';
		inputHeight.value = '';
		data = {};
		setTimeout(() => {
			popupCalc.classList.remove('show');
			popupCalc.classList.add('hide');
		}, 750);
	}
	// отрабатываем табы
	function tabsCalc(event) {
		let type = document.querySelectorAll('div.balcon_icons>a'),
		typeContent = document.querySelectorAll('div.big_img>img');

		function hideTabContent(a) {
			for (let i = a; i < typeContent.length; i++) {
				typeContent[i].classList.remove('show');
				typeContent[i].classList.add('hide');
				typeContent[i].classList.add('animated');
				typeContent[i].classList.add('fadeIn');
			};
		};
		hideTabContent(1);
		
		function showTabContent(b) {
			if (typeContent[b].classList.contains('hide')) {
				hideTabContent(0);
				typeContent[b].classList.remove('hide');
				typeContent[b].classList.add('show');
			};
		};

		for (let i = 0; i < type.length; i++) {
			type[i].addEventListener('click', (event) => {
				event.preventDefault();
				typeContent[i].setAttribute('value', i+1);
				data.type = typeContent[i].getAttribute('value');
				showTabContent(i);
			})
		};
	}
	tabsCalc();

	//нажимаем кнопку Далее
	popupCalcButton.addEventListener('click', () => {
		data.width = inputWidth.value;
		data.height = inputHeight.value;
		popupCalcProfile.classList.remove('fadeOut');
		popupCalc.classList.remove('show');
		popupCalc.classList.add('hide');
		popupCalcProfile.classList.add('show');
		popupCalcProfile.classList.add('animated'); 
	})

	
	popupCalcProfileClose.addEventListener('click', popupProfileClose);

	
	function popupProfileClose() {
		popupCalcProfile.classList.remove('fadeIn');
		popupCalcProfile.classList.add('fadeOut');
		inputWidth.value = '';
		inputHeight.value = '';
		for (let i = 0; i < checkbox.length; i++) {
			checkbox[i].checked = false;
		};
		data = {};
		setTimeout(() => {
			popupCalcProfile.classList.remove('show');
			popupCalcProfile.classList.add('hide');
		}, 700);
	}

	let select = document.getElementById('view_type'),
		buttonProfile = document.getElementsByClassName('popup_calc_profile_button')[0],
		checkboxCustom = document.getElementsByClassName('checkbox-custom'),
		checkbox = document.getElementsByClassName('checkbox'),
		checkboxCold = document.getElementById('cold'),
		checkboxWarm = document.getElementById('warm'),
		popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0];

	function check() {
		setInterval(() => {
			if (checkbox[0].checked) {
				checkbox[1].checked = false;
			};
			if (checkbox[1].checked) {
				checkbox[0].checked = false;
			};
		}, 0)
		
	};
	check();

	buttonProfile.addEventListener('click', () => {
		data.category = select.options[select.selectedIndex].value;
		for (let i = 0; i < checkbox.length; i++) {
			if (checkbox[i].checked) {
				data.checkbox = checkboxCustom[i].className.slice(16);
			};
		};
		popupCalcProfile.classList.remove('show');
		popupCalcProfile.classList.add('hide');
		popupCalcEnd.classList.add('show');
	})

	
	let popupCalcEndClose = document.getElementsByClassName('popup_calc_end_close')[0],
		form = document.getElementsByClassName('form'),
		inputName = document.querySelector('input.name'),
		inputPhone = document.querySelector('input.phone'),
		buttonCalcEnd = document.getElementsByClassName('btn-block');

	popupCalcEndClose.addEventListener('click', () => {
		 popupCalcEnd.classList.add('fadeOut');
		 inputWidth.value = '';
		 inputHeight.value = '';
		 for (let i = 0; i < checkbox.length; i++) {
			 checkbox[i].checked = false;
		 };
		 data = {};
		 setTimeout(() => {
			 popupCalcEnd.classList.remove('show');
			 popupCalcEnd.classList.add('hide');
			 popupCalcEnd.classList.remove('fadeOut');
		 }, 700)
		 
	});

	for (let i = 0; i < buttonCalcEnd.length; i++) {
		buttonCalcEnd[i].addEventListener('click', () => {
			data.userName = inputName.value;
			data.userPhone = inputPhone.value;
			
			//ajax
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

			let formData = new FormData(data);

			request.send(formData);
		})
	};

};

module.exports = calc;
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
function tabs() {
	let tab = document.getElementsByClassName('glazing_block'),
		glazing = document.getElementsByClassName('glazing')[0],
		link = document.querySelectorAll('.glazing_block > a'),
		tabContent = document.getElementsByClassName('tabs_content');

		function hideTabContent(a) {
			for (let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
				link[i].classList.remove('active');
			}
		}

		hideTabContent(1)

		function showTabContent(b) {
			if (tabContent[b].classList.contains('hide')) {
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
				link[b].classList.add('active');
				}
			}
		
		for (let i = 0; i < tab.length; i++) {
			tab[i].addEventListener('click', ()=> {
				showTabContent(i);
			})
		}
}
module.exports = tabs;




},{}],7:[function(require,module,exports){
function tabsDec()  {
	let tabTo = document.getElementsByClassName('decoration'),
		noClick = document.getElementsByClassName('no_click'),
		tabContentTo = document.querySelectorAll('.tabs_content_to');


		function hideTabDecoration (a) {
			for (let t = 0; t < tabContentTo.length; t++) {
				tabContentTo[t].classList.remove('show');
				tabContentTo[t].classList.add('hide');
				noClick[t].classList.remove('after_click');
				tabContentTo[t].style.display = 'none';
			}
		}

		hideTabDecoration(1)

		function showTabContent(c) {
			if (tabContentTo[c].classList.contains('hide')) {
				hideTabDecoration(0);
				tabContentTo[c].classList.remove('hide');
				tabContentTo[c].classList.add('show');
				noClick[c].classList.add('after_click');
				tabContentTo[c].style.display = 'none'
				}
			}
		
		for (let j = 0; j < tabTo.length; j++) {
			tabTo[j].addEventListener('click', ()=> {
				showTabContent(j);
			})
		}


}
module.exports = tabsDec;
},{}]},{},[1]);
