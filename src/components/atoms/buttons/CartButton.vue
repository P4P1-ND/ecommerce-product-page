<script setup>
import { inject } from "vue";
import AppButton from "./AppButton.vue";
import IconCart from "../icons/IconCart.vue";

const store = inject("store");
const {
  qty,
  actions: { isCartEmpty },
} = store.cart;
</script>

<template>
  <AppButton variant="flat" class="group" aria-label="Cart Button">
    <div
      :class="[isCartEmpty() ? 'hidden' : 'block']"
      class="
        absolute
        -top-2
        -right-3
        w-6
        rounded-lg
        bg-primary-800
        grid
        group-hover:animate-bounce
        group-focus:animate-bounce
      "
    >
      <span class="text-xs font-bold text-neutral-200">{{ qty }}</span>
    </div>
    <IconCart class="group-hover:text-neutral-800 group-focus:text-neutral-800" />
  </AppButton>
</template>
