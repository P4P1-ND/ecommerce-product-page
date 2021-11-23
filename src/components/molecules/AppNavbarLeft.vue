<script setup>
import MenuButton from "../atoms/buttons/MenuButton.vue";
import LogoButton from "../atoms/buttons/LogoButton.vue";
import LinkList from "../atoms/LinkList.vue";
import NavbarBackdrop from "../atoms/backdrops/NavbarBackdrop.vue";
import useBackdrop from "../../composables/useBackdrop";
import useMedia from "../../composables/useMedia";

const { backdropState, openBackdrop, closeBackdrop } = useBackdrop();
const { showOn } = useMedia();
</script>

<template>
  <div class="h-16 inline-grid grid-flow-col gap-5 md:(h-28 gap-8) lg:gap-14">
    <LogoButton />
    <LinkList v-if="showOn('tablet')" class="inline-grid grid-flow-col gap-3 md:gap-8" />
    <template v-else>
      <MenuButton @click="openBackdrop" class="order-first" />
      <NavbarBackdrop :state="backdropState" @update:state="closeBackdrop" />
    </template>
  </div>
</template>
