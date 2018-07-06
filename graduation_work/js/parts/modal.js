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