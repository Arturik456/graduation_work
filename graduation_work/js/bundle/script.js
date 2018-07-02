window.addEventListener('DOMContentLoaded', function() {

	let modalEng = require('../parts/modalEng.js');
	let modalPhone = require('../parts/modalPhone.js');
	let modalCalc = require('../parts/modalCalc.js');
	let tab = require('../parts/tab.js');
	let ajax = require('../parts/ajax.js');

	modalEng();
	modalPhone();
	modalCalc();
	ajax();
	tab();


});