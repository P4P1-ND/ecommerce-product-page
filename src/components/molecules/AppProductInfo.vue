<script setup>
import ProductDescription from "../atoms/ProductDescription.vue";
import AddToCartButton from "../atoms/buttons/AddToCartButton.vue";
import ProductAmount from "./ProductAmount.vue";
</script>

<template>
  <article class="p-5 max-w-lg mx-auto sm:pt-14 lg:p-0">
    <h2 class="sr-only">Product Description</h2>
    <ProductDescription />
    <section class="mt-8 grid gap-3 sm:(justify-between grid-cols-[40%,56%])">
      <h2 class="sr-only">Add to cart</h2>
      <ProductAmount />
      <AddToCartButton />
    </section>
  </article>
</template>
