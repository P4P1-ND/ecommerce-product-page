<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (val) => ["primary", "flat", "round", "icon"].includes(val),
  },
});

const dynamicStyles = computed(() => {
  const primaryStyles = "p-4 rounded-lg grid grid-flow-col place-content-center gap-3 w-full";
  const flatStyles = "relative";
  const roundedStyles = "w-10 md:w-14 rounded-full border-[3px] border-transparent";
  const iconStyles = "p-5 grid place-content-center";

  switch (props.variant) {
    case "flat":
      return flatStyles;
    case "round":
      return roundedStyles;
    case "icon":
      return iconStyles;
    default:
      return primaryStyles;
  }
});
</script>

<template>
  <button :class="dynamicStyles" class="no-tap-highlight focus:outline-none">
    <slot />
  </button>
</template>
