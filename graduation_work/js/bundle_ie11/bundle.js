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
      time('2018-07-7');
    });
  }, { "../parts/ajax.js": 2, "../parts/calc.js": 3, "../parts/img.js": 4, "../parts/modal.js": 5, "../parts/tabs.js": 6, "../parts/tabsDec.js": 7, "../parts/time.js": 8 }], 2: [function (require, module, exports) {
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

      var popupCalcCont = document.querySelector('.popup_calc_content'),
          balconIcons = popupCalcCont.querySelector('.balcon_icons'),
          imgMini = balconIcons.getElementsByTagName('img'),
          bigImg = popupCalcCont.querySelector('.big_img'),
          imgBig = bigImg.getElementsByTagName('img'),
          inputWidth = document.getElementById('width'),
          inputHeight = document.getElementById('height'),
          select = document.getElementById('view_type'),
          checkbox = document.getElementsByClassName('checkbox'),
          popCalcEnd = document.querySelector('.popup_calc_end'),
          popupFormCalcEnd = popCalcEnd.querySelector('.popup_form');

      popupFormCalcEnd.addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

        var formData = new FormData(data);

        console.log(formData);

        request.send(formData);

        data.type = '';
        data.width = 0;
        data.height = 0;
        data.cold = false;
        data.warm = false;
        inputWidth.value = '';
        inputHeight.value = '';
        checkbox[0].checked = false;
        checkbox[1].checked = false;
      });

      select.addEventListener('change', function () {
        data.type = select.value;
        console.log(data);
      });

      inputWidth.addEventListener('keyup', function () {
        inputWidth.value = inputWidth.value.replace(/[^\d]/g, '');
        data.width = inputWidth.value;
        console.log(data);
      });
      inputHeight.addEventListener('keyup', function () {
        inputHeight.value = inputHeight.value.replace(/[^\d]/g, '');
        data.height = inputHeight.value;
        console.log(data);
      });

      function check(a, b) {

        if (checkbox[a].checked) {
          checkbox[b].checked = false;
        };

        for (var i = 0; i < checkbox.length; i++) {
          if (checkbox[0].checked) {
            data.cold = true;
          } else {
            data.cold = false;
          };
          if (checkbox[1].checked) {
            data.warm = true;
          } else {
            data.warm = false;
          };
        }
        console.log(data);
      };

      checkbox[0].addEventListener('click', function () {
        check(0, 1);
      });
      checkbox[1].addEventListener('click', function () {
        check(1, 0);
      });

      var data = {
        type: String,
        width: 0,
        height: 0,
        cold: false,
        warm: false
      };

      popupCalcCont.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;

        for (var i = 0; i < imgMini.length; i++) {
          if (target == imgMini[i]) {
            console.log('равно ' + imgMini[i].src);
            for (var t = 0; t < imgMini.length; t++) {
              imgMini[t].style.width = '60px';
            }
            imgMini[i].style.width = '150px';
            for (var _t = 0; _t < imgBig.length; _t++) {
              imgBig[_t].style.display = 'none';
            }
            imgBig[i].style.display = 'inline-block';

            break;
          }
        }
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

      var _loop2 = function _loop2(i) {
        zoom[i].addEventListener('click', function (event) {
          event.preventDefault();
          divImage.style.display = 'flex';
          works.appendChild(divImage);
          divImage.appendChild(imgPic);
          for (var _i2 = 0; _i2 < zoomIn.length; _i2++) {
            zoomIn[_i2].getAttribute('href');
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