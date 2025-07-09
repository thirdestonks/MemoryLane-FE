<script setup lang="ts">
const props = defineProps<{
  memory: {
    id: number
    title: string
    description: string
    file: string
    filePath: string
    created_at?: string | Date
    updated_at?: string | Date | null
    deleted_at?: string | Date | null
  }
}>()

const formattedDate = computed(() =>
  new Date(props.memory.created_at!).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
)
</script>

<template>
    <v-container fluid class="py-10">
        <v-card class="mx-auto px-6 py-10" elevation="2" max-width="1600">
            <v-row align="center" justify="center" class="flex-wrap">
                <!-- Image -->
                <v-col cols="12" md="6" class="px-4 mb-6 mb-md-0">
                    <v-img :src="props.memory.filePath" :alt="props.memory.title" class="rounded-lg" width="100%"
                        height="100%" cover />
                </v-col>

                <!-- Info -->
                <v-col cols="12" md="6" class="px-4">
                    <div class="d-flex flex-column justify-space-between h-100">
                        <div>
                            <h1 class="text-h4 font-weight-bold mb-2">{{ props.memory.title }}</h1>
                            <p class="text-caption text-grey-darken-1 mb-4">
                                Created: {{ formattedDate }}
                            </p>
                            <p class="text-body-1 mb-6">
                                {{ props.memory.description }}
                            </p>
                        </div>

                        <div class="d-flex gap-4">
                            <v-btn color="success" variant="flat">Replace</v-btn>
                            <v-btn color="error" variant="flat">Delete</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
