import Swiper from 'swiper';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';

export const toggleMainMenu = () => {
    document.documentElement.classList.toggle("lock") 
    document.documentElement.classList.toggle("menu-open");
}

export const isWebp = () => {
	// Проверка поддержки webp 
	function testWebP(callback: any) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Додавання класу _webp або _no-webp для HTML
	testWebP(function (support: any) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export const initSliders = ()  => {
    // Список слайдерів
    // Перевіряємо, чи є слайдер на сторінці

      const resizableSwiper = (breakpoint: any, swiperClass: any, swiperSettings: any, callback: any) => {
        if (document.querySelector(swiperClass)) {
            let swiper: any;

            breakpoint = window.matchMedia(breakpoint);

            const enableSwiper = function (className: any, settings: any) {
                swiper = new Swiper(className, settings);
            };

            const checker = function () {
                if (breakpoint.matches) {
                    return enableSwiper(swiperClass, swiperSettings);
                } else {
                    if (swiper !== undefined) swiper.destroy(true, true);
                    return;
                }
            };

            breakpoint.addEventListener("change", checker);
            checker();

			if (!!window.IntersectionObserver) {
				let observer = new IntersectionObserver(
				  (entries, observer) => {
					entries.forEach((entry) => {
					  if (entry.isIntersecting) {
						swiper.autoplay.start()
						// You can remove the observer if you do not need it
						// observer.unobserve(entry.target);
					  } else {
						swiper.autoplay.stop()
					  }
					});
				  },
				  { rootMargin: "0px 0px -200px 0px" }
				);
		  
				// Add the observer to you swiper
				observer.observe(document.querySelector(".services__slider"));
			  } else {
				// You can use the polyfill or just start the autoplay
			  }
			}

        }
    

    //@ts-ignore
    resizableSwiper("(max-width: 549.98px)", ".services__slider", {
        modules: [Scrollbar, Autoplay],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        speed: 800,
        // Скроллбар
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        autoplay: false,
        loop: true
    });


    if (document.querySelector(".gallery__slider")) {
        // Вказуємо склас потрібного слайдера
        // Створюємо слайдер
        new Swiper(".gallery__slider", {
            // Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Navigation, Scrollbar],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            
			// Ефекти
			//effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			

            // Пагінація
            /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

            // Скроллбар
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
            },

            // Кнопки "вліво/вправо"
            navigation: {
                prevEl: ".gallery__navigation .swiper-button-prev",
                nextEl: ".gallery__navigation .swiper-button-next",
            },
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 10,
				},
				550: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
            // Події
            on: {},
        });
    }

	if (document.querySelector(".reviews__slider")) {
        // Вказуємо склас потрібного слайдера
        // Створюємо слайдер
        new Swiper(".reviews__slider", {
            // Вказуємо склас потрібного слайдера
            // Підключаємо модулі слайдера
            // для конкретного випадку
            modules: [Navigation, Scrollbar],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            // autoHeight: true,
            speed: 800,
            // Скроллбар
            scrollbar: {
                el: ".reviews__body .swiper-scrollbar",
                draggable: true,
            },

            // Кнопки "вліво/вправо"
            navigation: {
                prevEl: ".reviews__navigation .swiper-button-prev",
                nextEl: ".reviews__navigation .swiper-button-next",
            },
            // Події
            on: {},
        });
    }
	
}

