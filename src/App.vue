<script setup>
import { provide } from "vue";
import AppNavbar from "./components/organisms/AppNavbar.vue";
import AppProduct from "./components/organisms/AppProduct.vue";
import store from "./store";

provide("store", store);
</script>

<template>
  <div class="pb-20 max-w-5xl mx-auto lg:max-w-6xl 2xl:max-w-7xl">
    <AppNavbar />
    <AppProduct />
  </div>
</template>
