(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let modal = require('../parts/modal.js');
	let calc = require('../parts/calc.js');
	let tabs = require('../parts/tabs.js');
	let tabsDec = require('../parts/tabsDec.js');
	let ajax = require('../parts/ajax.js');
	let img = require('../parts/img.js');
	let time = require('../parts/time.js');


	modal();
	calc();
	ajax();
	tabs();
	tabsDec();
	img();
	time();


});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/img.js":4,"../parts/modal.js":5,"../parts/tabs.js":6,"../parts/tabsDec.js":7,"../parts/time.js":8}],2:[function(require,module,exports){
function ajax() {

  let message = new Object();
      message.loading = "Загрузка ...";
      message.success = "Спасибо! Скоро мы с вами свяжемся";
      message.failure = "Что-то пошло не так...";

  let mainForm = document.getElementsByClassName('main_form'),
      form = document.getElementsByClassName('form')[7],
      popupForm = document.querySelector('.popup_form'),
      popCalcEnd = document.querySelector('.popup_calc_end'),
      popupFormCalcEnd = popCalcEnd.querySelector('.popup_form'),
      statusMessage = document.createElement('div');

      statusMessage.classList.add('status');

  console.log(popupFormCalcEnd);

  function onlyNumber(target) {
    if (target.getAttribute('name') == 'user_phone') {
      target.value = target.value.replace(/[^\d]/g, '');
    };
  }

  popupFormCalcEnd.addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });

  mainForm[0].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });

  mainForm[1].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  mainForm[2].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  mainForm[3].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  mainForm[4].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  mainForm[5].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  popupForm.addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  form.addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });

  function sendData(data) {    

    data.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", 'server.php');

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let formData = new FormData(data);

    request.send(formData);

    request.onreadystatechange = function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
        console.log('загрузка');
      } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
            // Добавляем контент на страницу
            console.log('успешно');
          }
          else {
            statusMessage.innerHTML = message.failure;
            console.log('ошибка');
          }
        }
    }
    let input = data.getElementsByTagName('input')
    // console.log(input);
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
      // Очищаем поля ввода          
    }
    // console.log('функция сработала');
  }

  popupFormCalcEnd.addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(popupFormCalcEnd);    
  });

  mainForm[0].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[0]);    
  });
  mainForm[1].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[1]);    
  });
  mainForm[2].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[2]);    
  });
  mainForm[3].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[3]);    
  });
  mainForm[5].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[5]);    
  });
  popupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(popupForm);    
  });
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(form);    
  });

}

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

  //объект
  let data = {};

  function checkInput(inp) {
    inp.addEventListener('keypress', function(inp) {
      let that = this;
      setTimeout(function() {
          let res = /[^0-999]/g.exec(that.value);
          that.value = that.value.replace(res, '');
      }, 0);
    });
  };

  checkInput(inputWidth);
  checkInput(inputHeight);
      

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
  // табы
  function tabsCalc(event) {
    let type = document.querySelectorAll('div.balcon_icons>a'),
    typeImg  = document.querySelectorAll('div.balcon_icons>a>img'),
    typeContent = document.querySelectorAll('div.big_img>img');

    function hideTabContent(a) {
      for (let i = a; i < typeContent.length; i++) {
        typeContent[i].classList.remove('show');
        typeContent[i].classList.add('hide');
        typeContent[i].classList.add('animated');
        typeContent[i].classList.add('fadeIn');
        typeImg[i].classList.remove('scale');
      };
    };
    hideTabContent(1);
    
    function showTabContent(b) {
      if (typeContent[b].classList.contains('hide')) {
        hideTabContent(0);
        typeImg[b].classList.add('scale');
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

  let popupCalcCont = document.querySelector('.popup_calc_content'),
      balconIcons = popupCalcCont.querySelector('.balcon_icons'),
      imgMini = balconIcons.getElementsByTagName('img'),
      bigImg = popupCalcCont.querySelector('.big_img'),
      imgBig = bigImg.getElementsByTagName('img'),
      popCalcEnd = document.querySelector('.popup_calc_end'),
      popupFormCalcEnd = popCalcEnd.querySelector('.popup_form');

popupCalcCont.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    
    console.log(target);
    for (let i = 0; i < imgMini.length; i++) {
      if (target == imgMini[i]) {
        console.log('равно ' + imgMini[i].src);
        for (let t = 0; t < imgMini.length; t++) {
          imgMini[t].style.width = '80px';          
        }
        imgMini[i].style.width = '120px';
        for (let j = 0; j < imgBig.length; j++) {
          imgBig[j].style.display = 'none';       
        }
          imgBig[j].style.display = 'inline-block';
        break;
      }
      console.log('тест ' + target);
      
    }
  });
  

  setInterval(() => {
    if (inputWidth.value == '' || inputHeight.value == '') {
      popupCalcButton.setAttribute('disabled', 'true');
     } else {
      popupCalcButton.removeAttribute('disabled', 'true');
     }
  }, 0);

  //кнопка Далее
  popupCalcButton.addEventListener('click', () => {
    data.width = inputWidth.value;
    data.height = inputHeight.value;
    popupCalcProfile.classList.remove('fadeOut');
    popupCalc.classList.remove('show');
    popupCalc.classList.add('hide');
    popupCalcProfile.classList.add('show');
    popupCalcProfile.classList.add('animated'); 
  })

  //profile
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
      if (checkbox[0].checked === false && checkbox[1].checked === false) {
        buttonProfile.setAttribute('disabled', 'true');
      } else {
        buttonProfile.removeAttribute('disabled', 'true');
      }
      checkbox[0].addEventListener('click', function() {
        checkbox[1].checked = false;
        buttonProfile.removeAttribute('disabled', 'true');
      })
      checkbox[1].addEventListener('click', function() {
        checkbox[0].checked = false;
        buttonProfile.removeAttribute('disabled', 'true');
      })
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

  //popupEnd
  let popupCalcEndClose = document.getElementsByClassName('popup_calc_end_close')[0],
  form = document.getElementsByClassName('form'),
  inputName = document.querySelector('input.name'),
  inputPhone = document.querySelector('input.phone'),
  buttonCalcEnd = document.getElementsByClassName('btn-block')[8];

  popupCalcEndClose.addEventListener('click', () => {
     popupCalcEnd.classList.add('animated');
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

  buttonCalcEnd.addEventListener('click', () => {
    data.userName = inputName.value;
    data.userPhone = inputPhone.value;
    
    //ajax
    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

    let formData = new FormData(data);

    request.send(formData);
  })

}

module.exports = calc;
},{}],4:[function(require,module,exports){
function img() {
	let divImage = document.createElement('div'),
		imgPic = document.createElement('img'),
		zoom = document.getElementsByClassName('zoomIn'),
		zoomIn = document.querySelectorAll('.zoomIn > a'),
		works = document.querySelector('.works');

			divImage.classList.add('div_picture');
			imgPic.classList.add('div_picture_img');

	for (let i = 0; i < zoom.length; i++) {
		zoom[i].addEventListener('click', (event) => {
			event.preventDefault();
			divImage.style.display = 'flex';
			works.appendChild(divImage);
			divImage.appendChild(imgPic);
			for (let i = 0; i < zoomIn.length; i++) {
				zoomIn[i].getAttribute('href');
			}
			imgPic.setAttribute('src', zoomIn[i].href);
		});
	}

	divImage.addEventListener('click', (event) => {
		let target = event.target;
		if (target == divImage) {
			divImage.style.display = 'none';
		}
	});
}

module.exports = img;
},{}],5:[function(require,module,exports){
function modale() {
let btnPopEng = document.getElementsByClassName('popup_engineer_btn')[0],
      popEng = document.querySelector('.popup_engineer'),
      popCalc = document.querySelector('.popup_calc'),
      btnPopCalc = popCalc.querySelector('.popup_calc_button'),
      popCalcProfile = document.querySelector('.popup_calc_profile'),
      btnPopCalcProfile = popCalcProfile.querySelector('.popup_calc_profile_button'),
      popCalcProfileClose = document.querySelector('.popup_calc_profile_close'),
      popCalcEnd = document.querySelector('.popup_calc_end'),
      popCalcEndClose = popCalcEnd.querySelector('.popup_calc_end_close'),
      popEngForm = popEng.querySelector('.form'),
      popup = document.querySelector('.popup'),
      popupClose = document.querySelectorAll('.popup_close'),
      popupCalcClose = document.querySelector('.popup_calc_close'),
      phoneLink = document.querySelectorAll('.phone_link'),
      btnCalc = document.querySelectorAll('.popup_calc_btn');

  console.log(btnPopCalc);
    
  btnPopCalc.addEventListener('click', function () {
    console.log(this);
    modalClose(popCalc);
    modalOpen(popCalcProfile);
  });

  btnPopCalcProfile.addEventListener('click', function () {
    console.log(this);
    modalClose(popCalcProfile);
    modalOpen(popCalcEnd);
  });
  

  function modalClose(pop) {
    pop.style.display = '';
  }

  function modalOpen(pop) {
    pop.style.display = 'block';
  }

  btnPopEng.addEventListener('click', function () {
    console.log(this);
    modalOpen(popEng);
    modalOpen(popup);
  });
  
  phoneLink[0].addEventListener('click', function () {
    modalOpen(popup);
  });
  phoneLink[1].addEventListener('click', function () {
    event.preventDefault();
    modalOpen(popup);
  });
  popupClose[0].addEventListener('click', function (event) {
    
    modalClose(popup);
    
  });

  popupCalcClose.addEventListener('click', function (event) {
    
    modalClose(popCalc);
    
  });

  popCalcProfileClose.addEventListener('click', function (event) {
    
    modalClose(popCalcProfile);
    
  });

  popCalcEndClose.addEventListener('click', function (event) {
    
    modalClose(popCalcEnd);
    
  });
  
  //
  popupClose[1].addEventListener('click', function (event) {
    
    modalClose(popEng);
    modalClose(popup);
    
  });
  document.addEventListener('click', (e) => {

    if (e.target == popEng) {
      modalClose(popEng);
      modalClose(popup);
    }


    if (e.target == popup) {
      modalClose(popup);
    }

    if (e.target.classList.contains('popup_calc_btn')) {

      modalOpen(popCalc);
    }


  });

  setTimeout(() => {
    modalOpen(popup);
  }, 60000);
  

};
module.exports = modale;
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
let noClick = document.querySelectorAll('.no_click'),
	decor = document.querySelector('.decoration'),
	decorItem = document.getElementsByClassName('decoration_item'),
	decorA = document.querySelectorAll('.no_click>a'),
	decorContent = document.querySelectorAll('.tabs-finishing-content');

  function showTabClass(a) {
	for (let t = 0; t < noClick.length; t++) {
	  noClick[t].classList.remove('after_click');   
	  decorContent[t].style.display = 'none';
	}
	noClick[a].classList.add('after_click');
	decorContent[a].style.display = 'block';
  }

  decor.addEventListener('click', (event) => {
	let target = event.target;
	if (target.parentElement.classList.contains('no_click')) {
	  // console.log('содержит но клик');
	  for (let i = 0; i < decorA.length; i++) {
		if (target == decorA[i]) {
		  showTabClass(i);
		  break;
		}        
	  }      
	}
  });
 }
module.exports = tabsDec;
},{}],8:[function(require,module,exports){
function timer() {

  let deadline = '2018-07-07';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = 0,
        minutes = 0,
        hours = 0,
        days = 0,
        offset = new Date().getTimezoneOffset() / 60;
        if (t > 0) {
          // console.log('if');
          seconds = Math.floor( (t/1000) % 60 );
          minutes = Math.floor( (t/1000/60) % 60 );
          hours = Math.floor( (t/(1000*60*60)) + offset );
          days = Math.floor( (t/(1000*60*60*24)) );
          // console.log(hours);
        } else {
            // console.log('else');
            seconds = 0;
            minutes = 0;
            hours = 0;
            days = 0;
          }
        return {
          'total' : t,          
          'days' : days,
          'hours' : hours,
          'minutes' : minutes,
          'seconds' : seconds
        };
  };

  function countNumber(i) {
    let a = String(i),
        b = 0;
    if(a.length == 1) {
      a = 0 + '' + i;
    } else {
        a = i;
      }
    return a;
  };

  function setClock(id, endtime) {
    
    let timer = document.getElementsByClassName(id)[0],
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);
      let arrTime = [t.days, t.hours, t.minutes, t.seconds];
      for (let i = 0; i < arrTime.length; i++) {
        if (arrTime[i] < 10) {
          arrTime[i] = '0' + arrTime[i];
        };
      };
      days.innerHTML = arrTime[0];
      hours.innerHTML = arrTime[1];
      minutes.innerHTML = arrTime[2];
      seconds.innerHTML = arrTime[3];
      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
      };
    };

    let timeInterval = setInterval(updateClock, 1000);

  };

  setClock('eTimer', deadline);

}

module.exports = timer;
},{}]},{},[1]);
