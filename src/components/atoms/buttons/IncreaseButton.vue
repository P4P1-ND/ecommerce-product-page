<script setup>
import AppButton from "./AppButton.vue";
import IconPlus from "../icons/IconPlus.vue";
</script>

<template>
  <AppButton variant="icon" aria-label="Increase amount" class="group focus:bg-primary-200">
    <IconPlus class="group-hover:text-primary-800/50" />
  </AppButton>
</template>
