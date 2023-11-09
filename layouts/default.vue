<script setup lang="ts">
import { isWebp, initSliders } from '~/utils'

onMounted(() => {
  isWebp()
  initSliders()
})
</script>

<template>
    <div>
        <div class="wrapper">
            <MainHeader />
                <slot />
            <MainFooter />
        </div>
        <UIContactsBlock />
    </div>
</template>

<style scoped>

</style>