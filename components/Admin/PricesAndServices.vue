<script setup lang="ts">
import type { IServiceAndPrice } from '~/types';

const landing = useLandingStore()
const { pricesAndServices } = storeToRefs(landing)

const deleteDialogVisible = ref<boolean>(false)
const updateDialogVisible = ref<boolean>(false)

const selectedItem = ref<IServiceAndPrice>()



const updateItemHandle = (item: IServiceAndPrice) => {
    selectedItem.value = item
    updateDialogVisible.value = true
}
const deleteItemHandle = (item: IServiceAndPrice) => {
    selectedItem.value = item
    deleteDialogVisible.value = true
}

const confirmItemDelete = async () => {
    await landing.deletePricesSectionItem(selectedItem.value as IServiceAndPrice)
    deleteDialogVisible.value = false
}

const submitPricesAndService = async (item: IServiceAndPrice) => {
    await landing.AddPricesSectionItem(item)
}

const updatePricesAndService = async (item: IServiceAndPrice, id: string) => {
    item.id = id
    await landing.updatePricesSectionItem(item)
    updateDialogVisible.value = false
}

</script>

<template>
    <div>

        <el-dialog v-model="deleteDialogVisible" title="Warning" width="320px" draggable>
            <span>Are you sure you want to delete the Price for service?</span>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="deleteDialogVisible = false">Cancel</el-button>
                <el-button type="danger" @click="confirmItemDelete">
                    Delete
                </el-button>
            </span>
            </template>
        </el-dialog>

        <el-dialog v-model="updateDialogVisible" title="Update Service" width="98%" draggable>
            <div>
                <AdminFormsPricesOfServices
                    :submit-func="updatePricesAndService"
                    func-button-label="Update Prices of Service"
                    :default-item="selectedItem"
                    v-if="updateDialogVisible"
                />
            </div>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="updateDialogVisible = false">Cancel</el-button>
            </span>
            </template>
        </el-dialog>

        <AdminUIPageHeader title="Section Prices" />
        <div 
            v-if="pricesAndServices.length == 0"
            class="no-items"
        >
            There are no prices of services at the moment, but you can add them.
        </div>
        <div v-else style="margin-bottom: 50px;">
            <h3 class="header-service-item">List of Praces for Services:</h3>
            <TransitionGroup name="list" tag="ul">
                <li
                    v-for="prices in pricesAndServices"
                    :key="prices.id" 
                    class="list-sevices"      
                >   
                  <AdminUIListServiceItem 
                    :title="prices.title"
                    @update-item="updateItemHandle(prices)"
                    @delete-item="deleteItemHandle(prices)"
                  />
                </li>
            </TransitionGroup>
        </div>
        <div>
            <h3 class="header-service-item">Add new services and Prices:</h3>
            <AdminFormsPricesOfServices 
                :submit-func="submitPricesAndService"
                func-button-label="Add Prices of Service"
            />
        </div>
    </div>
</template>

<style scoped>

.no-items {
    display: flex;
    justify-content: center;
    padding: 40px 5px;
    font-style: italic;
    text-align: center;
}

.header-service-item {
    font-size: 18px;
    font-weight: 800;
    font-style: italic;
    padding-bottom: 20px;
    color: #707070;
    text-align: center;
}


.list-sevices {
    padding: 0px 10px;
    transition: background 0.6s ease;
}
.list-sevices:hover {
    background: rgb(243, 243, 243);
}

.additional-info {
    border: 1px solid blue;
    border-radius: 5px;
    padding: 10px;
    margin: 30px 0px 10px 30px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>