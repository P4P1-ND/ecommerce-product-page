<script setup>
import AppButton from "./AppButton.vue";
import IconDelete from "../icons/IconDelete.vue";
</script>

<template>
  <AppButton variant="icon" class="p-3 group">
    <IconDelete class="group-hover:text-neutral-600 group-focus:text-neutral-600" />
  </AppButton>
</template>
