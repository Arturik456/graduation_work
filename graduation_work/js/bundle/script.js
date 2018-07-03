window.addEventListener('DOMContentLoaded', function() {

	let modalEng = require('../parts/modalEng.js');
	let modalPhone = require('../parts/modalPhone.js');
	let calc = require('../parts/calc.js');
	let tabs = require('../parts/tabs.js');
	let tabsDec = require('../parts/tabsDec.js');
	let ajax = require('../parts/ajax.js');
	// let slider = require('../parts/slider.js');

	modalEng();
	modalPhone();
	calc();
	ajax();
	tabs();
	tabsDec();
	// slider();


});