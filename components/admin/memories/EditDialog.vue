<script setup lang="ts">
import type { FormData } from '~/interfaces/form-data';

const props = defineProps<{
    memory: any
}>()

const dialog = defineModel({
    type: Boolean,
    default: false,
});

// emit
const emit = defineEmits(['submitted'])
const isSubmitting = ref(false)

// store
const snackbarStore = useSnackBarStore()
const memoryStore = useMemoryStore()

// state
const form = ref<FormData>({})

// non-reactive
const { updateMemory } = memoryStore
const { setSnackBar } = snackbarStore

watch(() => props.memory, (newMemory) => {
    if (newMemory) {
        form.value = newMemory
    }
}, { immediate: true })

// methods
const closeDialog = () => {
    dialog.value = false
    form.value = {} // Reset form
}

const onFileSelected = (files: File[]) => {
    form.value.file = files?.[0] || null
    form.value.filePath = form.value.file ? URL.createObjectURL(form.value.file) : props.memory.filePath
}

const submitForm = async () => {
    if (!form.value) return
    isSubmitting.value = true
    try {
        const formData = new FormData()
        formData.append('title', form.value.title)
        formData.append('description', form.value.description)
        if (form.value.file) {
            formData.append('file', form.value.file)
        }

        await updateMemory(props.memory.id, formData)

        setSnackBar({ text: 'Memory updated successfully', type: 'success' })
        emit('submitted')
        closeDialog()
    } catch (error) {
        setSnackBar({ text: 'Update failed', type: 'error' })
    } finally {
        isSubmitting.value = false
    }
}

</script>

<template>
    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-card-text>
                <v-form ref="formRef" @submit.prevent="submitForm">
                    <v-text-field v-model="form.title" label="Title" required />
                    <v-textarea v-model="form.description" label="Description" rows="3" required />
                    <v-file-input label="Replace Image (optional)" accept="image/*" @change="onFileSelected"
                        show-size />
                    <div v-if="form.filePath" class="mt-4">
                        <v-img :src="form.filePath" height="200" cover />
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn text @click="closeDialog">Cancel</v-btn>
                <v-btn color="primary" @click="submitForm">Update</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
