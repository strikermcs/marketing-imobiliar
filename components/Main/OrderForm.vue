<script setup lang="ts">
import type { IMail, IOrderMail, IServicePrice, TServicePrice } from '~/types';
import type { FormInstance, FormRules } from 'element-plus';
import { ShoppingBag } from '@element-plus/icons-vue'
import {v4 as uuid } from 'uuid'

interface Props {
    services: IServicePrice[]
    totalPrice: number
}

const props = defineProps<Props>()
const emits = defineEmits(['submited'])

const mailStore = useMailStore()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<Partial<IOrderMail>>({
  username: '',
  email: '',
  phone: '',
  text: '',
  confirmation: []
})


const rules = reactive<FormRules<Partial<IOrderMail>>>({
    username: [
        { required: true, message: 'Please input your name', trigger: 'blur' },
    ],

    email: [
        {
            required: true,
            message: 'Please input email',
            trigger: 'blur',
        },

        {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
        },
    ],

    phone: [
        {
            required: true,
            message: 'Please input your phone number',
            trigger: 'blur',
        }
    ],

    confirmation: [
      {
        type: 'array',
        required: true,
        message: 'Please accept the agreement',
        trigger: 'change',
      }
    ]

})

const priceServiceToDisplay = computed(() => {
	return (value: TServicePrice) => {
		if(value === 'Free') return 'Gratuit'
		if(value === 'PriceOnRequest') return 'Preț la cerere'
		return `Pret ${value} lei`
	}
})



const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
        const item: IOrderMail = {
            username: ruleForm.username as string,
            email: ruleForm.email as string,
            phone: ruleForm.phone as string,
            text: ruleForm.text as string,
            services: props.services,
            price: props.totalPrice,
            invoiceId: uuid(),
            isPay: false
        }

      const link = $fetch('/api/payment', {
          method: 'POST',
          body: {
            amount: item.price,
            invoiceId: item.invoiceId,
            firstName: item.username,
            email: item.email,
            phone: item.phone,
            text: item.text
          }
        })

        const mail: IMail<IOrderMail> = {
            type: 'order',
            mail: item,
            isRead: false
        }
      
        mailStore.AddMailItem(mail)
      
        link.then((data) => {
          document.location.href = data
        })
       
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
    <div>
       <div class="order-info">
            <ul>
                <li
                    v-for="(service, index) in services"
                    :key="service.id"
                >
                    <div class="order-item">
                        <div>{{index + 1}}. {{service.title}}:</div>
                        <div>{{priceServiceToDisplay(service.price)}}</div>
                    </div>
                </li>
            </ul>
            <div class="order-total">
                Valoare totală: {{totalPrice}} lei
            </div>
       </div>
       <div class="order-form">
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
             <el-form-item label="Your Name:" prop="username">
               <el-input v-model="ruleForm.username" />
             </el-form-item>
             <el-form-item label="Your email:" prop="email">
               <el-input v-model="ruleForm.email" />
             </el-form-item>
             <el-form-item label="Your phone:" prop="phone">
               <el-input v-model="ruleForm.phone" />
             </el-form-item>
             <el-form-item label="Additional information:" prop="text">
               <el-input v-model="ruleForm.text" type="textarea" />
             </el-form-item>
             <el-form-item prop="confirmation">
              <el-checkbox-group v-model="ruleForm.confirmation">
                <el-checkbox name="confirmation" label="///">
                  Sunt de acord cu <NuxtLink to="/terms" class="link">Termenii si Conditiile</NuxtLink> si cu <NuxtLink to="/privacy" class="link">Politica de Confidentialitate</NuxtLink>
                </el-checkbox>
              </el-checkbox-group>
             </el-form-item>
             <el-form-item>
               <el-button type="primary" :icon="ShoppingBag" @click="submitForm(ruleFormRef)">
                 Cumpara
               </el-button>
             </el-form-item>
        </el-form>
       </div>
    </div>
</template>

<style scoped>
.order-info {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(216, 216, 216);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
}

.order-item {
    display: flex;
    gap: 20px;
    font-size: 18px;
    padding-bottom: 10px;
}

.link {
  color: blue;
  text-decoration: underline;
}

.order-total {
    font-size: 18px;
    font-weight: 700;
}
</style>