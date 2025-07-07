<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  timeout: { type: Number, default: 2000 }
});
const snackbar = defineModel({ default: { state: false, type: 'default', text: '' } });
const color = ref<string>();
const { timeout } = toRefs(props);

watch(() => snackbar.value.type, () => {
  switch (snackbar.value.type) {
    case "success":
      color.value = 'green';
      break;
    case "error":
      color.value = "red";
      break;
    default:
      color.value = "grey";
  }
});
</script>

<template>
  <div class="bg"></div>
  <div class="tw-text-center">
    <v-snackbar v-model="snackbar.state" location="top right" :color="color" :text="snackbar.text" :timeout="timeout">
    </v-snackbar>
  </div>
</template>