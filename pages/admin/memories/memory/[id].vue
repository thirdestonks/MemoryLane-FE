<script setup lang="ts">
definePageMeta({
    layout: 'admin-layout',
})

const route = useRoute()
//store
const memoryStore = useMemoryStore()
const snackbarStore = useSnackBarStore();
//non-reactive
const { getMemory } = memoryStore
const { setSnackBar } = snackbarStore

const memoryId = route.params.id as string
const memory = ref(null)

const fetchMemory = async (id: string) => {
    try {
        const res: any = await getMemory(id)
        if (res) {
            memory.value = res
        } else {
            setSnackBar({ text: "Memory not found", type: "error" })
        }
    } catch (error) {
        setSnackBar({ text: "Something went wrong", type: "error" })
    }
}

onMounted(async () => {
    await fetchMemory(memoryId)
})
</script>

<template>
    <AdminMemoriesViewer v-if="memory" :memory="memory" />
    <div v-else class="p-4 text-red-600 font-semibold">Memory not found.</div>
</template>
