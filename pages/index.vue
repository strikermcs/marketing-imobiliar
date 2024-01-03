<script setup lang="ts">
import type { IServicePrice, TServicePrice } from '~/types';
import AOS from 'aos'
import { isWebp, initSliders, spollers } from '~/utils'
import 'aos/dist/aos.css'

const landing = useLandingStore() 
const contacts = useContactsStore()
const notify = useNotificationStore()
const {width} = useWindowSize()

const { promo, 
		services, 
		benefits, 
		questions, 
		pricesAndServices,
		gallery,
		testimonials 
	} = storeToRefs(landing)

const { additionalInfo } = storeToRefs(contacts)	

const totalServicesPrice = ref<number>(0)
const servicePricesArray = ref<IServicePrice[]>([])

const showOrderDialogVisible = ref<boolean>(false)

const priceServiceToDisplay = computed(() => {
	return (value: TServicePrice) => {
		if(value === 'Free') return 'Gratuit'
		if(value === 'PriceOnRequest') return 'Preț la cerere'
		return `Pret ${value} lei`
	}
})


let priceToogle = false

const priceServiceClickHandler = (price: IServicePrice) => {
	if(!priceToogle) {
		totalServicesPrice.value = 0
		const temp = servicePricesArray.value.find(s => s.id === price.id)
		if(!temp) {
			servicePricesArray.value.push(price)
		} else {
			servicePricesArray.value = servicePricesArray.value.filter(s => s.id != price.id)
		}

	
			servicePricesArray.value.forEach(item => {
				if(item.price != 'Free' && item.price != 'PriceOnRequest' ) {
					totalServicesPrice.value += item.price
				}
			})
		
		priceToogle = true
	} else {
		priceToogle = false
	}	
}

const orderButtonClickHandler = () => {
	if(servicePricesArray.value.length === 0) {
		notify.SetNofication('Warning', 'Nothing to show! Please first select the services to order.', 'info')
	} else {
		showOrderDialogVisible.value = true
	}
}

const submitedOrderHandler = () => {
	showOrderDialogVisible.value = false
	
}

onMounted(() => {
  AOS.init({ 
	offset: 120
})
  isWebp()
  initSliders()
  spollers() 
})
</script>

