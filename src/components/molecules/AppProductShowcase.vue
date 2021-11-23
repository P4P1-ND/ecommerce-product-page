<script setup>
import MobileShowcase from "./MobileShowcase.vue";
import DesktopShowcase from "./DesktopShowcase.vue";
import useMedia from "../../composables/useMedia";

const { showOn } = useMedia();
</script>

<template>
  <div
    class="
      h-[300px]
      sm:h-[400px]
      md:h-[600px]
      lg:h-auto
      bg-primary-200
      grid
      place-content-center
      text-2xl text-black
    "
  >
    <component :is="showOn('desktop') ? DesktopShowcase : MobileShowcase"></component>
  </div>
</template>
