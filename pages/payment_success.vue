<script setup lang="ts">
import { CircleCheck } from '@element-plus/icons-vue'

onMounted(() => {
    
})
</script>

<template>
    <main>
        <div class="success">
            <el-icon size="100" color="green"><CircleCheck /></el-icon>
            
        </div>
    </main>
</template>

<style scoped>
.success {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
}
</style>