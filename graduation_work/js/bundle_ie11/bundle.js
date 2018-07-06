"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
    window.addEventListener('DOMContentLoaded', function () {

      var modal = require('../parts/modal.js');
      var calc = require('../parts/calc.js');
      var tabs = require('../parts/tabs.js');
      var tabsDec = require('../parts/tabsDec.js');
      var ajax = require('../parts/ajax.js');
      var img = require('../parts/img.js');
      var time = require('../parts/time.js');

      modal();
      calc();
      ajax();
      tabs();
      tabsDec();
      img();
      time();
    });
  }, { "../parts/ajax.js": 2, "../parts/calc.js": 3, "../parts/img.js": 4, "../parts/modal.js": 5, "../parts/tabs.js": 6, "../parts/tabsDec.js": 7, "../parts/time.js": 8 }], 2: [function (require, module, exports) {
    function ajax() {

      var message = new Object();
      message.loading = "Загрузка ...";
      message.success = "Спасибо! Скоро мы с вами свяжемся";
      message.failure = "Что-то пошло не так...";

      var mainForm = document.getElementsByClassName('main_form'),
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

      popupFormCalcEnd.addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });

      mainForm[0].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });

      mainForm[1].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      mainForm[2].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      mainForm[3].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      mainForm[4].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      mainForm[5].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      popupForm.addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      form.addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });

      function sendData(data) {

        data.appendChild(statusMessage);

        var request = new XMLHttpRequest();
        request.open("POST", 'server.php');

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        var formData = new FormData(data);

        request.send(formData);

        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
            console.log('загрузка');
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 300) {
              statusMessage.innerHTML = message.success;
              // Добавляем контент на страницу
              console.log('успешно');
            } else {
              statusMessage.innerHTML = message.failure;
              console.log('ошибка');
            }
          }
        };
        var input = data.getElementsByTagName('input');
        // console.log(input);
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
          // Очищаем поля ввода          
        }
        // console.log('функция сработала');
      }

      popupFormCalcEnd.addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(popupFormCalcEnd);
      });

      mainForm[0].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[0]);
      });
      mainForm[1].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[1]);
      });
      mainForm[2].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[2]);
      });
      mainForm[3].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[3]);
      });
      mainForm[5].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[5]);
      });
      popupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(popupForm);
      });
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(form);
      });
    }

    module.exports = ajax;
  }, {}], 3: [function (require, module, exports) {
    function calc() {

      var buttonCalc = document.getElementsByClassName('glazing_price_btn'),
          popupCalc = document.getElementsByClassName('popup_calc')[0],
          popupCalcProfile = document.getElementsByClassName('popup_calc_profile')[0],
          popupCalcProfileClose = document.getElementsByClassName('popup_calc_profile_close')[0],
          popupCalcClose = document.getElementsByClassName('popup_calc_close')[0],
          popupCalcButton = document.getElementsByClassName('popup_calc_button')[0],
          inputWidth = document.getElementById('width'),
          inputHeight = document.getElementById('height');

      //объект
      var data = {};

      function checkInput(inp) {
        inp.addEventListener('keypress', function (inp) {
          var that = this;
          setTimeout(function () {
            var res = /[^0-999]/g.exec(that.value);
            that.value = that.value.replace(res, '');
          }, 0);
        });
      };

      checkInput(inputWidth);
      checkInput(inputHeight);

      for (var i = 0; i < buttonCalc.length; i++) {
        buttonCalc[i].addEventListener('click', function () {
          popupCalc.classList.add('show');
          popupCalc.classList.add('animated');
          popupCalc.classList.remove('fadeOut');
          popupCalc.classList.add('fadeIn');
        });
      };
      popupCalcClose.addEventListener('click', popupClose);

      function popupClose() {
        popupCalc.classList.remove('fadeIn');
        popupCalc.classList.add('fadeOut');
        inputWidth.value = '';
        inputHeight.value = '';
        data = {};
        setTimeout(function () {
          popupCalc.classList.remove('show');
          popupCalc.classList.add('hide');
        }, 750);
      }
      // табы
      function tabsCalc(event) {
        var type = document.querySelectorAll('div.balcon_icons>a'),
            typeImg = document.querySelectorAll('div.balcon_icons>a>img'),
            typeContent = document.querySelectorAll('div.big_img>img');

        function hideTabContent(a) {
          for (var _i = a; _i < typeContent.length; _i++) {
            typeContent[_i].classList.remove('show');
            typeContent[_i].classList.add('hide');
            typeContent[_i].classList.add('animated');
            typeContent[_i].classList.add('fadeIn');
            typeImg[_i].classList.remove('scale');
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

        var _loop = function _loop(_i2) {
          type[_i2].addEventListener('click', function (event) {
            event.preventDefault();
            typeContent[_i2].setAttribute('value', _i2 + 1);
            data.type = typeContent[_i2].getAttribute('value');
            showTabContent(_i2);
          });
        };

        for (var _i2 = 0; _i2 < type.length; _i2++) {
          _loop(_i2);
        };
      }
      tabsCalc();

      var popupCalcCont = document.querySelector('.popup_calc_content'),
          balconIcons = popupCalcCont.querySelector('.balcon_icons'),
          imgMini = balconIcons.getElementsByTagName('img'),
          bigImg = popupCalcCont.querySelector('.big_img'),
          imgBig = bigImg.getElementsByTagName('img'),
          popCalcEnd = document.querySelector('.popup_calc_end'),
          popupFormCalcEnd = popCalcEnd.querySelector('.popup_form');

      popupCalcCont.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;

        console.log(target);
        for (var _i3 = 0; _i3 < imgMini.length; _i3++) {
          if (target == imgMini[_i3]) {
            console.log('равно ' + imgMini[_i3].src);
            for (var t = 0; t < imgMini.length; t++) {
              imgMini[t].style.width = '80px';
            }
            imgMini[_i3].style.width = '120px';
            for (var _j = 0; _j < imgBig.length; _j++) {
              imgBig[_j].style.display = 'none';
            }
            imgBig[j].style.display = 'inline-block';
            break;
          }
          console.log('тест ' + target);
        }
      });

      setInterval(function () {
        if (inputWidth.value == '' || inputHeight.value == '') {
          popupCalcButton.setAttribute('disabled', 'true');
        } else {
          popupCalcButton.removeAttribute('disabled', 'true');
        }
      }, 0);

      //кнопка Далее
      popupCalcButton.addEventListener('click', function () {
        data.width = inputWidth.value;
        data.height = inputHeight.value;
        popupCalcProfile.classList.remove('fadeOut');
        popupCalc.classList.remove('show');
        popupCalc.classList.add('hide');
        popupCalcProfile.classList.add('show');
        popupCalcProfile.classList.add('animated');
      });

      //profile
      popupCalcProfileClose.addEventListener('click', popupProfileClose);

      function popupProfileClose() {
        popupCalcProfile.classList.remove('fadeIn');
        popupCalcProfile.classList.add('fadeOut');
        inputWidth.value = '';
        inputHeight.value = '';
        for (var _i4 = 0; _i4 < checkbox.length; _i4++) {
          checkbox[_i4].checked = false;
        };
        data = {};
        setTimeout(function () {
          popupCalcProfile.classList.remove('show');
          popupCalcProfile.classList.add('hide');
        }, 700);
      }

      var select = document.getElementById('view_type'),
          buttonProfile = document.getElementsByClassName('popup_calc_profile_button')[0],
          checkboxCustom = document.getElementsByClassName('checkbox-custom'),
          checkbox = document.getElementsByClassName('checkbox'),
          checkboxCold = document.getElementById('cold'),
          checkboxWarm = document.getElementById('warm'),
          popupCalcEnd = document.getElementsByClassName('popup_calc_end')[0];

      function check() {
        setInterval(function () {
          if (checkbox[0].checked === false && checkbox[1].checked === false) {
            buttonProfile.setAttribute('disabled', 'true');
          } else {
            buttonProfile.removeAttribute('disabled', 'true');
          }
          checkbox[0].addEventListener('click', function () {
            checkbox[1].checked = false;
            buttonProfile.removeAttribute('disabled', 'true');
          });
          checkbox[1].addEventListener('click', function () {
            checkbox[0].checked = false;
            buttonProfile.removeAttribute('disabled', 'true');
          });
        }, 0);
      };
      check();

      buttonProfile.addEventListener('click', function () {
        data.category = select.options[select.selectedIndex].value;
        for (var _i5 = 0; _i5 < checkbox.length; _i5++) {
          if (checkbox[_i5].checked) {
            data.checkbox = checkboxCustom[_i5].className.slice(16);
          };
        };
        popupCalcProfile.classList.remove('show');
        popupCalcProfile.classList.add('hide');
        popupCalcEnd.classList.add('show');
      });

      //popupEnd
      var popupCalcEndClose = document.getElementsByClassName('popup_calc_end_close')[0],
          form = document.getElementsByClassName('form'),
          inputName = document.querySelector('input.name'),
          inputPhone = document.querySelector('input.phone'),
          buttonCalcEnd = document.getElementsByClassName('btn-block')[8];

      popupCalcEndClose.addEventListener('click', function () {
        popupCalcEnd.classList.add('animated');
        popupCalcEnd.classList.add('fadeOut');
        inputWidth.value = '';
        inputHeight.value = '';
        for (var _i6 = 0; _i6 < checkbox.length; _i6++) {
          checkbox[_i6].checked = false;
        };
        data = {};
        setTimeout(function () {
          popupCalcEnd.classList.remove('show');
          popupCalcEnd.classList.add('hide');
          popupCalcEnd.classList.remove('fadeOut');
        }, 700);
      });

      buttonCalcEnd.addEventListener('click', function () {
        data.userName = inputName.value;
        data.userPhone = inputPhone.value;

        //ajax
        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

        var formData = new FormData(data);

        request.send(formData);
      });
    }

    module.exports = calc;
  }, {}], 4: [function (require, module, exports) {
    function img() {
      var divImage = document.createElement('div'),
          imgPic = document.createElement('img'),
          zoom = document.getElementsByClassName('zoomIn'),
          zoomIn = document.querySelectorAll('.zoomIn > a'),
          works = document.querySelector('.works');

      divImage.classList.add('div_picture');
      imgPic.classList.add('div_picture_img');

      var _loop2 = function _loop2(i) {
        zoom[i].addEventListener('click', function (event) {
          event.preventDefault();
          divImage.style.display = 'flex';
          works.appendChild(divImage);
          divImage.appendChild(imgPic);
          for (var _i7 = 0; _i7 < zoomIn.length; _i7++) {
            zoomIn[_i7].getAttribute('href');
          }
          imgPic.setAttribute('src', zoomIn[i].href);
        });
      };

      for (var i = 0; i < zoom.length; i++) {
        _loop2(i);
      }

      divImage.addEventListener('click', function (event) {
        var target = event.target;
        if (target == divImage) {
          divImage.style.display = 'none';
        }
      });
    }

    module.exports = img;
  }, {}], 5: [function (require, module, exports) {
    function modale() {
      var btnPopEng = document.getElementsByClassName('popup_engineer_btn')[0],
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
      document.addEventListener('click', function (e) {

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

      setTimeout(function () {
        modalOpen(popup);
      }, 60000);
    };
    module.exports = modale;
  }, {}], 6: [function (require, module, exports) {
    function tabs() {
      var tab = document.getElementsByClassName('glazing_block'),
          glazing = document.getElementsByClassName('glazing')[0],
          link = document.querySelectorAll('.glazing_block > a'),
          tabContent = document.getElementsByClassName('tabs_content');

      function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
          tabContent[i].classList.remove('show');
          tabContent[i].classList.add('hide');
          link[i].classList.remove('active');
        }
      }

      hideTabContent(1);

      function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
          hideTabContent(0);
          tabContent[b].classList.remove('hide');
          tabContent[b].classList.add('show');
          link[b].classList.add('active');
        }
      }

      var _loop3 = function _loop3(i) {
        tab[i].addEventListener('click', function () {
          showTabContent(i);
        });
      };

      for (var i = 0; i < tab.length; i++) {
        _loop3(i);
      }
    }
    module.exports = tabs;
  }, {}], 7: [function (require, module, exports) {
    function tabsDec() {
      var noClick = document.querySelectorAll('.no_click'),
          decor = document.querySelector('.decoration'),
          decorItem = document.getElementsByClassName('decoration_item'),
          decorA = document.querySelectorAll('.no_click>a'),
          decorContent = document.querySelectorAll('.tabs-finishing-content');

      function showTabClass(a) {
        for (var t = 0; t < noClick.length; t++) {
          noClick[t].classList.remove('after_click');
          decorContent[t].style.display = 'none';
        }
        noClick[a].classList.add('after_click');
        decorContent[a].style.display = 'block';
      }

      decor.addEventListener('click', function (event) {
        var target = event.target;
        if (target.parentElement.classList.contains('no_click')) {
          // console.log('содержит но клик');
          for (var i = 0; i < decorA.length; i++) {
            if (target == decorA[i]) {
              showTabClass(i);
              break;
            }
          }
        }
      });
    }
    module.exports = tabsDec;
  }, {}], 8: [function (require, module, exports) {
    function timer() {

      var deadline = '2018-07-07';

      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = 0,
            minutes = 0,
            hours = 0,
            days = 0,
            offset = new Date().getTimezoneOffset() / 60;
        if (t > 0) {
          // console.log('if');
          seconds = Math.floor(t / 1000 % 60);
          minutes = Math.floor(t / 1000 / 60 % 60);
          hours = Math.floor(t / (1000 * 60 * 60) + offset);
          days = Math.floor(t / (1000 * 60 * 60 * 24));
          // console.log(hours);
        } else {
          // console.log('else');
          seconds = 0;
          minutes = 0;
          hours = 0;
          days = 0;
        }
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      };

      function countNumber(i) {
        var a = String(i),
            b = 0;
        if (a.length == 1) {
          a = 0 + '' + i;
        } else {
          a = i;
        }
        return a;
      };

      function setClock(id, endtime) {

        var timer = document.getElementsByClassName(id)[0],
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updateClock() {
          var t = getTimeRemaining(endtime);
          var arrTime = [t.days, t.hours, t.minutes, t.seconds];
          for (var i = 0; i < arrTime.length; i++) {
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

        var timeInterval = setInterval(updateClock, 1000);
      };

      setClock('eTimer', deadline);
    }

    module.exports = timer;
  }, {}] }, {}, [1]);