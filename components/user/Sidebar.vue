<script setup lang="ts">
const authStore = useAuthStore()
const { logout } = authStore

const auth: any = authDecode();

async function signOut() {
  await logout()
}
</script>

<template>
  <aside class="w-64 bg-white shadow-md rounded-r-2xl p-6 flex flex-col justify-between">
    <!-- Profile -->
    <div class="flex flex-col items-center">
      <v-avatar size="64" class="ring-2 ring-primary mb-3">
        <img src="/img/profilePicture.jpg" alt="avatar" />
      </v-avatar>
      <div class="text-center mb-8">
        <p class="font-semibold text-sm text-gray-800">{{ auth.name }}</p>
        <p class="text-xs uppercase text-gray-500">{{auth.role}}</p>
      </div>

      <!-- Nav -->
      <div class="w-full flex flex-col items-center">
        <nav class="flex flex-col gap-4">
          <NuxtLink to="/user/dashboard" class="sidebar-link">
            <v-icon size="18">mdi-view-dashboard</v-icon>
            <span>Dashboard</span>
          </NuxtLink>
          <NuxtLink to="/user/memories" class="sidebar-link">
            <v-icon size="18">mdi-image-multiple</v-icon>
            <span>My Memories</span>
          </NuxtLink>
          <NuxtLink to="/user/settings" class="sidebar-link">
            <v-icon size="18">mdi-cog</v-icon>
            <span>Settings</span>
          </NuxtLink>
        </nav>
      </div>
    </div>
    <!-- Logout -->
    <div class="mt-6">
      <div class="w-full hover:bg-red-100 transition duration-200 rounded-b-2xl">
        <div @click="signOut" role="button" tabindex="0"
          class="cursor-pointer flex items-center justify-center gap-2 w-full py-4 text-sm font-medium text-red-500 hover:text-red-700">
          <v-icon class="text-red-500" size="18">mdi-logout</v-icon>
          <span class="text-red-500">Logout</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  /* ~ Tailwind's gap-3 */
  font-size: 0.875rem;
  /* text-sm */
  font-weight: 500;
  /* font-medium */
  color: #4b5563;
  /* gray-600 */
  width: 100%;
  transition: all 0.15s ease-in-out;
}

.sidebar-link:hover {
  color: #2a4d86;
  /* Tailwind primary (blue-500) — adjust to your theme */
}
</style>
