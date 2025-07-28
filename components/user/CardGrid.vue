<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

</script>

<template>
  <div>
    <div class="flex flex-col md:flex-row justify-between items-center mb-6 p-5 shadow-sm">
      <h1 class="text-2xl font-semibold text-gray-800">
        {{ title }}
      </h1>
    </div>

    <div class="p-6">
      <slot />
    </div>
  </div>
</template>

