<script setup lang="ts">
definePageMeta({
    layout: 'admin-layout',
})

const route = useRoute()
const memoryId = route.params.id as string
const memory = {
    id: 1,
    title: 'Beach Sunset',
    description: 'Captured a stunning sunset while walking the shore.',
    file: 'sunset.jpg',
    filePath: '/img/sunset.jpg',
    created_at: '2025-07-01',
}
</script>

<template>
    <AdminMemoriesViewer v-if="memory" :memory="memory" />
    <div v-else class="p-4 text-red-600 font-semibold">Memory not found.</div>
</template>
