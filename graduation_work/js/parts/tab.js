function tab() {
	let tab = document.getElementsByClassName('glazing_block'),
		parent = document.getElementsByClassName('glazing')[0],
		contBlock = parent.getElementsByClassName('row'),
		slider = document.getElementsByClassName('glazing_slider')[0];

	function hideTabContent(a) {
		for (let i = a; i < contBlock.length; i++) {
			contBlock[i].classList.remove('active');
			contBlock[i].classList.add('passive');
		}
	}

	hideTabContent(1) 

	function showTabContent(b) {
		if( сontent[b].classList.contains('passive')) {
			hideTabContent(0);
			сontent[b].classList.remove('passive');
			сontent[b].classList.add('active');
		}
	}

	slider.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'glazing_block') {
			for (let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;



