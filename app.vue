<script setup lang="ts">
import { auth } from '~/libs/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import ShowNotification from './utils/notification';

const userStore = useUserStore()
const landing = useLandingStore()
const notify = useNotificationStore()


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
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
