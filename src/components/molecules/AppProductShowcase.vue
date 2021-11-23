<script setup>
import MobileShowcase from "./MobileShowcase.vue";
import DesktopShowcase from "./DesktopShowcase.vue";
import useMedia from "../../composables/useMedia";

const { showOn } = useMedia();
</script>

<template>
  <div class="h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto">
    <component :is="showOn('desktop') ? DesktopShowcase : MobileShowcase"></component>
  </div>
</template>
