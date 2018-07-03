function tabsDec()  {
	let tabTo = document.getElementsByClassName('decoration'),
		noClick = document.getElementsByClassName('no_click'),
		tabContentTo = document.querySelectorAll('.tabs_content_to');


		function hideTabDecoration (a) {
			for (let t = 0; t < tabContentTo.length; t++) {
				tabContentTo[t].classList.remove('show');
				tabContentTo[t].classList.add('hide');
				noClick[t].classList.remove('after_click');
				tabContentTo[t].style.display = 'none';
			}
		}

		hideTabDecoration(1)

		function showTabContent(c) {
			if (tabContentTo[c].classList.contains('hide')) {
				hideTabDecoration(0);
				tabContentTo[c].classList.remove('hide');
				tabContentTo[c].classList.add('show');
				noClick[c].classList.add('after_click');
				tabContentTo[c].style.display = 'none'
				}
			}
		
		for (let j = 0; j < tabTo.length; j++) {
			tabTo[j].addEventListener('click', ()=> {
				showTabContent(j);
			})
		}


}
module.exports = tabsDec;