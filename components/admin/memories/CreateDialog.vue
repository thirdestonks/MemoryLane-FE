<script setup lang="ts">
const model = defineModel({ type: Boolean, default: false });
const emit = defineEmits(['update:modelValue', 'submitted'])

//store
const snackbarStore = useSnackBarStore()
const memoryStore = useMemoryStore()
//reactive

//non reactive
const { setSnackBar } = snackbarStore
const { createMemory } = memoryStore

const form = ref({
    title: '',
    description: '',
})

const file = ref<File | null>(null)
const filePreview = ref<string | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const isSubmitting = ref(false)

function triggerFileSelect() {
    fileInput.value?.click()
}

function handleFileChange(e: Event) {
    const target = e.target as HTMLInputElement
    const selectedFile = target.files?.[0]
    if (!selectedFile) return

    file.value = selectedFile
    filePreview.value = URL.createObjectURL(selectedFile)
}

function emitClose() {
    emit('update:modelValue', false)
}

async function submit() {
    if (!form.value.title || !form.value.description) {
        setSnackBar({ text: 'Please fill all fields', type: 'error' })
        return
    }

    isSubmitting.value = true

    try {
        const formData = new FormData()
        formData.append('title', form.value.title)
        formData.append('description', form.value.description)
        // formData.append('file', file.value)

        await createMemory(formData)

        emit('submitted')
        emitClose()
    } catch (error) {
        setSnackBar({ text: 'Failed to create memory', type: 'error' })
        console.error('Error creating memory:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>


<template>
    <v-dialog v-model="model" max-width="800" persistent>
        <v-card class="p-6">
            <v-card-title class="text-h6 font-bold mb-2">
                Add New Memory
            </v-card-title>

            <v-card-text>
                <v-row dense>
                    <!-- Left Side: Form -->
                    <v-col cols="7">
                        <v-text-field v-model="form.title" label="Title" outlined dense required class="mb-4" />

                        <v-textarea v-model="form.description" label="Description" outlined dense auto-grow required
                            class="mb-4" />

                        <div class="mb-2">
                            <div class="font-medium mb-1">Upload Image</div>
                            <div class="text-xs text-gray-500 mb-2">
                                Supported: JPG, PNG, max 5MB
                            </div>

                            <v-btn color="primary" :readonly="true" disabled prepend-icon="mdi-plus"
                                @click="triggerFileSelect">
                                Upload File
                            </v-btn>

                            <input ref="fileInput" type="file" class="hidden" accept="image/*"
                                @change="handleFileChange" />
                        </div>
                    </v-col>

                    <!-- Right Side: Image Preview -->
                    <v-col cols="5" class="d-flex justify-center align-center">
                        <v-sheet elevation="0" class="w-full d-flex justify-center">
                            <v-img v-if="filePreview" :src="filePreview" height="260" max-width="100%"
                                class="rounded-lg border" cover />
                            <div v-else class="text-gray-400 text-sm">
                                No image selected
                            </div>
                        </v-sheet>
                    </v-col>

                </v-row>
            </v-card-text>

            <v-card-actions class="justify-end">
                <v-btn text @click="emitClose">Cancel</v-btn>
                <v-btn color="primary" @click="submit" :loading="isSubmitting">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
