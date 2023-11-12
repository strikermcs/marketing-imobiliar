<script setup lang="ts">
import type { IQuestion } from '~/types';


const landing = useLandingStore()
const { questions } = storeToRefs(landing)

const deleteDialogVisible = ref<boolean>(false)
const updateDialogVisible = ref<boolean>(false)
const selectedItem = ref<IQuestion>()

const updateItemHandle = async (item : IQuestion) => {
    selectedItem.value = item
    updateDialogVisible.value = true
}

const deleteItemHandle = async (item: IQuestion) => {
    selectedItem.value = item
    deleteDialogVisible.value = true
}

const confirmItemDelete = async () => {
    await landing.deleteQuestionSectionItem(selectedItem.value as IQuestion)
    deleteDialogVisible.value = false
}

const saveQuestionItem =  async (item: IQuestion) => {
    await landing.AddQuestionSectionItem(item)
}

const updateServiceItem = async (item: IQuestion, id: string) => {
  item.id = id
  await landing.updateQuestionSectionItem(item)
  updateDialogVisible.value = false
}
</script>

<template>
    <div>

        <el-dialog v-model="deleteDialogVisible" title="Warning" width="320px" draggable>
            <span>Are you sure you want to delete the question?</span>
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
                <AdminFormsQuestionItemForm
                    :submit-func="updateServiceItem"
                    func-button-label="Update Question"
                    :default-question="selectedItem?.question"
                    :default-answer="selectedItem?.answer"
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

        <AdminUIPageHeader title="Section Questions" />
        <div 
            v-if="questions.length == 0"
            class="no-items"
        >
            There are no questions at the moment, but you can add them.
        </div>
        <div v-else>
            <h3 class="header-service-item">List of qustions:</h3>
            <TransitionGroup name="list" tag="ul">
                <li
                    v-for="question in questions"
                    :key="question.id" 
                    class="list-sevices"      
                >   
                  <AdminUIListServiceItem 
                    :title="question.question"
                    @update-item="updateItemHandle(question)"
                    @delete-item="deleteItemHandle(question)"
                  />
                </li>
            </TransitionGroup>
        </div>
        <div style="margin-top: 40px;">
            <h3 class="header-service-item">Add new question:</h3>
            <AdminFormsQuestionItemForm 
              :submit-func="saveQuestionItem"
              func-button-label="Add Question"
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
</style>