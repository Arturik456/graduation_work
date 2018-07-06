function img() {
	let divImage = document.createElement('div'),
		imgPic = document.createElement('img'),
		zoom = document.getElementsByClassName('zoomIn'),
		zoomIn = document.querySelectorAll('.zoomIn > a'),
		works = document.querySelector('.works');

			divImage.classList.add('div_picture');
			imgPic.classList.add('div_picture_img');

	for (let i = 0; i < zoom.length; i++) {
		zoom[i].addEventListener('click', (event) => {
			event.preventDefault();
			divImage.style.display = 'flex';
			works.appendChild(divImage);
			divImage.appendChild(imgPic);
			for (let i = 0; i < zoomIn.length; i++) {
				zoomIn[i].getAttribute('href');
			}
			imgPic.setAttribute('src', zoomIn[i].href);
		});
	}

	divImage.addEventListener('click', (event) => {
		let target = event.target;
		if (target == divImage) {
			divImage.style.display = 'none';
		}
	});
}

module.exports = img;