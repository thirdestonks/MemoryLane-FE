<script setup lang="ts">
const snackbarStore = useSnackBarStore()
const { snackBar } = snackbarStore
</script>

<template>
  <v-app>
    <div class="flex h-screen bg-[#0e0e2c] text-gray-800">
      <!-- 🔹 Mobile Nav -->
      <div class="md:hidden fixed top-0 left-0 right-0 z-50">
        <UserMobileSidebar />
      </div>

      <!-- 🔹 Sidebar (Desktop only) -->
      <UserSidebar class="hidden md:flex" />

      <!-- 🔹 Main Content -->
      <div class="flex-1 p-4 mt-16 md:mt-0">
        <!-- Pushes content below app-bar on mobile -->
        <div class="bg-white rounded-3xl h-full w-full overflow-y-auto shadow-xl p-6">
          <BaseSnackbar v-model="snackBar" />
          <slot />
        </div>
      </div>
    </div>
  </v-app>
</template>

<style scoped>
.bg-white {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
}
</style>
