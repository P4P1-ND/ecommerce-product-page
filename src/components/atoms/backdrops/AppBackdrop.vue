<script setup>
import { ref } from "vue";

defineProps({
  state: { type: Boolean, required: true },
  isNavbar: { type: Boolean, default: false },
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
    <transition
      enter-active-class="transform duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transform duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      @after-enter="showContent = true"
    >
      <div
        tabindex="0"
        v-custom-directive
        @keyup.esc="close"
        @click.self="close"
        v-if="state"
        class="fixed inset-0 bg-neutral-600/60 z-2"
        :class="{ 'sm:hidden': isNavbar }"
      >
        <slot :close="close" :showContent="showContent" :emits="emits" />
      </div>
    </transition>
  </teleport>
</template>
