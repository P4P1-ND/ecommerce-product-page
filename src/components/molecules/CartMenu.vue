<script setup>
import ItemCheckout from "./ItemCheckout.vue";
</script>

<template>
  <div
    class="
      absolute
      top-full
      inset-x-3
      max-w-[360px]
      mt-3
      ml-auto
      bg-white
      rounded-lg
      shadow-cart
      z-5
      md:top-2/3
      xl:-right-10
    "
  >
    <header class="p-5 border-b-2 border-neutral-200">
      <h2 class="text-black font-bold">Cart</h2>
    </header>
    <ItemCheckout />
  </div>
</template>
