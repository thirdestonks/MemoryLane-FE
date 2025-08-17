<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useDisplay } from 'vuetify'

const drawer = ref(false)
const { logout } = useAuthStore()
const auth: any = authDecode()

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

async function signOut() {
    await logout()
    drawer.value = false
}

function clickDrawer() {
    drawer.value = !drawer.value
}
</script>

<template>
    <v-app-bar color="white" elevation="2" class="px-4">
        <div class="flex items-center space-x-3 w-full">
            <!-- Avatar -->
            <v-avatar size="36">
                <img src="/img/profilePicture.jpg" alt="avatar" />
            </v-avatar>

            <!-- User Info -->
            <div class="leading-tight">
                <p class="text-sm font-semibold text-gray-800">{{ auth.name }}</p>
                <p class="text-[11px] uppercase text-gray-500 tracking-wide">{{ auth.role }}</p>
            </div>

            <!-- Spacer to push burger to right -->
            <div class="flex-grow" />

            <!-- Burger -->
            <v-btn icon variant="text" @click="clickDrawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </div>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" :location="isMobile ? 'bottom' : 'left'" :temporary="true"
        :width="isMobile ? 400 : 240" :touchless="!isMobile" disable-resize-watcher
        :transition="isMobile ? 'slide-y-reverse-transition' : 'slide-x-reverse-transition'" color="#F1F6F9">

        <v-list density="compact">
            <v-list-item @click="drawer = false">
                <v-icon start>mdi-view-dashboard</v-icon>
                <NuxtLink to="/user/dashboard">Dashboard</NuxtLink>
            </v-list-item>

            <v-list-item @click="drawer = false">
                <v-icon start>mdi-image-multiple</v-icon>
                <NuxtLink to="/user/memories">My Memories</NuxtLink>
            </v-list-item>

            <v-list-item @click="drawer = false">
                <v-icon start>mdi-cog</v-icon>
                <NuxtLink to="/user/settings">Settings</NuxtLink>
            </v-list-item>

            <v-divider class="my-2" />

            <v-list-item @click="signOut">
                <v-icon start color="red">mdi-logout</v-icon>
                <span class="text-red-600">Logout</span>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
.v-list-item {
    cursor: pointer;
}
</style>
