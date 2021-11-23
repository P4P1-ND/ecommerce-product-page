<script setup>
import DecreaseButton from "../atoms/buttons/DecreaseButton.vue";
import IncreaseButton from "../atoms/buttons/IncreaseButton.vue";
</script>

<template>
  <div class="bg-neutral-200 rounded-lg grid grid-flow-col items-center justify-between">
    <DecreaseButton />
    <span class="text-neutral-800 text-xl font-bold">0</span>
    <IncreaseButton />
  </div>
</template>
