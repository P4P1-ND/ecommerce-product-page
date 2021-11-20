<script setup>
import AppButton from "./AppButton.vue";
import IconMenu from "../icons/IconMenu.vue";
</script>

<template>
  <AppButton variant="flat" class="group">
    <IconMenu class="group-hover:text-neutral-800 group-focus:text-neutral-800" />
    <div
      class="
        absolute
        -inset-x-2
        inset-y-4
        border-2 border-neutral-800
        rounded-full
        opacity-0
        group-focus:opacity-100
      "
    ></div>
  </AppButton>
</template>
