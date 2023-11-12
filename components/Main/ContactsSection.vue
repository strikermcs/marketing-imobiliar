<script setup lang="ts">

export type  TContactType = 'Email' | 'Phone' | 'WhatsApp'

interface IFormContent {
	username: string
	contact: string
	type: TContactType
}


const formContent = reactive<Partial<IFormContent>>({
	username: '',
	contact: '',
	type: 'WhatsApp'
})

const tabs = ref([
    {
        id: 0,
        text: 'What’s app',
        icon: 'WhatsApp'
    },

    {
        id: 1,
        text: 'Email',
        icon: 'Email'
    },

    {
        id: 2,
        text: 'Phone',
        icon: 'Phone'
    },
])

const activeTab = ref(tabs.value[0])

</script>

<template>
	<div class="contacts__container">
		<div class="contacts__body">
			<h2 class="contacts__title title">
				Contactați-ne
			</h2>
			<div class="contacts-tabs">
				<nav class="contacts-tabs__navigation">
					<button 
                        type="button" 
                        class="contacts-tabs__title"
                        :class="{'_tab-active' : activeTab.id == item.id}"
                        v-for="item in tabs"
                        :key="item.id"
                        @click="activeTab = item"
                    >
						<Icon :name="item.icon" />
						<span>{{item.text}}</span>
					</button>
				</nav>
				<div class="contacts-tabs__content">
					<div class="contacts-tabs__body">
						<form 
							class="contacts-form"
							ref="formRef"
						>
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
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="activeTab.icon === 'Email'">
										<path d="M4.615 19C4.155 19 3.771 18.846 3.463 18.538C3.15433 18.2293 3 17.845 3 17.385V6.615C3 6.155 3.15433 5.771 3.463 5.463C3.771 5.15433 4.155 5 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.8457 5.771 21 6.155 21 6.615V17.385C21 17.845 20.846 18.229 20.538 18.537C20.2293 18.8457 19.845 19 19.385 19H4.615ZM12 12.115L4 6.885V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.43567 18 4.615 18H19.385C19.5643 18 19.7117 17.9423 19.827 17.827C19.9423 17.7117 20 17.5643 20 17.385V6.885L12 12.115ZM12 11L19.692 6H4.308L12 11ZM4 6.885V6V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.43567 18 4.615 18H4V6.885Z" fill="black" />
									</svg>
									
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
										<path d="M2.14996 3.74984V5.42199C2.14996 12.2887 7.71655 17.8553 14.5833 17.8553H16.25C17.1336 17.8553 17.85 17.139 17.85 16.2553V14.1178C17.85 13.4291 17.4093 12.8177 16.7559 12.5999L14.1032 11.7156C13.4187 11.4875 12.6662 11.7457 12.266 12.346L11.6585 13.2572C11.4334 13.5949 11.0101 13.7401 10.625 13.6118L9.35388 13.1881C8.16134 12.7906 7.24636 11.8234 6.91561 10.6106L6.39306 8.69459C6.26738 8.23376 6.5236 7.75502 6.97675 7.60397L7.47888 7.43659C8.16759 7.20702 8.58693 6.51053 8.46758 5.79444L8.08298 3.4868C7.95439 2.7153 7.28689 2.14984 6.50475 2.14984H3.74996C2.8663 2.14984 2.14996 2.86618 2.14996 3.74984ZM2.01663 3.74984C2.01663 2.79254 2.79267 2.0165 3.74996 2.0165H6.50475C7.35207 2.0165 8.0752 2.62909 8.2145 3.46488L8.5991 5.77252C8.72924 6.55333 8.27199 7.31277 7.52104 7.56308L7.01891 7.73046C6.63289 7.85913 6.41464 8.26695 6.5217 8.65951L7.04425 10.5755C7.36327 11.7453 8.24579 12.6782 9.39604 13.0616L10.6672 13.4853C10.9952 13.5946 11.3558 13.4709 11.5476 13.1833L12.155 12.2721C12.5886 11.6217 13.4038 11.342 14.1454 11.5891L16.7981 12.4734C17.5059 12.7093 17.9833 13.3717 17.9833 14.1178V16.2553C17.9833 17.2126 17.2073 17.9887 16.25 17.9887H14.5833C7.64291 17.9887 2.01663 12.3624 2.01663 5.42199V3.74984Z" fill="#282828" stroke="#282828" stroke-width="0.7" />
									</svg>
								</span>
								<input autocomplete="off" type="text" name="form[]" :placeholder="activeTab.icon === 'Email' ? 'xxx@xxxx.com' : '+40-xx-xxx-xxxx'" class="contacts-form__input">
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
</template>

<style scoped>

</style>