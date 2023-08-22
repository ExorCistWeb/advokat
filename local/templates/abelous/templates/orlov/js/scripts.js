; (function () {

	"use strict";

	// carousel sertif
	if ($('.carousel-sertif').length > 0) {
		$('.carousel-sertif').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			dots: false,
			lazyLoad: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		});
	}


	// lazy load
	var bLazy = new Blazy({
		// Options
		offset: 100
	});

/*
	// show wins more
	if ($('.wins').length > 0) {
		const winsBtn = document.querySelector('.wins__btn');
		const winsItemsMore = document.querySelector('.wins__items-more');

		function showWinsMoreItems(elem) {
			return elem.classList.add('wins__items-more--active');
		}

		winsBtn.addEventListener('click', (e) => {

			e.preventDefault();

			if (e.target.classList.contains('wins__btn')) {
				e.target.classList.add('wins__btn--hidden');
			}

			showWinsMoreItems(winsItemsMore);
			
		});
	}
*/

})();