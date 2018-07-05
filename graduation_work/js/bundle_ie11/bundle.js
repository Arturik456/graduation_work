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

      var modalEng = require('../parts/modalEng.js');
      var modalPhone = require('../parts/modalPhone.js');
      var calc = require('../parts/calc.js');
      var tabs = require('../parts/tabs.js');
      var tabsDec = require('../parts/tabsDec.js');
      var ajax = require('../parts/ajax.js');
      var img = require('../parts/img.js');
      var time = require('../parts/time.js');
      // let slider = require('../parts/slider.js');

      modalEng();
      modalPhone();
      calc();
      ajax();
      tabs();
      tabsDec();
      img();
      time('2018-07-7');
      // slider();

    });
  }, { "../parts/ajax.js": 2, "../parts/calc.js": 3, "../parts/img.js": 4, "../parts/modalEng.js": 5, "../parts/modalPhone.js": 6, "../parts/tabs.js": 7, "../parts/tabsDec.js": 8, "../parts/time.js": 9 }], 2: [function (require, module, exports) {
    function ajax() {

      var message = new Object();
      message.loading = "Загрузка...";
      message.success = 'Спасибо, скоро мы с вами свяжемся!';
      message.failure = 'Что-то пошло не так...';

      var form = document.getElementsByTagName('form'),
          input = document.getElementsByTagName('input'),
          statusMessage = document.createElement('div');

      var _loop = function _loop(i) {
        form[i].addEventListener('submit', function (event) {
          event.preventDefault();
          form[i].appendChild(statusMessage);

          var messageTimeOut = setTimeout(function () {
            statusMessage.innerHTML = '';
          }, 7000);

          //AJAX
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

          var formData = new FormData(form[i]);

          request.send(formData);

          request.onreadystatechange = function () {
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
          };
          for (var _i = 0; _i < input.length; _i++) {
            input[_i].value = '';
          };
        });
      };

      for (var i = 0; i < form.length; i++) {
        _loop(i);
      };
    };

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
          for (var _i2 = a; _i2 < typeContent.length; _i2++) {
            typeContent[_i2].classList.remove('show');
            typeContent[_i2].classList.add('hide');
            typeContent[_i2].classList.add('animated');
            typeContent[_i2].classList.add('fadeIn');
            typeImg[_i2].classList.remove('scale');
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

        var _loop2 = function _loop2(_i3) {
          type[_i3].addEventListener('click', function (event) {
            event.preventDefault();
            typeContent[_i3].setAttribute('value', _i3 + 1);
            data.type = typeContent[_i3].getAttribute('value');
            showTabContent(_i3);
          });
        };

        for (var _i3 = 0; _i3 < type.length; _i3++) {
          _loop2(_i3);
        };
      }
      tabsCalc();

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
    };

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

      var _loop3 = function _loop3(i) {
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
        _loop3(i);
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
    function modalEng() {

      var btnEng = document.querySelector('.header_btn'),
          window = document.querySelector('.popup_engineer'),
          contentEng = document.getElementsByClassName('popup_content')[1];

      btnEng.addEventListener('click', function () {
        window.style.display = 'block';
      });

      window.addEventListener('click', function (event) {
        if (event.target == contentEng || event.target == document.getElementsByClassName('popup_dialog')[1] || event.target == document.getElementsByClassName('popup_form')[1] || event.target == document.getElementsByClassName('form')[1] || event.target == document.getElementsByClassName('form-control')[14] || event.target == document.getElementsByClassName('form-control')[15]) {
          window.style.display = 'block';
        } else {
          window.style.display = "none";
        }
      });
    };

    module.exports = modalEng;
  }, {}], 6: [function (require, module, exports) {
    function modalPhone() {
      var phone = document.getElementsByClassName('phone_link')[0],
          phoneFutter = document.getElementsByClassName('phone_link')[1],
          popup = document.querySelector('.popup'),
          content = document.getElementsByClassName('popup_content')[0];

      phone.addEventListener('click', function () {
        popup.style.display = "block";
      });

      phoneFutter.addEventListener('click', function () {
        popup.style.display = "block";
      });

      popup.addEventListener('click', function (event) {
        if (event.target == content || event.target == document.getElementsByClassName('popup_dialog')[0] || event.target == document.getElementsByClassName('popup_form')[0] || event.target == document.getElementsByClassName('form')[0] || event.target == document.getElementsByClassName('form-control')[12] || event.target == document.getElementsByClassName('form-control')[13]) {
          popup.style.display = 'block';
        } else {
          popup.style.display = 'none';
        }
      });

      setTimeout(function () {
        popup.style.display = "block";
      }, 60000);
    };
    module.exports = modalPhone;
  }, {}], 7: [function (require, module, exports) {
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

      var _loop4 = function _loop4(i) {
        tab[i].addEventListener('click', function () {
          showTabContent(i);
        });
      };

      for (var i = 0; i < tab.length; i++) {
        _loop4(i);
      }
    }
    module.exports = tabs;
  }, {}], 8: [function (require, module, exports) {
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
  }, {}], 9: [function (require, module, exports) {
    function timer(deadLine) {

      var eTimer = document.getElementsByClassName('eTimer')[0];

      function getTime(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor(t / 1000 % 60),
            minutes = Math.floor(t / (1000 * 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      };

      function setClock(id, endtime) {
        var timer = document.getElementById(id),
            days = document.querySelector('.days'),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds');

        function updateClock() {
          var t = getTime(endtime);
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

      setClock(eTimer, deadLine);
    }

    module.exports = timer;
  }, {}] }, {}, [1]);