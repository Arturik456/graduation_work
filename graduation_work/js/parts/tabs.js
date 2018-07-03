function tabs() {
	let tab = document.getElementsByClassName('glazing_block'),
		glazing = document.getElementsByClassName('glazing')[0],
		link = document.querySelectorAll('.glazing_block > a'),
		tabContent = document.getElementsByClassName('tabs_content');

		function hideTabContent(a) {
			for (let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
				link[i].classList.remove('active');
			}
		}

		hideTabContent(1)

		function showTabContent(b) {
			if (tabContent[b].classList.contains('hide')) {
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
				link[b].classList.add('active');
				}
			}
		
		for (let i = 0; i < tab.length; i++) {
			tab[i].addEventListener('click', ()=> {
				showTabContent(i);
			})
		}
}
module.exports = tabs;



