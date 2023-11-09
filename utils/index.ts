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
        }
    };

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
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
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