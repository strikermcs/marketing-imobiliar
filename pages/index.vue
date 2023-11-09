<script setup lang="ts">
const landing = useLandingStore() 
const {width} = useWindowSize()

const { promo, services } = storeToRefs(landing)

</script>

<template>
	<main class="page">
		<section class="promo">	
			<ClientOnly>
				<UISocialsIconsBlock v-if="width > 992"/>	
			</ClientOnly>		
			<div class="promo__container">
				<div class="promo__body">
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
					<a href="#" class="promo__link btn">
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
					<div class="about__img">
						<img src="~/assets/img/about-image.svg" alt="about-image">
					</div>
					<div class="about__content">
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
							v-for="service in services"
							:key="service.id"
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
					<article class="advantages__item">
						<div class="advantages__item-img">
							<picture><source srcset="img/advantages/image-1.webp" type="image/webp"><img src="img/advantages/image-1.png" alt="image-1"></picture>
						</div>
						<h4 class="advantages__item-title">
							Maximizarea expunerii
						</h4>
						<div class="advantages__item-text">
							<p>
								Prin intermediul marketingului imobiliar, proprietatea
								dvs. poate fi prezentată pe mai multe platforme și canale, cum ar fi site-uri web,
								rețele sociale, site-uri imobiliare, ceea ce crește expunerea acesteia către un
								public
								mai larg de cumpărători sau chiriași potențiali.
							</p>
						</div>
					</article>
					<article class="advantages__item">
						<div class="advantages__item-img">
							<picture><source srcset="img/advantages/image-2.webp" type="image/webp"><img src="img/advantages/image-2.png" alt="image-2"></picture>
						</div>
						<h4 class="advantages__item-title">
							Atrage mai mulți potențiali cumpărători sau chiriași
						</h4>
						<div class="advantages__item-text">
							<p>
								Cu ajutorul unor strategii
								de marketing atent concepute, puteți atrage un număr mai mare de persoane
								interesate de proprietatea dvs., ceea ce poate duce la creșterea șanselor de a găsi
								un cumpărător sau chiriaș potrivit.
							</p>
						</div>
					</article>
					<article class="advantages__item">
						<div class="advantages__item-img">
							<picture><source srcset="img/advantages/image-3.webp" type="image/webp"><img src="img/advantages/image-3.png" alt="image-3"></picture>
						</div>
						<h4 class="advantages__item-title">
							Prezentarea profesionistă
						</h4>
						<div class="advantages__item-text">
							<p>
								Fotografiile de calitate, videoclipurile
								și tururile
								virtuale pot prezenta proprietatea în cel mai bun mod posibil, evidențiind
								caracteristicile sale cheie și punând în valoare aspectele atractive ale acesteia.
							</p>
						</div>
					</article>
					<article class="advantages__item">
						<div class="advantages__item-img">
							<picture><source srcset="img/advantages/image-4.webp" type="image/webp"><img src="img/advantages/image-4.png" alt="image-4"></picture>
						</div>
						<h4 class="advantages__item-title">
							Stabilirea unui preț corect
						</h4>
						<div class="advantages__item-text">
							<p>
								Prin efectuarea unei analize comparative de piață,
								puteți stabili un preț adecvat pentru proprietatea dumneavoastra, ceea ce va face ca
								oferta să fie mai atractivă pentru potențialii cumpărători. Un cost excesiv
								determină o
								perioadă prelungită petrecută în piață, ceea ce duce la perimarea ofertei și la
								lipsa
								de interes din partea clienților, deoarece produsul este disponibil de mult timp și
								nu
								mai atrage atenția. Dacă o proprietate este vândută sub valoarea sa de piață, nu
								veți
								obține profitul maxim posibil.
							</p>
						</div>
					</article>
					<article class="advantages__item">
						<div class="advantages__item-img">
							<picture><source srcset="img/advantages/image-5.webp" type="image/webp"><img src="img/advantages/image-5.png" alt="image-5"></picture>
						</div>
						<h4 class="advantages__item-title">
							Diferențierea de concurență
						</h4>
						<div class="advantages__item-text">
							<p>
								Marketingul imobiliar vă permite să vă
								diferențiați
								de alte proprietăți aflate la vânzare în aceeași zonă. Cu un pachet de marketing
								bine
								pus la punct, puteți face ca proprietatea dvs. să se evidențieze si sa se
								pozitioneze
								in topul preferintelor potentialilor cumparatori sau chiriasi.
							</p>
						</div>
					</article>
					<article class="advantages__item">
						<div class="advantages__item-img">
							<picture><source srcset="img/advantages/image-6.webp" type="image/webp"><img src="img/advantages/image-6.png" alt="image-6"></picture>
						</div>
						<h4 class="advantages__item-title">
							Economisirea timpului
						</h4>
						<div class="advantages__item-text">
							<p>
								Cu ajutorul serviciilor de marketing, puteți reduce
								necesitatea organizării repetate a vizionărilor și a întâlnirilor cu potențialii
								cumpărători sau chiriași, deoarece aceștia pot avea o idee mai clară despre
								proprietatea dvs. înainte de a o viziona.
							</p>
						</div>
					</article>
					<article class="advantages__item">
						<div class="advantages__item-img">
							<picture><source srcset="img/advantages/image-7.webp" type="image/webp"><img src="img/advantages/image-7.png" alt="image-7"></picture>
						</div>
						<h4 class="advantages__item-title">
							Eficiența costurilor
						</h4>
						<div class="advantages__item-text">
							<p>
								Cheltuielile cu marketingul pot fi eficiente în comparație cu
								costurile suplimentare legate de întârzierea vânzării sau de necesitatea de a reduce
								prețul pentru a atrage cumpărători.
							</p>
						</div>
					</article>
					<article class="advantages__item">
						<div class="advantages__item-img">
							<picture><source srcset="img/advantages/image-8.webp" type="image/webp"><img src="img/advantages/image-8.png" alt="image-8"></picture>
						</div>
						<h4 class="advantages__item-title">
							Negociere mai puternică
						</h4>
						<div class="advantages__item-text">
							<p>
								Atunci când aveți mai mulți cumpărători sau chiriași
								interesați, puteți negocia un preț mai bun sau condiții mai favorabile pentru dvs.
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
					<details class="spollers__item">
						<summary class="spollers__title">
							<span class="spollers__counter"></span>
							Diferențierea de concurență?
						</summary>
						<div class="spollers__body">
							Prin intermediul marketingului imobiliar, proprietatea
							dvs. poate fi prezentată pe mai multe platforme și canale, cum ar fi site-uri web,
							rețele sociale, site-uri imobiliare, ceea ce crește expunerea acesteia către un public
							mai larg de cumpărători sau chiriași potențiali.
						</div>
					</details>
					<details class="spollers__item">
						<summary class="spollers__title">
							<span class="spollers__counter"></span>
							Atrage mai mulți potențiali cumpărători sau chiriași?
						</summary>
						<div class="spollers__body">
							Prin intermediul marketingului imobiliar, proprietatea
							dvs. poate fi prezentată pe mai multe platforme și canale, cum ar fi site-uri web,
							rețele sociale, site-uri imobiliare, ceea ce crește expunerea acesteia către un public
							mai larg de cumpărători sau chiriași potențiali.
						</div>
					</details>
					<details class="spollers__item">
						<summary class="spollers__title">
							<span class="spollers__counter"></span>
							Eficiența costurilor?
						</summary>
						<div class="spollers__body">
							Prin intermediul marketingului imobiliar, proprietatea
							dvs. poate fi prezentată pe mai multe platforme și canale, cum ar fi site-uri web,
							rețele sociale, site-uri imobiliare, ceea ce crește expunerea acesteia către un public
							mai larg de cumpărători sau chiriași potențiali.
						</div>
					</details>
					<details class="spollers__item">
						<summary class="spollers__title">
							<span class="spollers__counter"></span>
							Maximizarea expunerii?
						</summary>
						<div class="spollers__body">
							Prin intermediul marketingului imobiliar, proprietatea
							dvs. poate fi prezentată pe mai multe platforme și canale, cum ar fi site-uri web,
							rețele sociale, site-uri imobiliare, ceea ce crește expunerea acesteia către un public
							mai larg de cumpărători sau chiriași potențiali.
						</div>
					</details>
					<details class="spollers__item">
						<summary class="spollers__title">
							<span class="spollers__counter"></span>
							Stabilirea unui preț corect?
						</summary>
						<div class="spollers__body">
							Prin intermediul marketingului imobiliar, proprietatea
							dvs. poate fi prezentată pe mai multe platforme și canale, cum ar fi site-uri web,
							rețele sociale, site-uri imobiliare, ceea ce crește expunerea acesteia către un public
							mai larg de cumpărători sau chiriași potențiali.
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
					<div class="service-prices__items">
						<div class="service-prices__item item-prices">
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								Pachet vanzare rapida
							</h3>
							<ol>
								<li>
									Prețul și analiza de piață
								</li>
								<li>
									Fotografii profesionale
								</li>
								<li>
									Text de marketing
								</li>
								<li>
									Publicarea pe site-uri imobiliare
								</li>
								<li>
									Distribuirea pe Rețele sociale
								</li>
							</ol>
							<div class="item-prices__prices">
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="1" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Pachet vanzare rapida apartament
										</span>
									</label>
									<div class="item-prices__price">
										Pret 1000 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="2" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Pachet vanzare rapida casa/vila
										</span>
									</label>
									<div class="item-prices__price">
										Pret 1500 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="3" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Pachet vanzare rapida spațiu comercial
										</span>
									</label>
									<div class="item-prices__price">
										Preț la cerere
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<button type="button" class="item-prices__btn btn">
									Exemple
								</button>
							</div>
						</div>
						<div class="service-prices__item item-prices">
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								Video
							</h3>
							<div class="item-prices__prices">
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="4" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Apartament
										</span>
									</label>
									<div class="item-prices__price">
										Pret 250 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="5" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Casa/vila
										</span>
									</label>
									<div class="item-prices__price">
										Pret 350 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="6" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Spațiu comercial
										</span>
									</label>
									<div class="item-prices__price">
										Preț la cerere
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<button type="button" class="item-prices__btn btn" disabled>
									Exemple
								</button>
							</div>
						</div>
						<div class="service-prices__item item-prices">
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								Tur virtual 360*
							</h3>
							<div class="item-prices__prices">
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="7" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Apartament
										</span>
									</label>
									<div class="item-prices__price">
										Pret 250 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="8" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Casa/vila
										</span>
									</label>
									<div class="item-prices__price">
										Pret 350 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="9" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Spațiu comercial
										</span>
									</label>
									<div class="item-prices__price">
										Preț la cerere
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<button type="button" class="item-prices__btn btn" disabled>
									Exemple
								</button>
							</div>
						</div>
						<div class="service-prices__item item-prices">
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								Drona
							</h3>
							<div class="item-prices__prices">
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="10" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Apartament
										</span>
									</label>
									<div class="item-prices__price">
										Pret 250 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="11" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Casa/vila
										</span>
									</label>
									<div class="item-prices__price">
										Pret 350 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="12" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Spațiu comercial
										</span>
									</label>
									<div class="item-prices__price">
										Preț la cerere
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<button type="button" class="item-prices__btn btn" disabled>
									Exemple
								</button>
							</div>
						</div>
						<div class="service-prices__item item-prices">
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								Distribuirea proprietății către agenți și
								agenții imobiliare
							</h3>
							<div class="item-prices__prices">
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="13" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Apartament
										</span>
									</label>
									<div class="item-prices__price">
										Gratuit
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="14" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Casa/vila
										</span>
									</label>
									<div class="item-prices__price">
										Gratuit
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="15" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Spațiu comercial
										</span>
									</label>
									<div class="item-prices__price">
										Gratuit
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<button type="button" class="item-prices__btn btn" disabled>
									Exemple
								</button>
								<div class="item-prices__info">
									Serviciile gratuite se pot achizitiona doar impreuna cu un serviciu platit,
								</div>
							</div>
						</div>
						<div class="service-prices__item item-prices">
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								Semn de vanzare / inchiriere
							</h3>
							<div class="item-prices__prices">
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="16" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Apartament
										</span>
									</label>
									<div class="item-prices__price">
										Preț la cerere
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="17" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Casa/vila
										</span>
									</label>
									<div class="item-prices__price">
										Preț la cerere
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="18" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Spațiu comercial
										</span>
									</label>
									<div class="item-prices__price">
										Preț la cerere
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<button type="button" class="item-prices__btn btn" disabled>
									Exemple
								</button>
							</div>
						</div>
						<div class="service-prices__item item-prices">
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								Site unic de prezentare a proprietatii
							</h3>
							<div class="item-prices__prices">
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="19" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Apartament
										</span>
									</label>
									<div class="item-prices__price">
										Pret 200 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="20" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Casa/vila
										</span>
									</label>
									<div class="item-prices__price">
										Pret 200 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="21" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Spațiu comercial
										</span>
									</label>
									<div class="item-prices__price">
										Pret 200 lei
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<button type="button" class="item-prices__btn btn" disabled>
									Exemple
								</button>
							</div>
						</div>
						<div class="service-prices__item item-prices">
							<h3 class="item-prices__title">
								<span class="item-prices__counter"></span>
								Call center - preluare apelurilor de la
								cumparatori sau chiriasi si
								furnizare de informatii
								despre proprietate
							</h3>
							<div class="item-prices__prices">
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="22" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Apartament
										</span>
									</label>
									<div class="item-prices__price">
										Pret 200 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="23" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Casa/vila
										</span>
									</label>
									<div class="item-prices__price">
										Pret 200 lei
									</div>
								</div>
								<div class="checkbox">
									<label class="checkbox__label">
										<input class="checkbox__input" type="checkbox" value="24" name="form[]">
										<div class="fake-checkbox"></div>
										<span class="checkbox__text">
											Spațiu comercial
										</span>
									</label>
									<div class="item-prices__price">
										Pret 200 lei
									</div>
								</div>
							</div>
							<div class="item-prices__bottom">
								<button type="button" class="item-prices__btn btn" disabled>
									Exemple
								</button>
							</div>
						</div>
					</div>
					<div class="service-prices__total">
						<div class="service-prices__img">
							<picture><source srcset="img/prices-image.webp" type="image/webp"><img src="img/prices-image.png" alt="prices-image"></picture>
						</div>
						<h5 class="service-prices__total-title">
							Valoare totală:
						</h5>
						<div class="service-prices__total-price">
							1350 lei
						</div>
						<button type="submit" class="service-prices__total-btn btn">
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
				<div class="gallery__body">
					<div class="gallery__slider swiper">
						<div class="gallery__wrapper swiper-wrapper">
							<div class="gallery__slide swiper-slide">
								<a href="#" class="gallery__slide-img">
									<picture><source srcset="img/gallery/image-1.webp" type="image/webp"><img src="img/gallery/image-1.jpg" alt="image-1"></picture>
								</a>
							</div>
							<div class="gallery__slide swiper-slide">
								<a href="#" class="gallery__slide-img">
									<picture><source srcset="img/gallery/image-2.webp" type="image/webp"><img src="img/gallery/image-2.jpg" alt="image-2"></picture>
								</a>
							</div>
							<div class="gallery__slide swiper-slide">
								<a href="#" class="gallery__slide-img">
									<picture><source srcset="img/gallery/image-3.webp" type="image/webp"><img src="img/gallery/image-3.jpg" alt="image-3"></picture>
								</a>
							</div>
							<div class="gallery__slide swiper-slide">
								<a href="#" class="gallery__slide-img">
									<picture><source srcset="img/gallery/image-1.webp" type="image/webp"><img src="img/gallery/image-1.jpg" alt="image-1"></picture>
								</a>
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
					<picture><source srcset="img/icon/swipe.webp" type="image/webp"><img src="img/icon/swipe.png" alt="swipe icon"></picture>
				</div>
				<a href="#" class="gallery__link btn">
					Portofoliu
				</a>
			</div>
		</section>
		<section class="reviews">
			<div class="reviews__container">
				<h2 class="reviews__title title">
					<span>RECENZII</span>
					<span class="title__bg">
						RECENZII
					</span>
				</h2>
				<div class="reviews__body">
					<div class="reviews__inner">
						<div class="reviews__slider swiper">
							<div class="reviews__wrapper swiper-wrapper">
								<div class="reviews__slide swiper-slide">
									<div class="reviews__slide-head">
										<div class="reviews__slide-icon">
											C
										</div>
										<div class="reviews__slide-info">
											<div class="reviews__slide-name">
												Cristi Feres
											</div>
											<div class="reviews__slide-owner">
												Proprietar
											</div>
										</div>
									</div>
									<div class="reviews__slide-text">
										Am colaborat cu MARKETING IMOBILIAR pentru vânzarea proprietății mele și am
										fost
										extrem de mulțumit de serviciile oferite. Echipa a fost mereu disponibilă să
										răspundă la întrebări și să ofere clarificări ori de câte ori a fost
										necesar.
										Grație strategiilor lor de marketing, am reușit să vând proprietatea într-un
										timp mult mai scurt decât mă așteptam! Recomand cu căldură echipa de la
										MARKETING IMOBILIAR oricui caută servicii profesionale de marketing
										imobiliar.
										Echipa lor dedicată și abordarea inovatoare în promovare m-au convins că am
										făcut alegerea corectă!
									</div>
								</div>
								<div class="reviews__slide swiper-slide">
									<div class="reviews__slide-head">
										<div class="reviews__slide-icon">
											F
										</div>
										<div class="reviews__slide-info">
											<div class="reviews__slide-name">
												Feres Cristi
											</div>
											<div class="reviews__slide-owner">
												Proprietar
											</div>
										</div>
									</div>
									<div class="reviews__slide-text">
										Am colaborat cu MARKETING IMOBILIAR pentru vânzarea proprietății mele și am
										fost
										extrem de mulțumit de serviciile oferite. Echipa a fost mereu disponibilă să
										răspundă la întrebări și să ofere Recomand am reușicu căldură echipa de la
										MARKETING IMOBILIAR oricui caută servicii profesionale de marketing
										imobiliar.
										Echipa lor dedicată și abordarea inovatoare în promovare m-au convins că am
										făcut alegerea corectă!
									</div>
								</div>
								<div class="reviews__slide swiper-slide">
									<div class="reviews__slide-head">
										<div class="reviews__slide-icon">
											C
										</div>
										<div class="reviews__slide-info">
											<div class="reviews__slide-name">
												Cristi Feres
											</div>
											<div class="reviews__slide-owner">
												Proprietar
											</div>
										</div>
									</div>
									<div class="reviews__slide-text">
										Am colaborat cu MARKETING IMOBILIAR pentru vânzarea proprietății mele și am
										fost
										extrem de mulțumit de serviciile oferite. Echipa a fost mereu disponibilă să
										răspundă la întrebări și să ofere clarificări ori de câte ori a fost
										necesar.
										Grație strategiilor lor de marketing, am reușit să vând proprietatea într-un
										timp mult mai scurt decât mă așteptam!
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
					<picture><source srcset="img/icon/swipe.webp" type="image/webp"><img src="img/icon/swipe.png" alt="swipe icon"></picture>
				</div>
			</div>
		</section>
		<section class="contacts" id="contacts">
			<div class="contacts__container">
				<div class="contacts__body">
					<h2 class="contacts__title title">
						Contactați-ne
					</h2>
					<div data-tabs class="contacts-tabs">
						<nav data-tabs-titles class="contacts-tabs__navigation">
							<button type="button" class="contacts-tabs__title _tab-active">
								<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="16.5" cy="16.5" r="16.5" fill="url(#paint0_linear_56_385)" />
									<path d="M7.66248 25.483L8.36248 23.3976C8.59581 22.7268 8.78539 22.0413 9.04789 21.3851C9.11956 21.2452 9.15694 21.0902 9.15694 20.933C9.15694 20.7758 9.11956 20.6208 9.04789 20.4809C8.21875 18.9502 7.88037 17.2015 8.07863 15.4719C8.27689 13.7424 9.0022 12.1156 10.1562 10.8122C10.994 9.85713 12.0396 9.10683 13.2126 8.61891C14.3857 8.131 15.6549 7.91845 16.9229 7.99759C18.8447 8.06101 20.6829 8.79935 22.1146 10.083C23.4685 11.2614 24.4132 12.8393 24.8125 14.5893C25.1459 16.0044 25.1057 17.4819 24.6958 18.8768C24.1946 20.6296 23.1282 22.1677 21.6625 23.2518C20.692 24.0076 19.5664 24.5394 18.3664 24.8092C17.1663 25.0789 15.9213 25.08 14.7208 24.8122C13.9613 24.6594 13.2289 24.394 12.5479 24.0247C12.4954 24 12.4382 23.9872 12.3802 23.9872C12.3222 23.9872 12.2649 24 12.2125 24.0247L8.30414 25.2497L7.66248 25.483ZM9.87914 23.2809H10.0104L12.4604 22.508C12.5455 22.4791 12.6378 22.4791 12.7229 22.508C13.0729 22.683 13.4083 22.9018 13.7729 23.0476C15.2259 23.6857 16.8566 23.7941 18.3812 23.3538C19.278 23.1143 20.1179 22.6981 20.8516 22.1296C21.5854 21.5612 22.1982 20.8519 22.6541 20.0434C23.559 18.4684 23.8259 16.6064 23.4001 14.8406C22.9742 13.0747 21.8879 11.5391 20.3646 10.5497C18.9853 9.65487 17.3378 9.2674 15.7043 9.45363C14.0708 9.63987 12.5529 10.3882 11.4104 11.5705C10.4752 12.5255 9.83695 13.7311 9.57289 15.0413C9.36533 15.9396 9.34233 16.8707 9.50527 17.7782C9.66821 18.6856 10.0137 19.5505 10.5208 20.3205C10.6031 20.4569 10.6466 20.6133 10.6466 20.7726C10.6466 20.9319 10.6031 21.0883 10.5208 21.2247C10.3312 21.8663 10.1271 22.5663 9.87914 23.2809Z" fill="white" />
									<path d="M20.875 18.9647C20.8661 19.2751 20.7697 19.5768 20.5968 19.8348C20.4239 20.0928 20.1817 20.2967 19.8979 20.423C19.6034 20.584 19.2774 20.6791 18.9425 20.7017C18.6077 20.7244 18.2719 20.6741 17.9583 20.5543C17.3579 20.3365 16.7689 20.0883 16.1937 19.8105C15.4507 19.4169 14.7879 18.8876 14.2396 18.2501C13.6175 17.5659 13.0835 16.8065 12.65 15.9897C12.3248 15.4236 12.1727 14.7746 12.2125 14.123C12.2425 13.7866 12.3438 13.4603 12.5098 13.1661C12.6758 12.8719 12.9025 12.6165 13.175 12.4168C13.3006 12.3317 13.4465 12.2814 13.5979 12.2709C13.7823 12.256 13.9677 12.256 14.1521 12.2709C14.2195 12.2795 14.283 12.3075 14.3348 12.3515C14.3866 12.3955 14.4245 12.4537 14.4437 12.5189C14.5896 12.8543 14.7062 13.1897 14.8375 13.5397C14.9687 13.8897 14.9979 14.0064 15.1 14.2251C15.1897 14.3456 15.2332 14.4944 15.2225 14.6443C15.2118 14.7942 15.1476 14.9352 15.0417 15.0418C14.9013 15.2252 14.7451 15.396 14.575 15.5522C14.5128 15.6012 14.4709 15.6716 14.4574 15.7497C14.444 15.8277 14.4599 15.908 14.5021 15.9751C14.8969 16.6922 15.421 17.33 16.0479 17.8564C16.4973 18.1934 16.9872 18.4727 17.5062 18.6876C17.56 18.7368 17.6302 18.7641 17.7031 18.7641C17.776 18.7641 17.8462 18.7368 17.9 18.6876L18.6292 17.8564C18.7896 17.6814 18.8625 17.6376 19.0667 17.7397L20.8604 18.673C20.8847 18.7174 20.8986 18.7667 20.9011 18.8172C20.9036 18.8677 20.8947 18.9181 20.875 18.9647Z" fill="white" />
									<defs>
										<linearGradient id="paint0_linear_56_385" x1="16.5" y1="0" x2="16.5" y2="33" gradientUnits="userSpaceOnUse">
											<stop stop-color="#1EEA6A" />
											<stop offset="1" stop-color="#00CD4C" />
										</linearGradient>
									</defs>
								</svg>
								<span>What’s app</span>
							</button>
							<button type="button" class="contacts-tabs__title">
								<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_56_401)">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 25.6127 7.3873 33 16.5 33Z" fill="url(#paint0_linear_56_401)" />
										<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 11.9911V21.3343C8.25 21.8426 8.62205 22.2546 9.13461 22.2546H23.7164C24.2284 22.2546 24.601 21.8378 24.601 21.3343V11.9911C24.601 11.4333 24.2678 11 23.7164 11H9.13461C8.5619 11 8.25 11.4439 8.25 11.9911ZM9.59448 12.8049C9.59448 12.5797 9.73074 12.4509 9.94844 12.4509C10.0831 12.4509 15.3817 15.8084 15.7027 16.0054L16.5319 16.5211C16.7949 16.3449 17.0589 16.1943 17.3314 16.0117C17.8876 15.6562 22.8365 12.4509 22.9728 12.4509C23.191 12.4509 23.3267 12.5797 23.3267 12.8049C23.3267 13.0433 22.8674 13.2802 22.5683 13.4628C20.6889 14.6082 18.81 15.8569 16.9492 17.0449C16.8406 17.1183 16.6304 17.2753 16.4729 17.2514C16.2972 17.2242 10.9054 13.7603 9.92448 13.1833C9.77705 13.0966 9.59448 13.0173 9.59448 12.8049Z" fill="white" />
									</g>
									<defs>
										<linearGradient id="paint0_linear_56_401" x1="16.5" y1="0" x2="16.5" y2="33" gradientUnits="userSpaceOnUse">
											<stop stop-color="#67D2FF" />
											<stop offset="0.44" stop-color="#00B4FF" />
											<stop offset="1" stop-color="#0099D9" />
										</linearGradient>
										<clipPath id="clip0_56_401">
											<rect width="33" height="33" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<span>Email</span>
							</button>
							<button type="button" class="contacts-tabs__title">
								<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_56_407)">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0C7.3873 0 0 7.3873 0 16.5C0 25.6127 7.3873 33 16.5 33Z" fill="url(#paint0_linear_56_407)" />
										<g clip-path="url(#clip1_56_407)">
											<mask id="mask0_56_407" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="9" width="15" height="15">
												<path d="M24.0012 9.00049H10.0012V23.0005H24.0012V9.00049Z" fill="white" />
											</mask>
											<g mask="url(#mask0_56_407)">
												<path d="M23.938 20.1589L23.8683 19.9489C23.7033 19.4584 23.1623 18.9468 22.6653 18.812L20.8261 18.3095C20.3273 18.1738 19.6158 18.3563 19.2508 18.7212L18.5851 19.3869C16.1659 18.7331 14.2689 16.836 13.6161 14.4173L14.2818 13.7516C14.6467 13.3867 14.8292 12.6761 14.6935 12.1773L14.1919 10.3371C14.0562 9.83923 13.5436 9.29828 13.054 9.13505L12.8441 9.06446C12.3535 8.90124 11.6539 9.06631 11.289 9.43122L10.2933 10.4279C10.1154 10.6048 10.0017 11.111 10.0017 11.1128C9.96686 14.2743 11.2065 17.3202 13.4428 19.5565C15.6736 21.7872 18.708 23.0251 21.8603 22.9985C21.8768 22.9985 22.3976 22.8866 22.5755 22.7096L23.5712 21.7139C23.9362 21.349 24.1012 20.6494 23.938 20.1589Z" fill="white" />
											</g>
										</g>
									</g>
									<defs>
										<linearGradient id="paint0_linear_56_407" x1="16.5" y1="0" x2="16.5" y2="33" gradientUnits="userSpaceOnUse">
											<stop stop-color="#FFE69D" />
											<stop offset="0.480076" stop-color="#FFD14C" />
											<stop offset="1" stop-color="#FFBE01" />
										</linearGradient>
										<clipPath id="clip0_56_407">
											<rect width="33" height="33" fill="white" />
										</clipPath>
										<clipPath id="clip1_56_407">
											<rect width="14" height="14" fill="white" transform="translate(10 9)" />
										</clipPath>
									</defs>
								</svg>
								<span>Phone</span>
							</button>
						</nav>
						<div data-tabs-body class="contacts-tabs__content">
							<div class="contacts-tabs__body">
								<form class="contacts-form">
									<label class="contacts-form__input-block">
										<span class="contacts-form__icon">
											<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.15625 8.42188C5.15625 11.6359 7.78594 14.2656 11 14.2656C14.2141 14.2656 16.8438 11.6359 16.8438 8.42188C16.8438 5.20781 14.2141 2.57812 11 2.57812C7.78594 2.57812 5.15625 5.20781 5.15625 8.42188ZM15.4688 8.42188C15.4688 10.8797 13.4578 12.8906 11 12.8906C8.54219 12.8906 6.53125 10.8797 6.53125 8.42188C6.53125 5.96406 8.54219 3.95312 11 3.95312C13.4578 3.95312 15.4688 5.96406 15.4688 8.42188Z" fill="#282828" />
												<path d="M4.1938 20.5219C6.01567 18.7 8.42192 17.7031 11 17.7031C13.5782 17.7031 15.9844 18.7 17.8063 20.5219L18.786 19.5422C16.7063 17.4797 13.9391 16.3281 11 16.3281C8.06099 16.3281 5.2938 17.4797 3.21411 19.5422L4.1938 20.5219Z" fill="#282828" />
											</svg>
										</span>
										<input autocomplete="off" type="text" name="form[]" placeholder="Numele dumneavoastră" class="contacts-form__input">
									</label>
									<label class="contacts-form__input-block">
										<span class="contacts-form__icon">
											<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.14996 3.74984V5.42199C2.14996 12.2887 7.71655 17.8553 14.5833 17.8553H16.25C17.1336 17.8553 17.85 17.139 17.85 16.2553V14.1178C17.85 13.4291 17.4093 12.8177 16.7559 12.5999L14.1032 11.7156C13.4187 11.4875 12.6662 11.7457 12.266 12.346L11.6585 13.2572C11.4334 13.5949 11.0101 13.7401 10.625 13.6118L9.35388 13.1881C8.16134 12.7906 7.24636 11.8234 6.91561 10.6106L6.39306 8.69459C6.26738 8.23376 6.5236 7.75502 6.97675 7.60397L7.47888 7.43659C8.16759 7.20702 8.58693 6.51053 8.46758 5.79444L8.08298 3.4868C7.95439 2.7153 7.28689 2.14984 6.50475 2.14984H3.74996C2.8663 2.14984 2.14996 2.86618 2.14996 3.74984ZM2.01663 3.74984C2.01663 2.79254 2.79267 2.0165 3.74996 2.0165H6.50475C7.35207 2.0165 8.0752 2.62909 8.2145 3.46488L8.5991 5.77252C8.72924 6.55333 8.27199 7.31277 7.52104 7.56308L7.01891 7.73046C6.63289 7.85913 6.41464 8.26695 6.5217 8.65951L7.04425 10.5755C7.36327 11.7453 8.24579 12.6782 9.39604 13.0616L10.6672 13.4853C10.9952 13.5946 11.3558 13.4709 11.5476 13.1833L12.155 12.2721C12.5886 11.6217 13.4038 11.342 14.1454 11.5891L16.7981 12.4734C17.5059 12.7093 17.9833 13.3717 17.9833 14.1178V16.2553C17.9833 17.2126 17.2073 17.9887 16.25 17.9887H14.5833C7.64291 17.9887 2.01663 12.3624 2.01663 5.42199V3.74984Z" fill="#282828" stroke="#282828" stroke-width="0.7" />
											</svg>
										</span>
										<input autocomplete="off" type="text" name="form[]" placeholder="+40-xx-xxx-xxxx" class="contacts-form__input">
									</label>
									<button type="submit" class="contacts-form__button btn">
										Contactați-ne
									</button>
								</form>
							</div>
							<div class="contacts-tabs__body">
								<form class="contacts-form">
									<label class="contacts-form__input-block">
										<span class="contacts-form__icon">
											<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.15625 8.42188C5.15625 11.6359 7.78594 14.2656 11 14.2656C14.2141 14.2656 16.8438 11.6359 16.8438 8.42188C16.8438 5.20781 14.2141 2.57812 11 2.57812C7.78594 2.57812 5.15625 5.20781 5.15625 8.42188ZM15.4688 8.42188C15.4688 10.8797 13.4578 12.8906 11 12.8906C8.54219 12.8906 6.53125 10.8797 6.53125 8.42188C6.53125 5.96406 8.54219 3.95312 11 3.95312C13.4578 3.95312 15.4688 5.96406 15.4688 8.42188Z" fill="#282828" />
												<path d="M4.1938 20.5219C6.01567 18.7 8.42192 17.7031 11 17.7031C13.5782 17.7031 15.9844 18.7 17.8063 20.5219L18.786 19.5422C16.7063 17.4797 13.9391 16.3281 11 16.3281C8.06099 16.3281 5.2938 17.4797 3.21411 19.5422L4.1938 20.5219Z" fill="#282828" />
											</svg>
										</span>
										<input autocomplete="off" type="text" name="form[]" placeholder="Numele dumneavoastră" class="contacts-form__input">
									</label>
									<label class="contacts-form__input-block">
										<span class="contacts-form__icon">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.615 19C4.155 19 3.771 18.846 3.463 18.538C3.15433 18.2293 3 17.845 3 17.385V6.615C3 6.155 3.15433 5.771 3.463 5.463C3.771 5.15433 4.155 5 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.8457 5.771 21 6.155 21 6.615V17.385C21 17.845 20.846 18.229 20.538 18.537C20.2293 18.8457 19.845 19 19.385 19H4.615ZM12 12.115L4 6.885V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.43567 18 4.615 18H19.385C19.5643 18 19.7117 17.9423 19.827 17.827C19.9423 17.7117 20 17.5643 20 17.385V6.885L12 12.115ZM12 11L19.692 6H4.308L12 11ZM4 6.885V6V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.43567 18 4.615 18H4V6.885Z" fill="black" />
											</svg>
										</span>
										<input autocomplete="off" type="text" name="form[]" placeholder="xxx@xxxx.com" class="contacts-form__input">
									</label>
									<button type="submit" class="contacts-form__button btn">
										Contactați-ne
									</button>
								</form>
							</div>
							<div class="contacts-tabs__body">
								<form class="contacts-form">
									<label class="contacts-form__input-block">
										<span class="contacts-form__icon">
											<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M5.15625 8.42188C5.15625 11.6359 7.78594 14.2656 11 14.2656C14.2141 14.2656 16.8438 11.6359 16.8438 8.42188C16.8438 5.20781 14.2141 2.57812 11 2.57812C7.78594 2.57812 5.15625 5.20781 5.15625 8.42188ZM15.4688 8.42188C15.4688 10.8797 13.4578 12.8906 11 12.8906C8.54219 12.8906 6.53125 10.8797 6.53125 8.42188C6.53125 5.96406 8.54219 3.95312 11 3.95312C13.4578 3.95312 15.4688 5.96406 15.4688 8.42188Z" fill="#282828" />
												<path d="M4.1938 20.5219C6.01567 18.7 8.42192 17.7031 11 17.7031C13.5782 17.7031 15.9844 18.7 17.8063 20.5219L18.786 19.5422C16.7063 17.4797 13.9391 16.3281 11 16.3281C8.06099 16.3281 5.2938 17.4797 3.21411 19.5422L4.1938 20.5219Z" fill="#282828" />
											</svg>
										</span>
										<input autocomplete="off" type="text" name="form[]" placeholder="Numele dumneavoastră" class="contacts-form__input">
									</label>
									<label class="contacts-form__input-block">
										<span class="contacts-form__icon">
											<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.14996 3.74984V5.42199C2.14996 12.2887 7.71655 17.8553 14.5833 17.8553H16.25C17.1336 17.8553 17.85 17.139 17.85 16.2553V14.1178C17.85 13.4291 17.4093 12.8177 16.7559 12.5999L14.1032 11.7156C13.4187 11.4875 12.6662 11.7457 12.266 12.346L11.6585 13.2572C11.4334 13.5949 11.0101 13.7401 10.625 13.6118L9.35388 13.1881C8.16134 12.7906 7.24636 11.8234 6.91561 10.6106L6.39306 8.69459C6.26738 8.23376 6.5236 7.75502 6.97675 7.60397L7.47888 7.43659C8.16759 7.20702 8.58693 6.51053 8.46758 5.79444L8.08298 3.4868C7.95439 2.7153 7.28689 2.14984 6.50475 2.14984H3.74996C2.8663 2.14984 2.14996 2.86618 2.14996 3.74984ZM2.01663 3.74984C2.01663 2.79254 2.79267 2.0165 3.74996 2.0165H6.50475C7.35207 2.0165 8.0752 2.62909 8.2145 3.46488L8.5991 5.77252C8.72924 6.55333 8.27199 7.31277 7.52104 7.56308L7.01891 7.73046C6.63289 7.85913 6.41464 8.26695 6.5217 8.65951L7.04425 10.5755C7.36327 11.7453 8.24579 12.6782 9.39604 13.0616L10.6672 13.4853C10.9952 13.5946 11.3558 13.4709 11.5476 13.1833L12.155 12.2721C12.5886 11.6217 13.4038 11.342 14.1454 11.5891L16.7981 12.4734C17.5059 12.7093 17.9833 13.3717 17.9833 14.1178V16.2553C17.9833 17.2126 17.2073 17.9887 16.25 17.9887H14.5833C7.64291 17.9887 2.01663 12.3624 2.01663 5.42199V3.74984Z" fill="#282828" stroke="#282828" stroke-width="0.7" />
											</svg>
										</span>
										<input autocomplete="off" type="text" name="form[]" placeholder="+40-xx-xxx-xxxx" class="contacts-form__input">
									</label>
									<button type="submit" class="contacts-form__button btn">
										Contactați-ne
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped>

</style>