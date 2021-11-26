<script setup>
import AppNavbarRight from "../molecules/AppNavbarRight.vue";
import AppNavbarLeft from "../molecules/AppNavbarLeft.vue";
</script>

<template>
  <nav
    class="
      relative
      px-6
      grid grid-flow-col
      items-center
      justify-between
      lg:(border-b-2
      border-neutral-200)
    "
  >
    <AppNavbarLeft />
    <AppNavbarRight />
  </nav>
</template>
