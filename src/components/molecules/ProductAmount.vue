<script setup>
import { inject } from "vue";
import DecreaseButton from "../atoms/buttons/DecreaseButton.vue";
import IncreaseButton from "../atoms/buttons/IncreaseButton.vue";

const store = inject("store");
const {
  amountToAdd,
  actions: { increaseAmount, decreaseAmount, isAmountEmpty },
} = store.cart;
const { stock } = store.product;
</script>

<template>
  <div
    class="
      bg-neutral-200
      rounded-lg
      grid grid-flow-col
      items-center
      justify-between
      overflow-hidden
    "
  >
    <DecreaseButton
      @click="decreaseAmount"
      class="disabled:cursor-not-allowed"
      :disabled="isAmountEmpty()"
    />
    <span class="text-neutral-800 text-xl font-bold">{{ amountToAdd }}</span>
    <IncreaseButton
      @click="increaseAmount"
      class="disabled:cursor-not-allowed"
      :disabled="amountToAdd === stock"
    />
  </div>
</template>
