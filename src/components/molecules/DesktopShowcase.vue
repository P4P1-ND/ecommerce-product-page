<script setup>
import { inject } from "vue";

const store = inject("store");
const { imgList } = store.product;
</script>

<template>
  <button @click="handleBackdrop" class="rounded-3xl overflow-hidden">
    <img
      :src="`/img/products/${imgList[0]}.jpg`"
      class="h-full w-full object-cover"
      alt="Main Product Image"
    />
  </button>

  <ul class="mt-8 grid grid-cols-4 gap-5 relative">
    <li v-for="(img, idx) in imgList" :key="`product-${idx}`">
      <button class="rounded-lg overflow-hidden relative h-full">
        <img
          :src="`/img/products/${img}-thumbnail.jpg`"
          class="w-full h-full object-cover"
          :alt="`Product thumbnail #${idx}`"
        />
      </button>
    </li>
    <div class="absolute inset-0 grid grid-cols-4 gap-5 pointer-events-none">
      <div class="border-2 border-primary-800 rounded-lg bg-white/50 duration-300"></div>
    </div>
  </ul>
</template>
