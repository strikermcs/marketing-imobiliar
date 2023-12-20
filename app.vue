<script setup lang="ts">
import { auth } from '~/libs/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import ShowNotification from './utils/notification';

const userStore = useUserStore()
const landing = useLandingStore()
const contacts = useContactsStore()
const notify = useNotificationStore()
const mails = useMailStore()
const loading = ref<boolean>(true)



watch(() => notify.trigger, () => {
    ShowNotification(notify.notification!.type,
       notify.notification!.title, notify.notification!.message)
})

onBeforeMount(async() => {
    onAuthStateChanged(auth, (user) => {
        userStore.user = user
    })
    await landing.getPromoSection()
    await landing.getServicesSectionItems()
    await landing.getBenefitsSectionItems()
    await landing.getQuestionSectionItems()
    await landing.getPricesSectionItems()
    await landing.getGallerySectionItems()
    await landing.getTestimonialSectionItems()
    await contacts.getAdditionalInfo()
    await contacts.getSocialsItems()
    await mails.getMailsItems()
    loading.value = false 
})
</script>

<template> 
    <UILoader v-if="loading"/>
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
</template>
