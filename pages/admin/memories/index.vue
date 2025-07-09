<script setup lang="ts">
definePageMeta({
    layout: 'admin-layout',
});

const memories = [
    {
        id: 1,
        title: 'Beach Sunset',
        description: 'Captured a stunning sunset while walking the shore.',
        file: 'sunset.jpg',
        filePath: '/img/sunset.jpg',
    },
    {
        id: 2,
        title: 'Mountain Hike',
        description: 'Reached the summit just in time for the sunrise.',
        file: 'hike.jpg',
        filePath: '/img/city.jpg',
    },
    {
        id: 3,
        title: 'City Lights',
        description: 'Night out in the city — the skyline was incredible.',
        file: 'city.jpg',
        filePath: '/img/city.jpg',
    },
    {
        id: 4,
        title: 'Family Picnic',
        description: 'A warm day in the park with laughter and food.',
        file: 'picnic.jpg',
        filePath: '/img/city.jpg',
    },
];
</script>

<template>
    <div>
        <AdminCardGrid title="Memories">
            <div class="flex flex-wrap gap-6">
                <AdminMemoriesCard v-for="memory in memories" :key="memory.id" :memory="memory" />
            </div>
        </AdminCardGrid>
    </div>
</template>
