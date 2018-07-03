function tabsDec()  {
let noClick = document.querySelectorAll('.no_click'),
    decor = document.querySelector('.decoration'),
    decorItem = document.getElementsByClassName('decoration_item'),
    decorA = document.querySelectorAll('.no_click > a'),
    decorContent = document.querySelectorAll('.tabs_content_to');

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