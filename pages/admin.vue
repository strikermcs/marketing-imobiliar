<script setup lang="ts">
import type { TAdminSettingTab } from '~/types';

const activeTab: any = inject('settingTab')

const page = computed(() => {
    return resolveComponent(activeTab.value)
})

definePageMeta({
    layout: 'admin'
})
</script>

<template>
    <div class="page-main">
        <Transition name="fade" mode="out-in">
            <component :is="page" />
        </Transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-main {
    margin-top: 40px;
}
</style>