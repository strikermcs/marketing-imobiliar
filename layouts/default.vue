<script setup lang="ts">
import { isWebp, initSliders, spollers } from '~/utils'

onMounted(() => {
  isWebp()
  initSliders()
  spollers()
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