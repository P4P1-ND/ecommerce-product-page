<script setup>
import AppButton from "./AppButton.vue";
import IconClose from "../icons/IconClose.vue";
</script>

<template>
  <AppButton variant="icon" class="group p-0" aria-label="Close Button">
    <IconClose class="group-hover:text-neutral-800 group-focus:text-neutral-800" />
  </AppButton>
</template>
