function timer(deadLine) {

	let eTimer = document.getElementsByClassName('eTimer')[0];

	function getTime(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / (1000 * 60) % 60)),
		hours = Math.floor(t / (1000 * 60 * 60) % 24),
		days = Math.floor(t / (1000 * 60 * 60 * 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}; 

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
		days = document.querySelector('.days'),
		hours = document.querySelector('.hours'),
		minutes = document.querySelector('.minutes'),
		seconds = document.querySelector('.seconds');

		function updateClock() {
			let t = getTime(endtime);
			let arrTime = [t.days, t.hours, t.minutes, t.seconds];
			for (let i = 0; i < arrTime.length; i++) {
				if (arrTime[i] < 10) {
					arrTime[i] = '0' + arrTime[i];
				};
			};
			days.innerHTML = arrTime[0];
			hours.innerHTML = arrTime[1];
			minutes.innerHTML = arrTime[2];
			seconds.innerHTML = arrTime[3];
			if (t.total <= 0) {
				clearInterval(timeInterval);
				days.innerHTML = '00';
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			};
		};
		let timeInterval = setInterval(updateClock, 1000);
	};

	setClock(eTimer, deadLine);
}

module.exports = timer;