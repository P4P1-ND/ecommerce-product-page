<script setup>
import AppProductInfo from "../molecules/AppProductInfo.vue";
import AppProductShowcase from "../molecules/AppProductShowcase.vue";
</script>

<template>
  <main class="grid lg:(mt-20 px-10 grid-cols-[45%,40%] items-center justify-between)">
    <h1 class="sr-only">Product Page</h1>
    <AppProductShowcase />
    <AppProductInfo />
  </main>
</template>
