<script setup>
import LinkList from "../LinkList.vue";
import CloseButton from "../buttons/CloseButton.vue";
import AppBackdrop from "./AppBackdrop.vue";

// https://medium.com/@Taha_Shashtari/how-to-apply-nested-transitions-in-vue-d3a9fe1e1c98
</script>

<template>
  <AppBackdrop v-slot="{ close, showContent }">
    <transition
      enter-active-class="transform duration-300 ease-out"
      enter-from-class="-translate-x-5 opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transform duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div class="p-6 h-screen bg-white w-2/3" v-if="showContent">
        <CloseButton @click="close" />
        <LinkList class="mt-10 space-y-5" />
      </div>
    </transition>
  </AppBackdrop>
</template>