<template>
	<main class="page">

		<el-dialog v-model="showOrderDialogVisible" title="Order" 
			:width="width > 1000 ? '50%' : '98%'" 
			 draggable destroy-on-close
			class="order-dialog"
		>
            <div>
				<MainOrderForm 
					:services="servicePricesArray" 
					:totalPrice="totalServicesPrice"
					@submited="submitedOrderHandler"
				/>
            </div>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="showOrderDialogVisible = false">Cancel</el-button>
            </span>
            </template>
        </el-dialog>

		<section class="promo" id="promo">	
			<ClientOnly>
				<UISocialsIconsBlock data-aos="fade-right" v-if="width > 992"/>	
			</ClientOnly>		
			<div class="promo__container">
				<div class="promo__body"
						data-aos="fade-up"
            			data-aos-once="true"
				>
					<h1 class="promo__title">
						<span>
							{{promo?.title}}
						</span>
						{{promo?.subtitle}}
					</h1>
					<div class="promo__text">
						<p>
							<span>
								{{promo?.boldText}}
							</span>
						</p>
						<p>
							{{promo?.description}}
						</p>
					</div>
					<a href="#service-prices" class="promo__link btn">
						<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.1526 7.14014V11.8084L19.9375 16.4766L15.1526 21.1448V25.813L24.7224 16.4766L15.1526 7.14014Z" fill="white" fill-opacity="0.85" />
							<path d="M7.17773 7.14014L7.17773 11.8084L11.9627 16.4766L7.17773 21.1448L7.17773 25.813L16.7476 16.4766L7.17773 7.14014Z" fill="white" fill-opacity="0.5" />
						</svg>
						<span>
							Preturi servicii
						</span>
						<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.7469 25.8129L16.7469 21.1447L11.962 16.4765L16.7469 11.8083L16.7469 7.14003L7.17709 16.4765L16.7469 25.8129Z" fill="white" fill-opacity="0.85" />
							<path d="M24.7218 25.8129L24.7218 21.1447L19.9369 16.4765L24.7218 11.8083L24.7218 7.14003L15.1519 16.4765L24.7218 25.8129Z" fill="white" fill-opacity="0.5" />
						</svg>
					</a>
				</div>
			</div>
			<a href="#about" class="promo__arrow-down">
				<img src="~/assets/img/icon/arrow-down.svg" alt="arrow-down">
			</a>
		</section>
		<section class="about" id="about">
			<div class="about__container">
				<div class="about__body">
					<div class="about__img" data-aos="fade-right">
						<img src="~/assets/img/about-image.svg" alt="about-image">
					</div>
					<div class="about__content" data-aos="fade-left">
						<h2 class="about__title title">
							<IconsTitleCheck />
							<span>
								Despre Noi
							</span>
							<span class="title__bg">
								Despre Noi
							</span>
						</h2>
						<div class="about__text">
							<p>
								Suntem o echipa pasionata si dedicata de profesionisti in marketing imobiliar,
								specializati in promovarea proprietatilor imobiliare. Cu o abordare inovatoare,
								oferim cele mai bune solutii pentru facilitarea unei vanzari reusite.
							</p>
						</div>
						<div class="about__text">
							<h4>
								Misiunea Noastră
							</h4>
							<p>
								Ne angajăm să oferim servicii de marketing specializat, care să evidențieze fiecare
								proprietate în mod unic și atrăgător, pozitionand-o in topul preferintelor
								cumparatorilor.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="services" id="services">
			<div class="services__container">
				<h2 class="services__title title">
					Servicii specializate de
					marketing imobiliar
				</h2>
				<div class="services__slider swiper">
					<div class="services__wrapper swiper-wrapper">
						<article 
							class="services__slide swiper-slide"
							v-for="(service, index) in services"
							:key="service.id"
							data-aos="fade-up"
							:data-aos-delay="index * 100"
						>
							<div class="services__slide-img">
								<img :src="service.image" alt="image-1">
							</div>
							<h4 class="services__slide-title">
								{{service.title}}
							</h4>
							<div class="services__slide-text">
								<p>
									{{service.description}}
								</p>
							</div>
						</article>
					</div>
					<div class="swiper-scrollbar"></div>
				</div>
				<div class="icon-swipe">
					<picture><source srcset="~/assets/img/icon/swipe.webp" type="image/webp"><img src="~/assets/img/icon/swipe.png" alt="swipe icon"></picture>
				</div>
			</div>
		</section>
		<section class="advantages" id="advantages">
			<div class="advantages__container">
				<h2 class="advantages__title title">
					<span>AVANTAJE</span>
					<span class="title__bg">
						AVANTAJE
					</span>
				</h2>
				<div class="advantages__text">
					<p>
						Marketingul imobiliar aduce numeroase avantaje pentru proprietățile imobiliare aflate
						la vânzare sau inchiriere. Iată câteva dintre acestea:
					</p>
				</div>
				<div class="advantages__items">
					<article 
						class="advantages__item"
						v-for="(avantage, index) in benefits"
						:key="avantage.id"
						data-aos="flip-right"
						:data-aos-delay="index * 100"
					>
						<div class="advantages__item-img">
							<img :src="avantage.image" alt="image-1">
						</div>
						<h4 class="advantages__item-title">
							{{avantage.title}}
						</h4>
						<div class="advantages__item-text">
							<p>
								{{avantage.description}}
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
		<section class="questions">
			<div class="questions__container">
				<h2 class="questions__title title">
					<span>INTREBARI FRECVENTE</span>
					<span class="title__bg">
						INTREBARI
					</span>
				</h2>
				<div data-spollers class="spollers">
					<details 
						class="spollers__item"
						v-for="(question, index) in questions"
						:key="question.id"
						:data-aos="index % 2 === 0 ? 'fade-right': 'fade-left'"
						:data-aos-delay="index * 200"
					>
						<summary class="spollers__title">
							<span class="spollers__counter"></span>
							{{question.question}}
						</summary>
						<div class="spollers__body">
							{{question.answer}}
						</div>
					</details>
					
				</div>
			</div>
		</section>
		<section class="service-prices" id="service-prices">
			<div class="service-prices__container">
				<h2 class="service-prices__title title">
					<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="31" cy="31" r="30.5773" stroke="url(#paint0_linear_56_437)" stroke-width="0.845455" />
						<circle cx="31.0015" cy="30.9995" r="25.0952" fill="url(#paint1_linear_56_437)" />
						<path d="M28.0495 36.4971L41.1314 23.4152C41.5158 23.0309 42.1389 23.0309 42.5232 23.4152C42.9075 23.7995 42.9075 24.4226 42.5232 24.807L28.7454 38.5847C28.3611 38.9691 27.738 38.9691 27.3537 38.5847L21.4489 32.68C21.0646 32.2957 21.0646 31.6725 21.4489 31.2882C21.8332 30.9039 22.4563 30.9039 22.8407 31.2882L28.0495 36.4971Z" fill="white" />
						<defs>
							<linearGradient id="paint0_linear_56_437" x1="31" y1="0" x2="31" y2="62" gradientUnits="userSpaceOnUse">
								<stop stop-color="#67D2FF" />
								<stop offset="0.44" stop-color="#00B4FF" />
								<stop offset="1" stop-color="#0099D9" />
							</linearGradient>
							<linearGradient id="paint1_linear_56_437" x1="31.0015" y1="5.9043" x2="31.0015" y2="56.0948" gradientUnits="userSpaceOnUse">
								<stop stop-color="#67D2FF" />
								<stop offset="0.44" stop-color="#00B4FF" />
								<stop offset="1" stop-color="#0099D9" />
							</linearGradient>
						</defs>
					</svg>
					<span>PRETURI SERVICII</span>
					<span class="title__bg">
						PRETURI SERVICII
					</span>
				</h2>
				<form action="#" class="service-prices__form">
					<div class="service-prices__items" data-aos="fade-right">
						<div 
							class="service-prices__item item-prices"
							v-for="prices in pricesAndServices"
							:key="prices.id"
						>
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								{{prices.title}}
							</h3>
							<ol v-if="prices.contentList!.length > 0">
								<li 
									v-for="content in prices.contentList"
									:key="content.id"
								>
									{{content.text}}
								</li>
							</ol>
							<div class="item-prices__prices">
								<div 
									class="checkbox"
									v-for="price in prices.services"
									:key="price.id"
									@click.stop="priceServiceClickHandler(price)"
								>
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="1" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											{{price.title}}
										</span>
									</label>
									<div class="item-prices__price">
										{{priceServiceToDisplay(price.price)}}
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<a :href="prices.exampleUrl" target="_blank" v-if="prices.exampleUrl" class="item-prices__btn btn">
									Exemple
								</a>
								<div class="item-prices__info" v-if="prices.comment">
									{{prices.comment}}
								</div>
							</div>
						</div>	
					</div>
					<div class="service-prices__total" data-aos="fade-left">
						<div class="service-prices__img">
							<picture><source srcset="~/assets/img/prices-image.webp" type="image/webp"><img src="~/assets/img/prices-image.png" alt="prices-image"></picture>
						</div>
						<h5 class="service-prices__total-title">
							Valoare totală:
						</h5>
						<div class="service-prices__total-price">
							{{totalServicesPrice}} lei
						</div>
						<button 
							class="service-prices__total-btn btn"
							@click.prevent="orderButtonClickHandler"
						>
							<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_124_479)">
									<path d="M24.9196 5.42125C24.8888 5.38276 24.8505 5.3509 24.8071 5.32757C24.7637 5.30424 24.716 5.28991 24.6669 5.28545L4.44805 3.45035C4.43672 3.17203 4.32632 2.89698 4.11431 2.68497L1.96152 0.532133C1.85507 0.425098 1.72845 0.340239 1.58898 0.282467C1.44952 0.224694 1.29998 0.195156 1.14902 0.195561C0.998074 0.195157 0.848543 0.224696 0.709086 0.282469C0.569628 0.340241 0.443014 0.4251 0.336572 0.532133C0.119531 0.749174 0 1.03775 0 1.34468C0 1.65162 0.119531 1.94014 0.336572 2.15718L2.48936 4.30992C2.5958 4.41696 2.72242 4.50182 2.86189 4.5596C3.00136 4.61737 3.1509 4.6469 3.30186 4.64649C3.41733 4.64649 3.53022 4.62955 3.6377 4.59688L6.69858 14.7325C6.94785 15.5579 7.69429 16.106 8.5438 16.106C8.59224 16.106 8.64066 16.1042 8.68897 16.1007L22.5314 15.0878C23.2572 15.0347 23.8523 14.4724 23.9465 13.7507L24.9969 5.69756C25.0033 5.64868 24.9997 5.599 24.9865 5.55152C24.9732 5.50404 24.9504 5.45973 24.9196 5.42125ZM3.59639 3.792C3.55779 3.8308 3.51188 3.86156 3.46131 3.8825C3.41075 3.90345 3.35654 3.91416 3.30181 3.91402C3.24708 3.91417 3.19286 3.90346 3.14229 3.88252C3.09173 3.86157 3.04582 3.83081 3.00723 3.792L0.854443 1.63921C0.815636 1.60063 0.784869 1.55473 0.763923 1.50417C0.742978 1.45362 0.732271 1.39941 0.732422 1.34468C0.732422 1.23345 0.775733 1.12876 0.854443 1.05005C0.933154 0.971391 1.03774 0.928031 1.14902 0.928031C1.2603 0.928031 1.36489 0.971391 1.4436 1.05005L3.59639 3.20284C3.75884 3.36529 3.75884 3.62959 3.59639 3.792ZM12.6111 4.92666L12.7762 7.60596L9.35283 7.48126L8.81265 4.58194L12.6111 4.92666ZM4.27383 4.16993L8.05483 4.51314L8.60274 7.45396L5.22842 7.33101L4.27383 4.16993ZM6.49976 11.5407L5.45225 8.07207L8.74024 8.19185L9.35234 11.4773L6.49976 11.5407ZM8.63545 15.3702C8.071 15.4113 7.56323 15.0621 7.39971 14.5207L6.71953 12.2684L9.48828 12.2069L10.0583 15.2661L8.63545 15.3702ZM9.49033 8.21919L12.8215 8.34053L13.0098 11.396L10.0943 11.4608L9.49033 8.21919ZM10.7932 15.2123L10.2302 12.1904L13.0548 12.1276L13.2339 15.0337L10.7932 15.2123ZM16.5547 14.7907L13.9645 14.9802L13.7877 12.1113L16.6277 12.0482L16.5547 14.7907ZM16.6472 11.3152L13.7426 11.3797L13.557 8.36734L16.7226 8.48262L16.6472 11.3152ZM16.7421 7.7504L13.5117 7.63272L13.349 4.99366L16.8071 5.30752L16.7421 7.7504ZM20.0778 14.5329L17.2888 14.737L17.3608 12.0319L20.2843 11.9669L20.0778 14.5329ZM20.3434 11.2331L17.3803 11.2989L17.4546 8.50928L20.5535 8.62217L20.3434 11.2331ZM20.6123 7.89141L17.4741 7.7771L17.538 5.37388L20.7911 5.66915L20.6123 7.89141ZM23.2202 13.656C23.1709 14.0345 22.8587 14.3294 22.478 14.3573L20.817 14.4789L21.0204 11.9506L23.4497 11.8966L23.2202 13.656ZM23.5456 11.1619L21.0795 11.2167L21.2861 8.64888L23.8611 8.74268L23.5456 11.1619ZM23.9563 8.01319L21.3449 7.91807L21.5205 5.73531L24.2214 5.98047L23.9563 8.01319ZM21.4773 21.7677V20.8901H22.2853C22.3824 20.8901 22.4756 20.8515 22.5443 20.7828C22.6129 20.7142 22.6515 20.621 22.6515 20.5239C22.6515 20.4268 22.6129 20.3336 22.5443 20.2649C22.4756 20.1963 22.3824 20.1577 22.2853 20.1577H7.0332C6.89067 20.1577 6.76387 20.0894 6.6854 19.9704C6.60693 19.8514 6.59409 19.708 6.65025 19.577L7.68467 17.1633C7.72256 17.0741 7.72355 16.9735 7.68741 16.8836C7.65127 16.7936 7.58095 16.7217 7.49187 16.6835C7.40279 16.6453 7.3022 16.644 7.21215 16.6799C7.12211 16.7157 7.04994 16.7858 7.01148 16.8748L5.97705 19.2884C5.90189 19.4631 5.87139 19.6538 5.8883 19.8432C5.90521 20.0327 5.96901 20.2149 6.07393 20.3736C6.1784 20.5325 6.32079 20.663 6.48826 20.7531C6.65573 20.8433 6.843 20.8904 7.0332 20.8901H7.43687V21.7677C6.76372 21.9325 6.26265 22.5406 6.26265 23.2638C6.26265 24.1132 6.95366 24.8043 7.80308 24.8043C8.65249 24.8043 9.34351 24.1132 9.34351 23.2638C9.34351 22.5406 8.84243 21.9325 8.16929 21.7677V20.8901H20.7449V21.7677C20.0717 21.9325 19.5707 22.5406 19.5707 23.2638C19.5707 24.1132 20.2617 24.8043 21.1111 24.8043C21.9605 24.8043 22.6515 24.1132 22.6515 23.2638C22.6515 22.5406 22.1504 21.9325 21.4773 21.7677ZM8.61108 23.2637C8.61108 23.7093 8.24863 24.0718 7.80308 24.0718C7.35752 24.0718 6.99507 23.7093 6.99507 23.2637C6.99507 22.8182 7.35752 22.4557 7.80308 22.4557C8.24863 22.4557 8.61108 22.8182 8.61108 23.2637ZM21.1111 24.0718C20.6655 24.0718 20.3031 23.7093 20.3031 23.2637C20.3031 22.8182 20.6655 22.4557 21.1111 22.4557C21.5566 22.4557 21.9191 22.8182 21.9191 23.2637C21.9191 23.7093 21.5566 24.0718 21.1111 24.0718Z" fill="white" />
								</g>
								<defs>
									<clipPath id="clip0_124_479">
										<rect width="25" height="25" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span>Cumpara</span>
						</button>
					</div>
				</form>
			</div>
		</section>
		<section class="gallery" id="gallery">
			<div class="gallery__container">
				<h2 class="gallery__title title">
					<span>GALERIE</span>
					<span class="title__bg">
						GALERIE
					</span>
				</h2>
				<div class="gallery__body" data-aos="zoom-in">
					<div class="gallery__slider swiper">
						<div class="gallery__wrapper swiper-wrapper">
							<div 
								class="gallery__slide swiper-slide"
								v-for="img in gallery"
								:key="img.id"
							>
								<div class="gallery__slide-img">
									<img :src="img.image" alt="image">
								</div>
							</div>
						</div>
						<div class="swiper-scrollbar"></div>
					</div>
					<div class="gallery__navigation">
						<button type="button" class="swiper-button-prev">
							<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.868 26.6064L17.868 21.6318L12.8934 16.6571L17.868 11.6825L17.868 6.70781L7.91872 16.6571L17.868 26.6064Z" fill="white" fill-opacity="0.85" />
								<path d="M26.1593 26.6064L26.1593 21.6318L21.1846 16.6571L26.1593 11.6825L26.1593 6.70781L16.21 16.6571L26.1593 26.6064Z" fill="white" fill-opacity="0.5" />
							</svg>
						</button>
						<button type="button" class="swiper-button-next">
							<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.6445 7.50146L16.6445 12.4761L21.6192 17.4508L16.6445 22.4254L16.6445 27.4001L26.5938 17.4508L16.6445 7.50146Z" fill="white" fill-opacity="0.85" />
								<path d="M8.35352 7.50146L8.35351 12.4761L13.3282 17.4508L8.35351 22.4254L8.35351 27.4001L18.3028 17.4508L8.35352 7.50146Z" fill="white" fill-opacity="0.5" />
							</svg>
						</button>
					</div>
				</div>
				<div class="icon-swipe">
					<picture><source srcset="~/assets/img/icon/swipe.webp" type="image/webp"><img src="~/assets/img/icon/swipe.png" alt="swipe icon"></picture>
				</div>
				<a :href="additionalInfo.portfolioUrl" v-if="additionalInfo?.portfolioUrl" class="gallery__link btn" target="_blank">
					Portofoliu
				</a>
			</div>
		</section>
		<section class="reviews" v-if="testimonials.length > 0">
			<div class="reviews__container">
				<h2 class="reviews__title title">
					<span>RECENZII</span>
					<span class="title__bg">
						RECENZII
					</span>
				</h2>
				<div class="reviews__body" >
					<div class="reviews__inner" data-aos="flip-left">
						<div class="reviews__slider swiper">
							<div class="reviews__wrapper swiper-wrapper">
								<div 
									class="reviews__slide swiper-slide"
									v-for="testimonial in testimonials"
									:key="testimonial.id"
								>
									<div class="reviews__slide-head">
										<div class="reviews__slide-icon">
											{{Array.from(testimonial.clientName)[0]}}
										</div>
										<div class="reviews__slide-info">
											<div class="reviews__slide-name">
												{{testimonial.clientName}}
											</div>
											<div class="reviews__slide-owner">
												{{testimonial.jobTitle}}
											</div>
										</div>
									</div>
									<div class="reviews__slide-text">
										{{testimonial.testimonial}}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-scrollbar"></div>
					<div class="reviews__navigation">
						<button type="button" class="swiper-button-prev">
							<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.868 26.6064L17.868 21.6318L12.8934 16.6571L17.868 11.6825L17.868 6.70781L7.91872 16.6571L17.868 26.6064Z" fill="white" fill-opacity="0.85" />
								<path d="M26.1593 26.6064L26.1593 21.6318L21.1846 16.6571L26.1593 11.6825L26.1593 6.70781L16.21 16.6571L26.1593 26.6064Z" fill="white" fill-opacity="0.5" />
							</svg>
						</button>
						<button type="button" class="swiper-button-next">
							<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.6445 7.50146L16.6445 12.4761L21.6192 17.4508L16.6445 22.4254L16.6445 27.4001L26.5938 17.4508L16.6445 7.50146Z" fill="white" fill-opacity="0.85" />
								<path d="M8.35352 7.50146L8.35351 12.4761L13.3282 17.4508L8.35351 22.4254L8.35351 27.4001L18.3028 17.4508L8.35352 7.50146Z" fill="white" fill-opacity="0.5" />
							</svg>
						</button>
					</div>
				</div>
				<div class="icon-swipe">
					<picture><source srcset="~/assets/img/icon/swipe.webp" type="image/webp"><img src="~/assets/img/icon/swipe.png" alt="swipe icon"></picture>
				</div>
			</div>
		</section>
		<section class="contacts" id="contacts" data-aos="slide-up">
			<MainContactsSection />
		</section>
	</main>
</template>

<style scoped>
.order-dialog {
	max-width: 1000px;
}
</style>