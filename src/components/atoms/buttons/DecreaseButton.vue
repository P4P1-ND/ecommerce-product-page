<script setup>
import AppButton from "./AppButton.vue";
import IconMinus from "../icons/IconMinus.vue";
</script>

<template>
  <AppButton variant="icon" aria-label="Decrease amount" class="group focus:bg-primary-200">
    <IconMinus class="group-hover:text-primary-800/50" />
  </AppButton>
</template>
