function ajax() {
	
	let message = new Object();
		message.loading = "Ожидание...";
		message.success = "Спасибо! C Вами свяжется специалист!",
		message.failure = "Что то пошло не так...";
		form = document.getElementsByClassName('form'),
		statusMessage = document.createElement('div'),
		phone = document.getElementsByName('user_phone');
		statusMessage.classList.add('status');

	for (let j = 0; j < phone.length; j++) {
		phone[j].addEventListener('keypress', function() {
	        setTimeout(() => {
	            var res = /[^\d]/g.exec(this.value);
	            this.value = this.value.replace(res, '');
	        }, 0);
	    });
	}

	for (let i = 0; i < form.length; i++) {
		let input = form[i].getElementsByTagName('input');
	
		form[i].addEventListener('submit', function(event) {
			event.preventDefault();
			form[i].appendChild(statusMessage);

	//AJAX
		let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//Добавляем контент на страницу
					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
				function func () {
					statusMessage.style.display = 'none'
		}
			}
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				//Очищаем поля ввода
			}
	});

	}

}

module.exports = ajax;