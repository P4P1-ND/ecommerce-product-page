<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    required: true,
    validator: (val) => ["fade", "fade-horizontal", "fade-vertical"].includes(val),
  },
});

const computedFromStyles = computed(() => {
  switch (props.variant) {
    case "fade":
      return "opacity-0";
    case "fade-horizontal":
      return "-translate-x-5 opacity-0";
    case "fade-vertical":
      return "-translate-y-5 opacity-0";
    default:
      break;
  }
});

const computedToStyles = computed(() => {
  switch (props.variant) {
    case "fade":
      return "opacity-100";
    case "fade-horizontal":
      return "translate-x-0 opacity-100";
    case "fade-vertical":
      return "translate-y-0 opacity-100";
    default:
      break;
  }
});
</script>
<template>
  <transition
    enter-active-class="transform duration-200 ease-out"
    :enter-from-class="computedFromStyles"
    :enter-to-class="computedToStyles"
    leave-active-class="transform duration-200 ease-in"
    :leave-from-class="computedToStyles"
    :leave-to-class="computedFromStyles"
  >
    <slot />
  </transition>
</template>
