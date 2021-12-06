<script setup>
import { inject } from "vue";
import AppButton from "./AppButton.vue";
import IconCart from "../icons/IconCart.vue";

const store = inject("store");
const {
  actions: { addProductToCart, isAmountEmpty },
} = store.cart;
</script>

<template>
  <AppButton
    @click="addProductToCart"
    class="
      bg-primary-800
      shadow-button
      hover:opacity-60
      focus:opacity-60
      disabled:(cursor-not-allowed
      filter
      brightness-70)
    "
    :disabled="isAmountEmpty()"
  >
    <IconCart color="white" />
    <span class="text-white text-base font-bold">Add to cart</span>
  </AppButton>
</template>
