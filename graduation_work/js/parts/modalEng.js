function modalEng () {

	let btnEng = document.querySelector('.header_btn'),
		window = document.querySelector('.popup_engineer'),
		contentEng = document.getElementsByClassName('popup_content')[1];

		btnEng.addEventListener('click', function() {
			window.style.display = 'block';
		});

		window.addEventListener('click', function(event) {
			if(event.target == contentEng 
				|| event.target == document.getElementsByClassName('popup_dialog')[1]
				|| event.target == document.getElementsByClassName('popup_form')[1]
				|| event.target == document.getElementsByClassName('form')[1]
				|| event.target == document.getElementsByClassName('form-control')[14]
				|| event.target == document.getElementsByClassName('form-control')[15]) {
				window.style.display = 'block';
			} else {
				window.style.display = "none";
			}
			
		}); 

};

module.exports = modalEng;
