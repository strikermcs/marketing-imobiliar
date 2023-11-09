<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { uploadFile, deleteFile } from '~/services/uploadFile'
import { v4 as uuid} from 'uuid'
import type { FormInstance, FormRules, UploadProps } from 'element-plus';
import type { IServiceSectionItem } from '~/types';

interface Props {
    submitFunc: Function
    funcButtonLabel: string
    defaultTitle?: string
    defaultDesc?: string
    defaultImage?: string
    id?: string 
}

const props = defineProps<Props>()

const notify = useNotificationStore()

const defaultImage = ref<string | undefined>(props.defaultImage)
const imageUrl = ref<string>()
const uploadImage = ref<File>()


const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  uploadImage.value = uploadFile.raw
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<Partial<IServiceSectionItem>>({
  title: props.defaultTitle,
  description: props.defaultDesc
})

const rules = reactive<FormRules<IServiceSectionItem>>({
  title: [
    { required: true, message: 'Please input Title', trigger: 'blur' },
  ],

  description: [
    {
      required: true,
      message: 'Please input text',
      trigger: 'blur',
    },
  ],
})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
        if(uploadImage.value && !defaultImage.value) {
            uploadFile(uploadImage.value, `images/services/${uuid()}`, addSeviceItem)
        } else if(defaultImage.value && !uploadImage.value) {
            addSeviceItem(defaultImage.value)
        } else if(defaultImage.value && uploadImage.value) {
          deleteFile(`images/services/${defaultImage.value.match('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')?.[0]}`)
          uploadFile(uploadImage.value, `images/services/${uuid()}`, addSeviceItem)
        } else {
            notify.SetNofication('Error', 'Image not selected or load', 'error')
        }
    } else {
      console.log('error submit!', fields)
    }
  })
}


const addSeviceItem = async (src: string) => {
    const item: IServiceSectionItem = {
        title: ruleForm.title as string,
        description: ruleForm.description as string,
        image: src
    }
    await props.submitFunc(item, props.id)
    resetForm(ruleFormRef.value)
    imageUrl.value = ''
}
</script>

<template>
    <div>
        <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
        >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <img v-else-if="defaultImage" :src="defaultImage" class="avatar"/>
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
    </div>
    <div class="service-add-form">
        <el-form
             ref="ruleFormRef"
             :model="ruleForm"
             :rules="rules"
             label-width="120px"
             class="demo-ruleForm"
             label-position="top"
             size="large"
             status-icon
        >
             <el-form-item label="Title:" prop="title">
               <el-input v-model="ruleForm.title" />
             </el-form-item>
             <el-form-item label="Description" prop="description">
               <el-input v-model="ruleForm.description" type="textarea" />
             </el-form-item>
             <el-form-item>
               <el-button type="primary" @click="submitForm(ruleFormRef)">
                 {{funcButtonLabel}}
               </el-button>
               <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
             </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>

</style>