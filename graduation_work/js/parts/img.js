function img() {
let blockWorks = document.getElementsByClassName('works')[0],
	photoImg = document.getElementsByClassName('works-img'),
	linkImg = document.querySelectorAll('div.works-img > a'),
	littleImg = document.getElementsByClassName('lupa'),
	zoomImgDiv = document.createElement('div'),
	zoomImg = document.createElement('img');

	blockWorks.appendChild(zoomImgDiv);

	for(let i = 0; i < linkImg.length; i++) {
		linkImg[i].addEventListener('click', function(event) {
			event.preventDefault();

			zoomImgDiv.appendChild(zoomImg);
			zoomImgDiv.classList.add('zoom-div');

		let linkA = linkImg[i].getAttribute('href');

			zoomImg.setAttribute('src', linkA);
			zoomImg.classList.add('zoom-img');
			zoomImgDiv.classList.remove('hide');
			zoomImgDiv.classList.add('show');

			zoomImgDiv.classList.add('animated');
			zoomImgDiv.classList.remove('fadeOut');
			zoomImgDiv.classList.add('fadeIn');

			document.body.classList.remove('overflow_auto');
			document.body.classList.add('overflow_hidden');
		});
	};

	zoomImgDiv.addEventListener('click', function(event) {
		let target = event.target;
			if (target == this) {
				zoomImgDiv.classList.remove('fadeIn');
				zoomImgDiv.classList.add('fadeOut');
			setTimeout( ()=> {
				zoomImgDiv.classList.remove('show');
				zoomImgDiv.classList.add('hide');
				document.body.classList.remove('overflow_hidden');
				document.body.classList.add('overflow_auto');
			}, 700);
		}
	})

}
module.exports = img;