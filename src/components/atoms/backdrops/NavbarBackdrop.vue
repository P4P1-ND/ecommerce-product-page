<script setup>
import LinkList from "../LinkList.vue";
import CloseButton from "../buttons/CloseButton.vue";
import AppBackdrop from "./AppBackdrop.vue";
import AppAnimation from "../AppAnimation.vue";

// https://medium.com/@Taha_Shashtari/how-to-apply-nested-transitions-in-vue-d3a9fe1e1c98
</script>

<template>
  <AppBackdrop v-slot="{ emits, close, showContent }">
    <AppAnimation variant="fade-horizontal" @after-leave="emits('update:state', false)">
      <div class="p-6 h-screen bg-white w-2/3" v-if="showContent">
        <CloseButton @click="close" />
        <LinkList class="mt-10 space-y-5" />
      </div>
    </AppAnimation>
  </AppBackdrop>
</template>
