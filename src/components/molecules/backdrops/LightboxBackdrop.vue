<script setup>
import { inject } from "vue";
import CloseButton from "../../atoms/buttons/CloseButton.vue";
import AppBackdrop from "../../atoms/AppBackdrop.vue";
import AppAnimation from "../../atoms/AppAnimation.vue";
import AppButton from "../../atoms/buttons/AppButton.vue";

const store = inject("store");
const { imgList, mainImg } = store.product;
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
          2xl:max-w-xl
        "
      >
        <CloseButton variantClose="primary" @click="close" class="justify-self-end" />
        <AppButton variant="flat" class="rounded-3xl overflow-hidden">
          <picture>
            <source type="image/avif" :srcset="`/img/products/${mainImg}.avif`" />
            <img
              width="400"
              height="400"
              :src="`/img/products/${mainImg}.jpg`"
              alt="Main Product Image"
            />
          </picture>
        </AppButton>

        <ul class="w-[85%] mx-auto grid grid-cols-4 gap-4 relative">
          <li v-for="(img, idx) in imgList" :key="`product-${idx}`">
            <AppButton variant="flat" class="rounded-lg overflow-hidden w-full h-full">
              <img
                :src="`/img/products/${img}-thumbnail.jpg`"
                class="w-full h-full object-cover"
                width="73"
                height="79"
                :alt="`Product thumbnail #${idx}`"
              />
            </AppButton>
          </li>
          <li class="absolute inset-0 grid grid-cols-4 gap-4 pointer-events-none">
            <div class="border-2 border-primary-800 rounded-lg bg-white/50 duration-200"></div>
          </li>
        </ul>
      </div>
    </AppAnimation>
  </AppBackdrop>
</template>
