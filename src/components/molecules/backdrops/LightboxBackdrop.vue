<script setup>
import { watchEffect, ref, inject } from "vue";
import CloseButton from "../../atoms/buttons/CloseButton.vue";
import AppBackdrop from "../../atoms/AppBackdrop.vue";
import AppAnimation from "../../atoms/AppAnimation.vue";
import AppButton from "../../atoms/buttons/AppButton.vue";
import IconPrevButton from "../../atoms/buttons/IconPrevButton.vue";
import IconNextButton from "../../atoms/buttons/IconNextButton.vue";

const store = inject("store");
const {
  imgList,
  mainImg,
  actions: { changeMainImg },
} = store.product;

const activeThumbnail = ref(null);
const index = ref(0);

watchEffect(() => {
  if (activeThumbnail.value) {
    index.value = imgList.value.findIndex((el) => el === mainImg.value);
    activeThumbnail.value.style.transform = `translateX(calc(${index.value} * (100% + 16px)))`;
  }
});

const nextItem = () => {
  if (index.value === imgList.value.length - 1) changeMainImg("image-product-1");
  else changeMainImg(`image-product-${index.value + 2}`);
};

const prevItem = () => {
  if (index.value === 0) changeMainImg(`image-product-${imgList.value.length}`);
  else changeMainImg(`image-product-${index.value}`);
};
</script>

<template>
  <AppBackdrop v-slot="{ emits, close, showContent }">
    <AppAnimation variant="fade-zoom" @after-leave="emits('update:state', false)">
      <div
        v-if="showContent"
        @click.self="close"
        class="
          h-screen
          max-w-[400px]
          mx-auto
          grid grid-flow-rows
          gap-8
          place-content-center
          2xl:max-w-lg
        "
      >
        <CloseButton variantClose="primary" @click="close" class="justify-self-end" />

        <div class="h-100 relative">
          <AppButton tabindex="-1" variant="flat" class="rounded-3xl overflow-hidden">
            <picture>
              <source type="image/avif" :srcset="`./img/products/${mainImg}.avif`" />
              <img
                width="400"
                height="400"
                class="w-full object-cover"
                :src="`./img/products/${mainImg}.jpg`"
                alt="Main Product Image"
              />
            </picture>
          </AppButton>

          <!-- Controls -->
          <div class="absolute inset-0 grid grid-flow-col justify-between items-center">
            <IconPrevButton @click="prevItem" class="transform -translate-x-1/2" />
            <IconNextButton @click="nextItem" class="transform translate-x-1/2" />
          </div>
        </div>

        <ul class="w-[85%] mx-auto grid grid-cols-4 gap-4 relative">
          <li v-for="(img, idx) in imgList" :key="`product-${idx}`" @click="changeMainImg(img)">
            <AppButton variant="flat" class="rounded-lg overflow-hidden w-full h-full group">
              <img
                :src="`./img/products/${img}-thumbnail.jpg`"
                class="w-full h-full object-cover transform group-focus:scale-120 duration-300"
                width="73"
                height="79"
                :alt="`Product thumbnail #${idx}`"
              />
            </AppButton>
          </li>
          <li class="absolute inset-0 grid grid-cols-4 gap-4 pointer-events-none">
            <div
              class="border-2 border-primary-800 rounded-lg bg-white/50 duration-200"
              ref="activeThumbnail"
            ></div>
          </li>
        </ul>
      </div>
    </AppAnimation>
  </AppBackdrop>
</template>
