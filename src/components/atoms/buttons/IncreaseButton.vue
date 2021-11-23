<script setup>
import AppButton from "./AppButton.vue";
import IconPlus from "../icons/IconPlus.vue";
</script>

<template>
  <AppButton variant="icon" aria-label="Increase amount" class="group">
    <IconPlus class="group-focus:text-primary-800/50 group-hover:text-primary-800/50" />
  </AppButton>
</template>
