function calc() {

  let popupCalcCont = document.querySelector('.popup_calc_content'),
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
  
    // console.log(select.options[select.selectedIndex].value);

  popupFormCalcEnd.addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

    let formData = new FormData(data);
    console.log(data);
    
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



  select.addEventListener('change', () => {
    data.type = select.value;
    console.log(data);
  });

  inputWidth.addEventListener('keyup', () => {
    inputWidth.value = inputWidth.value.replace(/[^\d]/g, '');
    data.width = inputWidth.value;    
    console.log(data);
  });
  inputHeight.addEventListener('keyup', () => {
    inputHeight.value = inputHeight.value.replace(/[^\d]/g, '');
    data.height = inputHeight.value;
    console.log(data);  
  });

  function check(a,b) {
    
      if (checkbox[a].checked) {
        checkbox[b].checked = false;
      };
      // if (checkbox[1].checked) {
      //   checkbox[0].checked = false;
      // };
      for (let i = 0; i < checkbox.length; i++) {
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
  // check();

  checkbox[0].addEventListener('click', () => {
    check(0,1);

  });
  checkbox[1].addEventListener('click', () => {
    check(1,0);
  });

  const data = {
    type : String,
    width : 0,
    height : 0,
    cold : false,
    warm : false
  };

  popupCalcCont.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    
    // console.log(target);
    for (let i = 0; i < imgMini.length; i++) {
      if (target == imgMini[i]) {
        console.log('равно ' + imgMini[i].src);
        for (let t = 0; t < imgMini.length; t++) {
          imgMini[t].style.width = '60px';          
        }
        imgMini[i].style.width = '150px';
        for (let t = 0; t < imgBig.length; t++) {
          imgBig[t].style.display = 'none';          
        }
        imgBig[i].style.display = 'inline-block';

        break;
      }
     console.log('тест ' + target);
      
    }
  });


}

module.exports = calc;