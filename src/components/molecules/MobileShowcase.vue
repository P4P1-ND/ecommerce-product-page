<script setup>
import useCarousel from "../../composables/useCarousel";
import IconPrevButton from "../atoms/buttons/IconPrevButton.vue";
import IconNextButton from "../atoms/buttons/IconNextButton.vue";

const { imgList, container, nextPhoto, prevPhoto } = useCarousel();
</script>

<template>
  <section class="relative h-full overflow-hidden">
    <div class="absolute inset-0 grid grid-flow-col duration-500" ref="container">
      <!-- Items of the carousel -->
      <img
        v-for="(img, idx) in imgList"
        :key="`product-${idx}`"
        class="w-full h-full object-cover"
        :src="`/products/${img}.jpg`"
        :alt="`Product Image #${idx + 1}`"
      />
    </div>
    <!-- Controls of the carousel -->
    <div class="absolute inset-x-3 inset-y-0 grid grid-flow-col justify-between items-center">
      <IconPrevButton @click="prevPhoto" />
      <IconNextButton @click="nextPhoto" />
    </div>
  </section>
</template>
