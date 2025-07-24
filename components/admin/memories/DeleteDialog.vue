<script setup lang="ts">
const props = defineProps<{
  memory: any
}>()

const dialog = defineModel({
    type: Boolean,
    default: false,
});

const emit = defineEmits(['submitted'])
const isSubmitting = ref(false)

// store
const snackbarStore = useSnackBarStore()
const memoryStore = useMemoryStore()

const { deleteMemory } = memoryStore
const { setSnackBar } = snackbarStore

// methods
const closeDialog = () => {
  dialog.value = false
}

const submitDelete = async () => {
  if (!props.memory) return

  isSubmitting.value = true
  try {
    await deleteMemory(props.memory.id)
    setSnackBar({ text: 'Memory deleted successfully', type: 'success' })
    emit('submitted')
    closeDialog()
  } catch (error) {
    setSnackBar({ text: 'Delete failed', type: 'error' })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <v-dialog v-model="dialog" max-width="480">
    <v-card>
      <v-card-title class="text-h6">Delete Memory</v-card-title>
      <v-card-text>
        Are you sure you want to delete "<strong>{{ props.memory?.title }}</strong>"?
        This action cannot be undone.
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="closeDialog">Cancel</v-btn>
        <v-btn color="red" :loading="isSubmitting" @click="submitDelete">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
