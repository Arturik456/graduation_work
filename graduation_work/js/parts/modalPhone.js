function modalPhone() {
	let phone = document.getElementsByClassName('phone_link')[0],
		phoneFutter = document.getElementsByClassName('phone_link')[1],
		popup = document.querySelector('.popup'),
		content = document.getElementsByClassName('popup_content')[0];

	phone.addEventListener('click', function() {
		popup.style.display = "block";
	});

	phoneFutter.addEventListener('click', function() {
		popup.style.display = "block";
	});
	

	popup.addEventListener('click', function(event) {
		if(event.target == content 
			|| event.target == document.getElementsByClassName('popup_dialog')[0]
				|| event.target == document.getElementsByClassName('popup_form')[0]
				|| event.target == document.getElementsByClassName('form')[0]
				|| event.target == document.getElementsByClassName('form-control')[12]
				|| event.target == document.getElementsByClassName('form-control')[13]) {
	 		popup.style.display = 'block';
	 	} else {
	 		popup.style.display = 'none';
	 	}
	});

	setTimeout(function() {
		popup.style.display = "block";
	}, 60000);



};
module.exports = modalPhone;