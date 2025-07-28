<script setup lang="ts">
definePageMeta({ layout: 'user-layout' })

const memories = [
  {
    id: 1,
    title: 'Tokyo Summer',
    description: 'A peaceful walk through the bamboo forest and traditional streets.',
    filePath: '/path/to/image.jpg',
  },
  {
    id: 2,
    title: 'Hai Sen Burger',
    description: 'Great burger joint and cool kick-ass burger.',
    filePath: '/path/to/image2.jpg',
  },
  // more sample memories
]

const openAddMemoryDialog = () => {
  // Open the add memory dialog logic
}

const viewMemory = (id: number) => {
  // Navigate to memory details
}

const deleteMemory = (id: number) => {
  // Handle deletion of memory
}
</script>

<template>
  <section class="flex flex-col">
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">My Memories</h2>
      <v-btn color="primary" variant="filled" @click="openAddMemoryDialog">
        + Add Memory
      </v-btn>
    </div>

    <!-- Memory Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="memory in memories"
        :key="memory.id"
        class="bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between"
      >
        <v-img :src="memory.filePath" height="200" class="rounded-lg mb-4" />
        <h3 class="text-lg font-semibold">{{ memory.title }}</h3>
        <p class="text-sm text-gray-600 mt-2">{{ memory.description }}</p>
        <div class="mt-4 flex justify-between items-center">
          <v-btn size="small" color="primary" @click="viewMemory(memory.id)">View</v-btn>
          <v-btn size="small" color="red" @click="deleteMemory(memory.id)">Delete</v-btn>
        </div>
      </div>
    </div>

    <!-- Optionally, no memories found -->
    <div v-if="!memories.length" class="text-center text-gray-500 mt-8">
      You don't have any memories yet.
    </div>
  </section>
</template>

<style scoped>
/* Customize card look */
.v-img {
  object-fit: cover;
}

.v-btn {
  font-size: 0.875rem;
}

.grid {
  gap: 2rem;
}
</style>
