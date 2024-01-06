<script setup lang="ts">
import type { IServiceExampleImage } from '~/types';


interface Props {
    images: IServiceExampleImage[]
} 

const isOpen = defineModel<boolean>()
const props = defineProps<Props>()

const { width } = useWindowSize()

</script>

<template>
    <el-dialog v-model="isOpen"  title="Vezi fotografii" :width="width < 1200 && '95vw' as any" >
        <el-carousel :height="width < 600 && '200px' as any">
            <el-carousel-item v-for="img in images" :key="img.id">
                <div class="preview">
                    <img :src="img.image" alt="image" class="image-pr">
                </div>
            </el-carousel-item>
        </el-carousel>
    </el-dialog>
</template>

<style scoped>
.preview {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.image-pr {
    width: 100%;
    object-fit: contain;
}

.el-dialog__body {
    height: 100px;
}

</style>