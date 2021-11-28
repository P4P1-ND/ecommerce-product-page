<script setup>
import AppButton from "./AppButton.vue";
import IconPrevious from "../icons/IconPrevious.vue";
</script>

<template>
  <AppButton
    variant="icon"
    class="w-10 h-10 bg-white rounded-full group"
    aria-label="Scroll to previous item"
  >
    <IconPrevious
      class="mr-0.5 group-focus:text-primary-800 group-hover:text-primary-800 duration-300"
    />
  </AppButton>
</template>
