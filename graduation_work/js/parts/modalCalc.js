function modalCalc() {

	let btnPrice = document.querySelector('.popup_calc_btn'),
		popup = document.querySelector('.popup_calc'),
		close = document.querySelector('.popup_calc_close');

	  	btnPrice.addEventListener('click', function() {
			this.classList.add('more-splash');
			popup.style.display = "block";
			document.body.style.overflow = 'hidden';
		});		

		close.addEventListener('click', function() {
			popup.style.display = 'none';
			btnPrice.classList.remove('more-splash');
			document.body.style.overflow = '';			
		}); 

};

module.exports = modalCalc;