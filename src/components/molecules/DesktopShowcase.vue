<script setup>
import { ref, inject, watch } from "vue";
import AppButton from "../atoms/buttons/AppButton.vue";

const store = inject("store");
const {
  imgList,
  mainImg,
  actions: { changeMainImg },
} = store.product;

const activeThumbnail = ref(null);

watch(mainImg, () => {
  const index = imgList.value.findIndex((el) => el === mainImg.value);
  activeThumbnail.value.style.transform = `translateX(calc(${index} * (100% + 20px)))`;
});
</script>

<template>
  <AppButton variant="flat" class="rounded-3xl overflow-hidden">
    <img
      :src="`/img/products/${mainImg}.jpg`"
      class="h-full w-full object-cover"
      alt="Main Product Image"
    />
  </AppButton>

  <ul class="mt-8 grid grid-cols-4 gap-5 relative">
    <li v-for="(img, idx) in imgList" :key="`product-${idx}`" @click="changeMainImg(img)">
      <AppButton variant="flat" class="rounded-lg overflow-hidden w-full h-full">
        <img
          :src="`/img/products/${img}-thumbnail.jpg`"
          class="w-full h-full object-cover"
          :alt="`Product thumbnail #${idx}`"
        />
      </AppButton>
    </li>
    <li class="absolute inset-0 grid grid-cols-4 gap-5 pointer-events-none">
      <div
        class="border-2 border-primary-800 rounded-lg bg-white/50 duration-200"
        ref="activeThumbnail"
      ></div>
    </li>
  </ul>
</template>
