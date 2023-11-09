<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  title: string
  subtitle: string
  boldText: string
  description: string
}

const landing = useLandingStore()
const { promo } = storeToRefs(landing)

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  title: promo.value?.title as string,
  subtitle: promo.value?.subtitle as string,
  boldText: promo.value?.boldText as  string,
  description: promo.value?.description as string
})

const rules = reactive<FormRules<RuleForm>>({
  title: [
    { required: true, message: 'Please input Title', trigger: 'blur' },
  ],
  subtitle: [
    {
      required: true,
      message: 'Please input subtitle',
      trigger: 'blur',
    },
  ],
  boldText: [
    {
      required: true,
      message: 'Please input text',
      trigger: 'blur',
    },
  ],
  description: [
    {
      required: true,
      message: 'Please input text',
      trigger: 'blur',
    },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
       landing.updatePromoSection({id: promo.value?.id as string, ...ruleForm})
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<template>
    <div>
       <AdminUIPageHeader title="Section Promo"/>
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
            <el-form-item label="Subtitle" prop="subtitle">
                <el-input v-model="ruleForm.subtitle" />
            </el-form-item>
            <el-form-item label="Bold Text" prop="boldText">
                <el-input v-model="ruleForm.boldText" />
            </el-form-item>
            <el-form-item label="Description" prop="description">
              <el-input v-model="ruleForm.description" type="textarea" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)">
                Save
              </el-button>
              <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped>

</style>