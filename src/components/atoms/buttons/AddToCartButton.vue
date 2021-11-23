<script setup>
import AppButton from "./AppButton.vue";
import IconCart from "../icons/IconCart.vue";
</script>

<template>
  <AppButton
    class="bg-primary-800 w-full shadow-custom filter hover:brightness-125 focus:brightness-125"
  >
    <IconCart class="text-white" />
    <span class="text-white text-base font-bold">Add to cart</span>
  </AppButton>
</template>
