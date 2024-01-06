<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { uploadFile as Upload} from '~/services/uploadFile';
import { v4 as uuid } from 'uuid'
import type { UploadProps, UploadUserFile } from 'element-plus'
import type { IServiceExampleImage } from '~/types';

interface Props {
    images: IServiceExampleImage[],
    serviceId: string
}

const isOpen = defineModel<boolean>()

const props = defineProps<Props>()

const landing = useLandingStore()


const dialogImageUrl = ref<string>('')
const dialogVisible = ref(false)

const image = computed(() => {
    return `url(${dialogImageUrl.value})`
})

const uploadUserImages = computed<UploadUserFile[]>(() => {
    return props.images.map(g => ({
        name: g.id as string,
        url: g.image
    }))
})

const handleRemove: UploadProps['onRemove'] = async (uploadFile, uploadFiles) => {
    const item = props.images.find(g => g.image == uploadFile.url)
    if(item) {
        await landing.deleteServiceImageExampleItem(item)
    }
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

const uploadImageHandle: UploadProps['onSuccess'] =  async (
  response,
  uploadFile
) => {
    const imageURL = URL.createObjectURL(uploadFile.raw!)
    await Upload(uploadFile.raw as File, `images/service_example/${uuid()}`, AddImageToService)
}

const AddImageToService = async (src: string) => {
    const item : IServiceExampleImage = {
        image: src,
        serviceId: props.serviceId
    }

    await landing.AddServiceImageExampleItem(item)
} 
</script>

<template>
    <el-dialog title="Add Images To Sevice" v-model="isOpen">
        <el-upload
            v-model:file-list="uploadUserImages"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="uploadImageHandle"
        >
            <el-icon><Plus /></el-icon>
        </el-upload>

        <el-dialog v-model="dialogVisible"  width="90%" class="image-full">
            <div class="back">

            </div>
        </el-dialog>
    </el-dialog>    
</template>

<style scoped>
.image-full {
    width: 90vw;
}

.back {
    width: 100%;
    height: 65vh;
    background: v-bind(image) no-repeat center;
    background-size:contain;
}

</style>