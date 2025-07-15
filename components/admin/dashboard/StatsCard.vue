<script setup lang="ts">
defineProps<{
    title: string
    value: string
    icon: string
    color?: string
}>()
</script>

<template>
    <v-card class="pa-4" elevation="2">
        <div class="d-flex align-center gap-4">
            <v-icon :color="color || 'primary'" size="36" class="bg-grey-lighten-4 pa-2 rounded">
                {{ icon }}
            </v-icon>
            <div>
                <div class="text-h6 font-weight-medium">{{ value }}</div>
                <div class="text-caption text-grey-darken-1">{{ title }}</div>
            </div>
        </div>
    </v-card>
</template>
