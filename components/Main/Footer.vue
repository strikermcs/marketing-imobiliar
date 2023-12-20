<script setup lang="ts">
const contacts = useContactsStore()

const { socials, additionalInfo } = storeToRefs(contacts)

const route = useRoute()

const menuClick = () => {
	if(route.path != '/') {
		navigateTo('/')
	}
}

</script>

<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__body">
				<NuxtLink to="/" class="footer__logo">
					<img src="~/assets/img/logo.svg" alt="logo">
				</NuxtLink>
				<div class="footer__columns">
					<div class="footer__col">
						<h4 class="footer__col-title">
							INFORMATII LEGALE
						</h4>
						<ul class="footer__col-list">
							<li class="footer__col-item">
								<NuxtLink to="/cookies_policy" class="footer__col-link dekor-line">
									Politica de Cookies
								</NuxtLink>
							</li>
							<li class="footer__col-item">
								<a href="https://anpc.ro/" class="footer__col-link dekor-line">
									ANPC
								</a>
							</li>
							<li class="footer__col-item">
								<NuxtLink to="/solution" class="footer__col-link dekor-line">
									Solutionarea litigiilor
								</NuxtLink>
							</li>
							<li class="footer__col-item">
								<NuxtLink to="/gdpr" class="footer__col-link dekor-line">
									Politica GDPR
								</NuxtLink>
							</li>
							<li class="footer__col-item">
								<NuxtLink to="/terms" class="footer__col-link dekor-line">
									Termeni si conditii
								</NuxtLink>
							</li>
							<li class="footer__col-item">
								<NuxtLink to="/privacy" class="footer__col-link dekor-line">
									Confidentialitate
								</NuxtLink>
							</li>
						</ul>
					</div>
					<div class="footer__col">
						<h4 class="footer__col-title">
							MENIUL
						</h4>
						<ul class="footer__col-list">
							<li class="footer__col-item" @click="menuClick">
								<a  href="#about" class="footer__col-link">
									Despre noi
								</a>
							</li>
							<li class="footer__col-item" @click="menuClick">
								<a  href="#services" class="footer__col-link">
									Servicii
								</a>
							</li>
							<li class="footer__col-item" @click="menuClick">
								<a href="#advantages" class="footer__col-link">
									Avantaje
								</a>
							</li>
							<li class="footer__col-item" @click="menuClick">
								<a  href="#service-prices" class="footer__col-link">
									Preturi
								</a>
							</li>
							<li class="footer__col-item" @click="menuClick">
								<a  href="#gallery" class="footer__col-link">
									Galerie
								</a>
							</li>
						</ul>
					</div>
					<div class="footer__col">
						<h4 class="footer__col-title">
							CONTACT
						</h4>
						<ul class="footer__col-list">
							<li class="footer__col-item">
								S.C. MARKETING IMOBILIAR SRL
							</li>
							<li class="footer__col-item">
								CUI: 49232186
							</li>
							<li class="footer__col-item">
								NRC: J13/4028/2023
							</li>
							<li class="footer__col-item">
								<a :href="`tel:${additionalInfo?.tel}`" class="footer__col-link">
									TEL. {{additionalInfo?.tel}}
								</a>
							</li>
							<li class="footer__col-item">
								<a :href="`mailto:${additionalInfo?.email}`" class="footer__col-link">
									{{additionalInfo?.email}}
								</a>
							</li>
							<li class="footer__col-item">
								<a href="#" class="footer__col-link">
								</a>
							</li>
							<li class="footer__col-item">
								<a href="#" class="footer__col-link">
								</a>
							</li>
							<li class="footer__col-item">
								<a href="#" class="footer__col-link">
								</a>
							</li>
						</ul>
						<ul class="footer__soc">
							<li 
								class="footer__soc-item"
								v-for="social in socials"
								:key="social.id"
							>
								<UISocialIconFooter :social="social.social" :link="social.link"/>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer__copy">
				© 2023 Marketing Imobiliar. Toate drepturile REZERVATE.
			</div>
		</div>
	</footer>
</template>

<style scoped>

</style>