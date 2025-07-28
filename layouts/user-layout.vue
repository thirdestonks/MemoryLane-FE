<script setup lang="ts">
const snackbarStore = useSnackBarStore()

const { snackBar } = useSnackBarStore();
</script>

<template>
  <div class="flex h-screen bg-[#0e0e2c] text-gray-800">
    <!-- Sidebar -->
    <UserSidebar />

    <!-- Main Content -->
    <div class="flex-1 p-4">
      <div class="bg-white rounded-3xl h-full w-full overflow-y-auto shadow-xl p-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-white {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
}
</style>