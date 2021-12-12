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
  <!-- https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2 -->
  <AppButton variant="flat" class="group" aria-label="Cart Button">
    <span
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
    </span>
    <IconCart class="group-hover:text-neutral-800 group-focus:text-neutral-800" />
  </AppButton>
</template>
