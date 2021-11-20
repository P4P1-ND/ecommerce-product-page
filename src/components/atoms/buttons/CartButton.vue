<script setup>
import AppButton from "./AppButton.vue";
import IconCart from "../icons/IconCart.vue";
</script>

<template>
  <AppButton variant="flat" class="group">
    <div class="absolute -top-2 -right-3 w-6 rounded-lg bg-primary-800 grid">
      <span class="text-xs font-bold text-neutral-200">2</span>
    </div>
    <IconCart class="group-hover:text-neutral-800 group-focus:text-neutral-800" />
  </AppButton>
</template>
