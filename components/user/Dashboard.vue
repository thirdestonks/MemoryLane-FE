<script setup lang="ts">
definePageMeta({ layout: 'user-layout' })

const stats = [
  { label: 'This Day', value: 133 },
  { label: 'This Week', value: 471 },
  { label: 'This Month', value: 929 },
  { label: 'Pending', value: 233 },
]
</script>

<template>
  <section>
    <h2 class="text-3xl font-bold mb-6 text-gray-800">Welcome back 👋</h2>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
      <div v-for="stat in stats" :key="stat.label"
        class="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between">
        <p class="text-sm text-gray-500 mb-1">{{ stat.label }}</p>
        <p class="text-2xl font-semibold text-gray-900">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-2xl shadow-md p-6">
      <h3 class="text-lg font-semibold mb-2 text-gray-800">Your Recent Activity</h3>
      <p class="text-sm text-gray-600">
        You updated a memory yesterday. Keep the streak alive! 💪
      </p>
    </div>
  </section>
</template>