<script setup>
import ProductDescription from "../atoms/ProductDescription.vue";
import AddToCartButton from "../atoms/buttons/AddToCartButton.vue";
import ProductAmount from "./ProductAmount.vue";
</script>

<template>
  <article class="p-5 max-w-lg mx-auto sm:pt-14 lg:p-0">
    <ProductDescription />
    <div class="mt-8 grid gap-3 sm:(justify-between grid-cols-[40%,56%])">
      <ProductAmount />
      <AddToCartButton />
    </div>
  </article>
</template>
