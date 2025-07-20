<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  text: { type: String, default: "" },
  textClass: { type: String, default: "tw-font-semibold" },
  block : { type: Boolean, default: false },
  color: { type: String, default: "#FB8C00" },
  disable: { type: Boolean, default: false },
  size: { type: String, default: 'default' },
  icon: { type: String, default: undefined },
  density: { type: String, default: undefined },
  loading: { type: Boolean, default: false },
  variant: { type: String, default: undefined }, //elevated, flat (hides v-btn shadow), text (buttonName only but hovers the whole rectangular button),
  // outlined, plain (will only hover the buttonName or Button-ICONS), icon
  iconSize: { type: String, default: "large" },
  rounded: { type: String, default: undefined }, //sets border-radius to buttons (xl, sm, lg, xs)
});

const { text, color, disable, size, variant, iconSize, rounded, loading, density } = toRefs(props);

const setColor = computed(() => {
  switch (color.value) {
    case "white":
      return "#FFFFFF";
    case "gray":
      return "#9BA4B5";
    case "green":
      return "#4CAF50";
    case "darkGreen":
      return "#258F00";
    case "red":
      return "#EF5350";
    case "darkRed":
      return "#FF0000";
    case "yellowOrange":
      return "#FB8C00";
    case "blue":
      return "#0C8CE9";
    case "darkBlue":
      return "#0014CC";
    case "purple":
      return "#7469B6";
    case "lightYellow":
      return "#ede082";
    case "lightBlue":
      return "#00B8D4";
    default:
      return "#FB8C00";
  }
});
</script>

<template>
  <div>
    <v-btn :color="setColor" :disabled="disable" :size="size" :loading="loading" :variant="variant" :rounded="rounded" :block="block">
      <v-icon v-if="icon" :size="iconSize" :density="density">
        {{ icon }}
      </v-icon>
      <span :class="textClass">
        {{ text }}
      </span></v-btn>
  </div>
</template>
