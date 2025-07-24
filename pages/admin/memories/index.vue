<script setup lang="ts">
definePageMeta({
  layout: 'admin-layout',
})
//store
const snackbarStore = useSnackBarStore()
const memoryStore = useMemoryStore()
const statusChangeDialog = ref(false) //state
const memoryToEdit = ref<any>(null) //state
const memoryToDelete = ref<any>(null) //state
const editDialog = ref(false) //state
const deleteDialog = ref(false) //state
const isFetching = ref<boolean>(false)
//reactive
const { memories } = storeToRefs(memoryStore)
//non-reactive
const { setSnackBar } = snackbarStore
const { getMemories } = memoryStore

const fetchMemories = async () => {
  isFetching.value = true
  try {
    await getMemories()

    setTimeout(() => {
      isFetching.value = false
    }, 300)
  } catch (error: any) {
    setSnackBar({ text: 'Something went wrong', type: 'error' })
  }
}

function handleEdit(memory: any) {
  memoryToEdit.value = memory
  editDialog.value = true
}

function handleDelete(memory: any) {
  memoryToDelete.value = memory
  deleteDialog.value = true
}

onMounted(async () => {
  await Promise.all([fetchMemories()])
})
</script>

<template>
  <div>
    <AdminCardGrid title="Memories">
      <v-btn color="primary" variant="flat" prepend-icon="mdi-plus" @click="statusChangeDialog = true" class="mb-4">
        Add Memory
      </v-btn>
      <div class="flex flex-wrap gap-6">
        <AdminMemoriesCard v-for="memory in memories" :key="memory.id"
        @edit="handleEdit" @delete="handleDelete" :memory="memory" />
      </div>
    </AdminCardGrid>
  </div>
  <AdminMemoriesCreateDialog v-model="statusChangeDialog" @submitted="fetchMemories()" />
  <AdminMemoriesEditDialog v-model="editDialog" :memory="memoryToEdit" @submitted="fetchMemories()" />
  <AdminMemoriesDeleteDialog v-model="deleteDialog" :memory="memoryToDelete" @submitted="fetchMemories()" />
</template>