export const spollers = () => {
	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Подія кліку
		document.addEventListener("click", setSpollerAction);
		// Отримання зчайних слойлерів
		const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
			//@ts-ignore
            return !item.dataset.spollers.split(",")[0];
		});
		// Ініціалізація звичайних слойлерів
		if (spollersRegular.length) {
			initSpollers(spollersRegular);
		}
		// Отримання слойлерів з медіа-запитами
        //@ts-ignore
		let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Подія
				mdQueriesItem.matchMedia.addEventListener("change", function () {
					initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
				initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
		// Ініціалізація
		function initSpollers(spollersArray: any[], matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                //@ts-ignore
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_spoller-init');
					initSpollerBody(spollersBlock);
				} else {
					spollersBlock.classList.remove('_spoller-init');
					initSpollerBody(spollersBlock, false);
				}
			});
		}
		// Робота з контентом
		function initSpollerBody(spollersBlock: any, hideSpollerBody = true) {
			let spollerItems = spollersBlock.querySelectorAll('details');
			if (spollerItems.length) {
				//spollerItems = Array.from(spollerItems).filter(item => item.closest('[data-spollers]') === spollersBlock);
                //@ts-ignore
				spollerItems.forEach(spollerItem => {
					let spollerTitle = spollerItem.querySelector('summary');
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerItem.hasAttribute('data-open')) {
							spollerItem.open = false;
							spollerTitle.nextElementSibling.hidden = true;
						} else {
							spollerTitle.classList.add('_spoller-active');
							spollerItem.open = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.classList.remove('_spoller-active');
						spollerItem.open = true;
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e: any) {
			const el = e.target;
			if (el.closest('summary') && el.closest('[data-spollers]')) {
				e.preventDefault();
				if (el.closest('[data-spollers]').classList.contains('_spoller-init')) {
					const spollerTitle = el.closest('summary');
					const spollerBlock = spollerTitle.closest('details');
					const spollersBlock = spollerTitle.closest('[data-spollers]');
					const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
					const scrollSpoller = spollerBlock.hasAttribute('data-spoller-scroll');
					const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
					if (!spollersBlock.querySelectorAll('._slide').length) {
						if (oneSpoller && !spollerBlock.open) {
							hideSpollersBody(spollersBlock);
						}

						!spollerBlock.open ? spollerBlock.open = true : setTimeout(() => { spollerBlock.open = false }, spollerSpeed);

						spollerTitle.classList.toggle('_spoller-active');
						_slideToggle(spollerTitle.nextElementSibling, spollerSpeed);

						if (scrollSpoller && spollerTitle.classList.contains('_spoller-active')) {
							const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
							const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                            //@ts-ignore
							const scrollSpollerNoHeader = spollerBlock.hasAttribute('data-spoller-scroll-noheader') ? document.querySelector('.header').offsetHeight : 0;

							//setTimeout(() => {
							window.scrollTo(
								{
									top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
									behavior: "smooth",
								}
							);
							//}, spollerSpeed);
						}
					}
				}
			}
			// Закриття при кліку поза спойлером
			if (!el.closest('[data-spollers]')) {
				const spollersClose = document.querySelectorAll('[data-spoller-close]');
				if (spollersClose.length) {
					spollersClose.forEach(spollerClose => {
						const spollersBlock = spollerClose.closest('[data-spollers]');
						const spollerCloseBlock = spollerClose.parentNode;
						if (spollersBlock!.classList.contains('_spoller-init')) {
                            //@ts-ignore
							const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
							spollerClose.classList.remove('_spoller-active');
							_slideUp(spollerClose.nextElementSibling, spollerSpeed);
                            //@ts-ignore
							setTimeout(() => { spollerCloseBlock.open = false }, spollerSpeed);
						}
					});
				}
			}
		}
		function hideSpollersBody(spollersBlock: any) {
			const spollerActiveBlock = spollersBlock.querySelector('details[open]');
			if (spollerActiveBlock && !spollersBlock.querySelectorAll('._slide').length) {
				const spollerActiveTitle = spollerActiveBlock.querySelector('summary');
				const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
				spollerActiveTitle.classList.remove('_spoller-active');
				_slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
				setTimeout(() => { spollerActiveBlock.open = false }, spollerSpeed);
			}
		}
	}
}

export function dataMediaQueries(array: any[], dataSetValue: any) {
	// Отримання об'єктів з медіа-запитами
	const media = Array.from(array).filter(function (item : any, index, self) {
		if (item.dataset[dataSetValue]) {
			return item.dataset[dataSetValue].split(",")[0];
		}
	});
	// Ініціалізація об'єктів з медіа-запитами
	if (media.length) {
		const breakpointsArray: any[] = [];
		media.forEach(item => {
            //@ts-ignore
			const params = item.dataset[dataSetValue];
			const breakpoint: any = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});
		// Отримуємо унікальні брейкпоінти
		let mdQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mdQueries = uniqArray(mdQueries);
		const mdQueriesArray: any[] = [];

		if (mdQueries.length) {
			// Працюємо з кожним брейкпоінтом
			mdQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Об'єкти з потрібними умовами
				const itemsArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				mdQueriesArray.push({
					itemsArray,
					matchMedia
				})
			});
			return mdQueriesArray;
		}
	}
}

export let _slideUp = (target: any, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = !showmore ? true : false;
			!showmore ? target.style.removeProperty('height') : null;
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			!showmore ? target.style.removeProperty('overflow') : null;
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Створюємо подію 
			document.dispatchEvent(new CustomEvent("slideUpDone", {
				detail: {
					target: target
				}
			}));
		}, duration);
	}
}
export let _slideDown = (target: any, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		showmore ? target.style.removeProperty('height') : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Створюємо подію
			document.dispatchEvent(new CustomEvent("slideDownDone", {
				detail: {
					target: target
				}
			}));
		}, duration);
	}
}
export let _slideToggle = (target: any, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}

export function uniqArray(array: any[]) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}