<script setup>
import LinkList from "../LinkList.vue";
import CloseButton from "../buttons/CloseButton.vue";
import AppBackdrop from "./AppBackdrop.vue";
</script>

<template>
  <AppBackdrop v-slot="{ close }">
    <div class="p-6 h-screen bg-white w-2/3">
      <CloseButton @click="close" />
      <LinkList class="mt-10 space-y-5" />
    </div>
  </AppBackdrop>
</template>
