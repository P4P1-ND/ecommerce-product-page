<script setup>
import AppNavbarRight from "../molecules/AppNavbarRight.vue";
import AppNavbarLeft from "../molecules/AppNavbarLeft.vue";
</script>

<template>
  <nav
    class="px-6 grid grid-flow-col items-center justify-between lg:border-b lg:border-neutral-400"
  >
    <AppNavbarLeft />
    <AppNavbarRight />
  </nav>
</template>
