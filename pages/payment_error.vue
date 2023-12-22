<script setup lang="ts">
import { CircleClose } from '@element-plus/icons-vue'

</script>

<template>
    <main>
        <div class="success">
            <el-icon size="100" color="red"><CircleClose /></el-icon>
            <div class="text">Eroare tranzacție</div>
        </div>
    </main>
</template>

<style scoped>
.success {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
}

.text {
    font-size: 20px;
    font-weight: 900;
    margin-top: 10px;
}
</style>