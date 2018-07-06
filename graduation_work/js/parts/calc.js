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