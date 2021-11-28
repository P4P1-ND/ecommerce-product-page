<script setup>
import { computed } from "vue";
import AppButton from "./AppButton.vue";
import IconClose from "../icons/IconClose.vue";

const props = defineProps({
  variantClose: {
    type: String,
    required: true,
    validator: (val) => ["primary", "secondary"].includes(val),
  },
});

const computedStyles = computed(() => {
  const primaryStyles = "text-white group-hover:text-primary-800 group-focus:text-primary-800";
  const secondaryStyles =
    "text-neutral-600 group-hover:text-neutral-800 group-focus:text-neutral-800";

  return props.variantClose === "primary" ? primaryStyles : secondaryStyles;
});
</script>

<template>
  <AppButton variant="icon" class="group p-0" aria-label="Close Button">
    <IconClose :class="computedStyles" />
  </AppButton>
</template>
