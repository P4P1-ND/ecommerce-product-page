<script setup>
import { inject, ref } from "vue";
import useCarousel from "../../composables/useCarousel";
import IconPrevButton from "../atoms/buttons/IconPrevButton.vue";
import IconNextButton from "../atoms/buttons/IconNextButton.vue";

const store = inject("store");
const { imgList } = store.product;

const carouselContainer = ref()
const { nextPhoto, prevPhoto } = useCarousel(carouselContainer);
</script>

<template>
  <section class="relative h-full overflow-hidden" ref="carouselContainer">
    <div class="absolute inset-0 grid grid-flow-col duration-500">
      <!-- Items of the carousel -->
      <!-- https://codelabs.developers.google.com/codelabs/avif#0 -->
      <picture v-for="(img, idx) in imgList">
        <source type="image/avif" :srcset="`./img/products/${img}.avif`" />
        <img
          :key="`product-${idx}`"
          class="w-full h-full object-cover"
          width="375"
          height="400"
          :src="`./img/products/${img}.jpg`"
          :alt="`Product Image #${idx + 1}`"
        />
      </picture>
    </div>
    <!-- Controls of the carousel -->
    <div class="absolute inset-x-3 inset-y-0 grid grid-flow-col justify-between items-center">
      <IconPrevButton @click="prevPhoto" />
      <IconNextButton @click="nextPhoto" />
    </div>
  </section>
</template>
