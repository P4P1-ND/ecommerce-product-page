<script setup>
import { inject } from "vue";
import CartButton from "../atoms/buttons/CartButton.vue";
import AvatarButton from "../atoms/buttons/AvatarButton.vue";
import CartMenu from "./CartMenu.vue";

const store = inject("store");
const {
  actions: { handleCartMenu },
} = store.cart;
</script>

<template>
  <div class="h-full inline-grid grid-flow-col items-center gap-5 md:gap-8">
    <CartButton @click.stop="handleCartMenu" />
    <AvatarButton />
    <CartMenu />
  </div>
</template>
