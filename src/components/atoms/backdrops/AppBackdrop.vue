<script setup>
defineProps({ state: { type: Boolean, required: true } });

const emits = defineEmits(["update:state"]);
const close = () => emits("update:state", false);

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
    <div
      tabindex="0"
      v-custom-directive
      @keyup.esc="close"
      @click.self="close"
      v-if="state"
      class="fixed inset-0 bg-neutral-600/60 z-2"
    >
      <slot :close="close" />
    </div>
  </teleport>
</template>
