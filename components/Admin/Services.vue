<script setup lang="ts">
import type { IServiceSectionItem } from '~/types';


const landing = useLandingStore()
const { services } = storeToRefs(landing)

const selectedItem = ref<IServiceSectionItem>()
const deleteDialogVisible = ref<boolean>(false)
const updateDialogVisible = ref<boolean>(false)

const deleteItemHandle = (item: IServiceSectionItem) => {
    selectedItem.value = item
    deleteDialogVisible.value = true
}

const updateItemHandle = (item: IServiceSectionItem) => {
  selectedItem.value = item
  updateDialogVisible.value = true
}

const confirmItemDelete = async () => {
   await landing.deleteServiceSectionItem(selectedItem.value as IServiceSectionItem)
   deleteDialogVisible.value = false
}

const saveServiceItem = async (item : IServiceSectionItem) => {
  await landing.AddServiceSectionItem(item)
} 

const updateServiceItem = async (item: IServiceSectionItem, id: string) => {
  item.id = id
  await landing.updateServiceSectionItem(item)
  updateDialogVisible.value = false
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
              func-button-label="Update Service"
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
        <AdminUIPageHeader title="Section Sevices"/>
        <div 
            v-if="services.length == 0"
            class="no-items"
        >
            There are no services at the moment, but you can add them.
        </div>
        <div v-else>
            <h3 class="header-service-item">List of services:</h3>
            <TransitionGroup name="list" tag="ul">
                <li
                    v-for="service in services"
                    :key="service.id" 
                    class="list-sevices"      
                >   
                  <AdminUIListServiceItem 
                    :title="service.title"
                    :image="service.image"
                    @update-item="updateItemHandle(service)"
                    @delete-item="deleteItemHandle(service)"
                  />
                </li>
            </TransitionGroup>
        </div>
        <div style="margin-top: 40px;">
            <h3 class="header-service-item">Add new service:</h3>
            <AdminFormsServiceItemForm 
              :submit-func="saveServiceItem"
              func-button-label="Add Service"
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

.no-items {
    display: flex;
    justify-content: center;
    padding: 40px 5px;
    font-style: italic;
    text-align: center;
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