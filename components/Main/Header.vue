<script setup lang="ts">
import { toggleMainMenu } from '~/utils'

const {width} = useWindowSize()
</script>

<template>
	<header class="header" id="header">
		<div class="header__container">
			<div class="header__body">
				<a href="#" class="header__logo">
					<img src="~/assets/img/logo.svg" alt="logo">
				</a>
				<div 
					class="header__menu menu"		
				>
					<button type="button" class="menu__icon icon-menu" @click="toggleMainMenu"><span></span></button>
					<nav class="menu__body" id="main-menu">
						<ul class="menu__list">
							<li class="menu__item" @click="toggleMainMenu">
								<a href="#about" class="menu__link">
									Despre noi
								</a>
							</li>
							<li class="menu__item" @click="toggleMainMenu">
								<a  href="#services" class="menu__link">
									Servicii
								</a>
							</li>
							<li  class="menu__item" @click="toggleMainMenu">
								<a href="#advantages" class="menu__link">
									Avantaje
								</a>
							</li>
							<li  class="menu__item" @click="toggleMainMenu">
								<a href="#service-prices" class="menu__link">
									PRETURI
								</a>
							</li>
							<li  class="menu__item" @click="toggleMainMenu">
								<a href="#gallery" class="menu__link">
									Galerie
								</a>
							</li>
							<li class="menu__item" @click="toggleMainMenu">
								<a href="#contacts" class="menu__link">
									Contact
								</a>
							</li>
						</ul>
						<ClientOnly>
							<UISocialsIconsBlock v-if="width < 992"/>	
						</ClientOnly>				
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>

</style>