window.addEventListener('DOMContentLoaded', function() {

	let modalEng = require('../parts/modalEng.js');
	let modalPhone = require('../parts/modalPhone.js');
	let calc = require('../parts/calc.js');
	let tabs = require('../parts/tabs.js');
	let tabsDec = require('../parts/tabsDec.js');
	let ajax = require('../parts/ajax.js');
	let img = require('../parts/img.js');
	let time = require('../parts/time.js');
	// let slider = require('../parts/slider.js');

	modalEng();
	modalPhone();
	calc();
	ajax();
	tabs();
	tabsDec();
	img();
	time('2018-07-7');
	// slider();


});