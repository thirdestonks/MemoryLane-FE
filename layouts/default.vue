<script setup lang="ts">
const snackbarStore = useSnackBarStore()

const { snackBar } = useSnackBarStore();
</script>

<template>
  <v-app class="overflow-x-hidden">
    <nav class="bg-gray-900 border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/img/nav-icon.png" class="h-8" alt="MEMORYLANE" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Memory Lane</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </nav>
    <v-main>
      <BaseSnackbar v-model="snackBar" />

      <slot />
    </v-main>
  </v-app>
</template>
