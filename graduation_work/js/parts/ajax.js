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