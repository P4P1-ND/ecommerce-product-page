<script setup>
import AppButton from "./AppButton.vue";
import IconClose from "../icons/IconClose.vue";
</script>

<template>
  <AppButton variant="flat" class="group" aria-label="Close Button">
    <IconClose class="group-hover:text-neutral-800 group-focus:text-neutral-800" />
  </AppButton>
</template>
