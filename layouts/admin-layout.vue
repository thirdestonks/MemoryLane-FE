<script setup lang="ts">
import layout from '@/constants/admin/layout'
import { useDisplay } from 'vuetify'

const authStore = useAuthStore()
const { logout } = authStore;

const auth: any = authDecode();

const display = useDisplay()
const isMobile = computed(() => display.mdAndDown.value)
const drawer = ref(true)
const hasNotification = ref(false);

const snackbarStore = useSnackBarStore()
const { snackBar } = storeToRefs(snackbarStore)

async function signOut() {
  await logout()
}
</script>

<template>
  <v-app>
    <div>
      <!-- App Bar -->
      <v-app-bar color="#1F2544" dark density="comfortable">
        <template v-if="isMobile">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" variant="text" />
        </template>
        <NuxtLink to="/" class="flex items-center">
          <img loading="lazy" src="/img/nav-icon.png" class="mx-4 h-10" alt="" />
        </NuxtLink>
      </v-app-bar>

      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="drawer" :width="isMobile ? 300 : 240" :temporary="isMobile" color="#F1F6F9"
        elevation="1">
        <!-- Drawer Header -->
        <template v-slot:prepend>
          <div class="m-6 text-center">
            <v-avatar size="80"
              image="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" />
            <p class="mt-4 text-sm uppercase font-bold">{{ auth.name }}</p>
            <p class="text-xs uppercase">{{ auth.role }}</p>
          </div>
          <v-divider />
        </template>

        <!-- Navigation Items -->
        <template v-slot:default>
          <v-list dense>
            <div v-for="(item, i) in layout" :key="i" class="hover:bg-gray-200 rounded">
              <v-list-item>
                <NuxtLink :to="item.to" class="flex items-center p-2">
                  <v-icon size="18" class="mr-3">{{ item.icon }}</v-icon>
                  <span class="text-sm font-semibold">{{ item.text }}</span>
                  <v-badge v-if="item.text === 'Pre-admission' && hasNotification" color="error" dot class="ml-auto" />
                </NuxtLink>
              </v-list-item>
            </div>
          </v-list>
        </template>

        <!-- Drawer Footer -->
        <template v-slot:append>
          <v-divider />
          <v-list dense>
            <v-list-item class="hover:bg-gray-200 rounded">
              <NuxtLink to="/admin/settings">
                <v-list-item-title class="flex items-center p-2 text-sm font-bold">
                  <v-icon size="18" class="mr-3">mdi-cog</v-icon>
                  Settings
                </v-list-item-title>
              </NuxtLink>
            </v-list-item>
            <v-list-item @click="signOut"
              class="hover:bg-red-100 hover:text-red-600 text-gray-800 rounded transition-colors">
              <v-list-item-title class="flex items-center p-2 text-sm font-bold">
                <v-icon size="18" class="mr-3">mdi-logout</v-icon>
                Logout
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>

      <!-- Main Content Area -->
      <v-main>
        <BaseSnackbar v-model="snackBar" />
        <div class="">
          <slot />
        </div>
      </v-main>
    </div>
  </v-app>
</template>
