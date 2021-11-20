<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (val) => ["primary", "flat", "round"].includes(val),
  },
});

const dynamicStyles = computed(() => {
  const primaryStyles =
    "py-4 bg-primary-800 rounded-lg w-full grid grid-flow-col place-content-center gap-3 shadow-custom cursor-pointer";
  const flatStyles = "relative";
  const roundedStyles =
    "w-10 md:w-14 rounded-full border-[3px] border-transparent hover:border-primary-800";

  switch (props.variant) {
    case "flat":
      return flatStyles;
    case "round":
      return roundedStyles;
    default:
      return primaryStyles;
  }
});
</script>

<template>
  <button :class="dynamicStyles" class="focus:outline-none">
    <slot />
  </button>
</template>
