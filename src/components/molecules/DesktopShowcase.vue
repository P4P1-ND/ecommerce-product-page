<script setup>
import { ref, inject, watch } from "vue";
import AppButton from "../atoms/buttons/AppButton.vue";
import LightboxBackdrop from "./backdrops/LightboxBackdrop.vue";
import useBackdrop from "../../composables/useBackdrop";

const { backdropState, openBackdrop, closeBackdrop } = useBackdrop();
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
  <AppButton @click="openBackdrop" variant="flat" class="group rounded-3xl overflow-hidden">
    <picture>
      <source type="image/avif" :srcset="`/img/products/${mainImg}.avif`" />
      <img
        width="418"
        height="418"
        :src="`/img/products/${mainImg}.jpg`"
        class="w-full object-center transform group-focus:opacity-50"
        alt="Main Product Image"
      />
    </picture>
  </AppButton>

  <ul class="mt-8 grid grid-cols-4 gap-5 relative">
    <li v-for="(img, idx) in imgList" :key="`product-${idx}`" @click="changeMainImg(img)">
      <AppButton variant="flat" class="group rounded-lg overflow-hidden w-full h-full">
        <img
          :src="`/img/products/${img}-thumbnail.jpg`"
          width="90"
          height="90"
          class="w-full h-full object-cover group-focus:opacity-50"
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
  <LightboxBackdrop :state="backdropState" @update:state="closeBackdrop" />
</template>
