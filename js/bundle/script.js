window.addEventListener('DOMContentLoaded', function() {

	let modal = require('../parts/modal.js');
	let calc = require('../parts/calc.js');
	let tabs = require('../parts/tabs.js');
	let tabsDec = require('../parts/tabsDec.js');
	let ajax = require('../parts/ajax.js');
	let img = require('../parts/img.js');
	let time = require('../parts/time.js');


	modal();
	calc();
	ajax();
	tabs();
	tabsDec();
	img();
	time();


});