<script setup lang="ts">
import type { IPricesAndServicesContent, IServiceAndPrice, IServicePrice } from '~/types';
import type { FormInstance } from 'element-plus'
import { v4 as uuid} from 'uuid'

interface Props {
    submitFunc: Function
    funcButtonLabel: string
    defaultItem?: IServiceAndPrice
}

const props = defineProps<Props>()

const addImagesToServiceModalActive = ref<boolean>(false)

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<IServiceAndPrice>({
    title: props.defaultItem?.title as string || '',
    contentList: props.defaultItem?.contentList || [],
    services: props.defaultItem?.services as IServicePrice[] || [],
    exampleUrl: props.defaultItem?.exampleUrl || '',
    comment: props.defaultItem?.comment || '',
    exampleImages: props.defaultItem?.exampleImages || []
})


const removeContent = (item: IPricesAndServicesContent) => {
  const index = dynamicValidateForm.contentList!.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.contentList!.splice(index, 1)
  }
}

const addContent = () => {
  dynamicValidateForm.contentList!.push({
    id: uuid(),
    text: '',
  })
}

const removeServicePrice = (item: IServicePrice) => {
  const index = dynamicValidateForm.services.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.services.splice(index, 1)
  }
}

const addServicePrice = () => {
  dynamicValidateForm.services.push({
    id: uuid(),
    title: '',
    price: 'Free'
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
        const item: IServiceAndPrice = {
            title: dynamicValidateForm.title,
            exampleUrl: dynamicValidateForm.exampleUrl,
            contentList: dynamicValidateForm.contentList,
            services: dynamicValidateForm.services,
            comment: dynamicValidateForm.comment,
            exampleImages: []
        }
      props.submitFunc(item, props.defaultItem?.id)
      resetForm(formRef.value)
      dynamicValidateForm.contentList = []
      dynamicValidateForm.services = []
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const addImagesToServise = () => {
    addImagesToServiceModalActive.value = true
}
</script>

<template>
    <AdminImagesUploadModal 
        v-model="addImagesToServiceModalActive" 
        :images="defaultItem?.exampleImages!" 
        :serviceId="defaultItem?.id!"
    />
    <el-form
        ref="formRef"
        :model="dynamicValidateForm"
        label-width="120px"
        label-position="top"
        class="demo-dynamic"
    >
        <el-form-item
            prop="title"
            label="Service Title:"
            :rules="[
                    {
                        required: true,
                        message: 'Please input service title',
                        trigger: 'blur',
                    },
                ]"
        >
            <el-input v-model="dynamicValidateForm.title" />
        </el-form-item>
        <el-form-item
            prop="exampleUrl"
            label="Service Example Url:"
        >
            <el-input v-model="dynamicValidateForm.exampleUrl" />
        </el-form-item>
        <el-form-item
            prop="comment"
            label="Add comment to service:"
        >
            <el-input v-model="dynamicValidateForm.comment" />
        </el-form-item>
        <div class="additional-info">
            <el-form-item
                v-for="(content, index) in dynamicValidateForm.contentList"
                :key="content.id"
                :label="'Additional content: ' + index"
                :prop="'contentList.' + index + '.text'"
                :rules="{
                    required: true,
                    message: 'content can not be null',
                    trigger: 'blur',
                }"
            >
                <el-input v-model="content.text" />
                <el-button style="margin-top: 10px;" @click.prevent="removeContent(content)"
                    >Delete</el-button
                >
            </el-form-item>
            <div
                v-for="(priceService, index) in dynamicValidateForm.services"
                :key="priceService.id"
                class="price-service"
            >
                <el-form-item
                    :label="'Service title: ' + index"
                    :prop="'services.' + index + '.title'"
                    :rules="{
                        required: true,
                        message: 'service title can not be null',
                        trigger: 'blur',
                    }"
                >
                    <el-input v-model="priceService.title" />
                </el-form-item>
                <el-form-item label="Price Variant:">
                    <el-radio-group v-model="priceService.price">
                        <el-radio label="PriceOnRequest" />
                        <el-radio label="Free" />
                        <el-radio label="Price" />
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    v-if="priceService.price != 'PriceOnRequest' && priceService.price != 'Free'"
                    :label="'Service price: ' + index"
                    :prop="'services.' + index + '.price'"
                    :rules="[
                        {
                            required: true,
                            message: 'service title can not be null',
                            trigger: 'blur',
                        },

                        {
                            type: 'number',
                            message: 'field must be a number'
                        }
                    ]"
                >
                    <el-input  v-model.number="priceService.price" />
                </el-form-item>
                <el-button style="margin-bottom: 10px;" @click.prevent="removeServicePrice(priceService)">Delete</el-button>
            </div>
        </div>
        <el-form-item >
            <div class="actions">
                <el-button type="primary" @click="submitForm(formRef)">{{funcButtonLabel}}</el-button>
                <el-button @click="addContent">New Content</el-button>
                <el-button @click="addServicePrice">New Price for Service</el-button>
                <el-button @click="addImagesToServise" v-if="defaultItem">Add/Edit Images</el-button>
                <el-button @click="resetForm(formRef)">Reset</el-button>
            </div>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.additional-info {
    border: 1px solid blue;
    border-radius: 5px;
    padding: 10px;
    margin: 30px 0px 10px 30px;
}

.price-service {
    padding: 5px;
    background: rgb(191, 191, 191);
    border-radius: 5px;
    margin-top: 5px;
}

.actions {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

@media screen and (max-width: 900px) {
    .actions {
        justify-content: center;
    }
}
</style>