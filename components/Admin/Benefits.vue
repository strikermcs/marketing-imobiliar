<script setup lang="ts">
import type { IServiceSectionItem } from '~/types'

const landing = useLandingStore()
const { benefits } = storeToRefs(landing)

const selectedItem = ref<IServiceSectionItem>()
const deleteDialogVisible = ref<boolean>(false)
const updateDialogVisible = ref<boolean>(false)

const dragOtions = computed(() => {
  return {
    animation: 200,
  }
})

const isLoading = ref<boolean>(false)

const deleteItemHandle = (item: IServiceSectionItem) => {
    selectedItem.value = item
    deleteDialogVisible.value = true
}

const updateItemHandle = (item: IServiceSectionItem) => {
  selectedItem.value = item
  updateDialogVisible.value = true
}

const confirmItemDelete = async () => {
   await landing.deleteBenefitSectionItem(selectedItem.value as IServiceSectionItem)
   deleteDialogVisible.value = false
}

const saveServiceItem = async (item : IServiceSectionItem) => {
  await landing.AddBenefitSectionItem(item)
} 

const updateServiceItem = async (item: IServiceSectionItem, id: string) => {
  item.id = id
  await landing.updateBenefitSectionItem(item)
  updateDialogVisible.value = false
}


const saveOrderItems = async() => {
  isLoading.value = true
   await landing.saveBenefitsSectionItemsOrder()
   isLoading.value = false
}
</script>

<template>
    <div>
        <el-dialog v-model="deleteDialogVisible" title="Warning" width="320px" draggable>
            <span>Are you sure you want to delete the service?</span>
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
            <AdminFormsServiceItemForm 
                :submit-func="updateServiceItem"
                func-button-label="Update Advantage"
                :default-title="selectedItem?.title"
                :default-desc="selectedItem?.description"
                :default-image="selectedItem?.image"
                :id="selectedItem?.id"
                v-if="updateDialogVisible"
                />
            </div>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="updateDialogVisible = false">Cancel</el-button>
            </span>
            </template>
        </el-dialog>

        <div>
            <AdminUIPageHeader title="Section Advantages"/>
            <div 
                v-if="benefits.length == 0"
                class="no-items"
            >
                There are no services at the moment, but you can add them.
            </div>
            <div v-else>
                <h3 class="header-service-item">List of services:</h3>
                <draggable v-model="benefits" v-bind="dragOtions">
                    <TransitionGroup name="list">
                        <div
                            v-for="service in benefits"
                            :key="service.id" 
                            class="list-sevices"      
                        >   
                            <AdminUIListServiceItem 
                                :title="service.title"
                                :image="service.image"
                                @update-item="updateItemHandle(service)"
                                @delete-item="deleteItemHandle(service)"
                            />
                        </div>
                    </TransitionGroup>
                </draggable>
                <div class="order-save-button">
                    <el-button type="success" plain @click="saveOrderItems" :loading="isLoading">Save Items Order</el-button>
                </div>   
            </div>
            <div style="margin-top: 40px;">
                <h3 class="header-service-item">Add new service:</h3>
                <AdminFormsServiceItemForm 
                :submit-func="saveServiceItem"
                func-button-label="Add Advantage"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-service-item {
    font-size: 18px;
    font-weight: 800;
    font-style: italic;
    padding-bottom: 20px;
    color: #707070;
    text-align: center;
}

.order-save-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.list-sevices {
    padding: 0px 10px;
    transition: background 0.6s ease;
}
.list-sevices:hover {
    background: rgb(243, 243, 243);
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