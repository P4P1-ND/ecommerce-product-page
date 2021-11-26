<script setup>
import { inject, computed } from "vue";
import AppButton from "./AppButton.vue";
import IconCart from "../icons/IconCart.vue";

const store = inject("store");
const {
  actions: { addProductToCart, isAmountEmpty },
} = store.cart;

const computedStyles = computed(() => {
  return isAmountEmpty()
    ? "cursor-not-allowed brightness-70"
    : "shadow-button hover:brightness-125 focus:brightness-125";
});
</script>

<template>
  <AppButton @click="addProductToCart" :class="computedStyles" class="bg-primary-800 filter">
    <IconCart color="white" />
    <span class="text-white text-base font-bold">Add to cart</span>
  </AppButton>
</template>
