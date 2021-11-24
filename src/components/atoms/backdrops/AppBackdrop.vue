<script setup>
import { ref } from "vue";
import AppAnimation from "../AppAnimation.vue";

defineProps({
  state: { type: Boolean, required: true },
});

const showContent = ref(false);

const emits = defineEmits(["update:state"]);
const close = () => (showContent.value = false);

// Custom Directives
// https://v3.vuejs.org/api/sfc-script-setup.html#using-custom-directives
const vCustomDirective = {
  mounted: (el) => {
    el.focus();
    document.body.style.overflow = "hidden";
  },
  unmounted: () => {
    document.body.style.overflow = "auto";
  },
};
</script>

<template>
  <teleport to="body">
    <AppAnimation variant="fade" @after-enter="showContent = true">
      <div
        tabindex="0"
        v-custom-directive
        @keyup.esc="close"
        @click.self="close"
        v-if="state"
        class="fixed inset-0 bg-black/75"
      >
        <slot :close="close" :showContent="showContent" :emits="emits" />
      </div>
    </AppAnimation>
  </teleport>
</template>
