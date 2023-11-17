<script setup lang="ts">
import type { IMail, IOrderMail, TServicePrice } from '~/types';


interface Props {
    mail: IMail<IOrderMail>
}

const props = defineProps<Props>()

const priceServiceToDisplay = computed(() => {
	return (value: TServicePrice) => {
		if(value === 'Free') return 'Gratuit'
		if(value === 'PriceOnRequest') return 'Preț la cerere'
		return `Pret ${value} lei`
	}
})
</script>

<template>
    <div>
        <h2 class="order-mail-header">Order</h2>
        <div class="order-info">
            <ul>
                <li
                    v-for="(service, index) in mail.mail.services"
                    :key="service.id"
                >
                    <div class="order-item">
                        <div>{{index + 1}}. {{service.title}}:</div>
                        <div>{{priceServiceToDisplay(service.price)}}</div>
                    </div>
                </li>
            </ul>
            <div class="order-total">
                Valoare totală: {{mail.mail.price}} lei
            </div>
       </div>
       <div class="user-info">
            <h2 class="user-info-order">Customer info:</h2>
            <div class="info-order-content">
                <div class="info-item">Username: <span>{{mail.mail.username}}</span></div>
                <div class="info-item">Email: <span>{{mail.mail.email}}</span></div>
                <div class="info-item">Phone: <span>{{mail.mail.phone}}</span></div>
                <div class="info-item">Additinal Info: <span>{{mail.mail.text}}</span></div>
            </div>
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

.order-total {
    font-size: 18px;
    font-weight: 700;
}

.order-mail-header {
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 30px;
}

.user-info-order {
    font-size: 18px;
    font-weight: 700;
}

.info-order-content {
    font-size: 16px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.info-item {
    font-style: italic;
}

.info-item span {
    font-style: normal;
    font-weight: 700;
}
</style>