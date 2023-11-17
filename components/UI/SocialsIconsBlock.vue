<script setup lang="ts">

const contacts = useContactsStore()
const { socials } = storeToRefs(contacts)

</script>

<template>
	<div class="promo__socials socials-block">
		<ul class="socials-block__list">
			<li 
				class="socials-block__item"
				v-for="social in socials"
				:key="social.id"
			>
				<UISocialIcon :social="social.social" :link="social.link"/>
			</li>
		</ul>
	</div>
</template>

<style scoped>

</style>