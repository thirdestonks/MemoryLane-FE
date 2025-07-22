<script setup lang="ts">
const props = defineProps<{
    memory: {
        id: number
        title: string
        description: string
        file: string
        filePath: string
        created_at?: Date
        updated_at?: Date | null
        deleted_at?: Date | null
    }
}>()
const emit = defineEmits(['edit'])

const router = useRouter()
const viewMemory = (id: number) => {
    router.push(`/admin/memories/memory/${id}`)
}

const onEdit = () => {
    emit('edit', props.memory)
}
</script>

<template>
    <v-card class="memory-card w-full sm:w-72" elevation="2">
        <div class="relative">
            <v-img :src="memory.filePath" height="160" class="rounded-t" cover />
            <!-- 3-dot menu -->
            <div class="absolute top-0 right-0 z-10">
                <v-menu location="bottom right">
                    <template #activator="{ props }">
                        <v-btn icon variant="text" v-bind="props">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="onEdit">
                            <v-list-item-title>Edit</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="onEdit">
                            <v-list-item-title>Delete</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>

        <v-card-text>
            <h3 class="text-sm font-semibold text-gray-800">{{ memory.title }}</h3>
            <p class="text-xs text-gray-600 mt-1">{{ memory.description }}</p>
        </v-card-text>
        <v-card-actions class="px-4 pb-4">
            <v-btn @click="viewMemory(memory.id)" size="small" color="primary" variant="elevated">
                View Memory
                <v-icon>
                    mdi-eye
                </v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.memory-card {
    transition: transform 0.25s ease-in-out;
}

.memory-card:hover {
    transform: scale(1.02);
}
</style>
