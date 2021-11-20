<script setup>
import MenuButton from "../atoms/buttons/MenuButton.vue";
import LogoButton from "../atoms/buttons/LogoButton.vue";
import LinkList from "../atoms/LinkList.vue";
import NavbarBackdrop from "../atoms/backdrops/NavbarBackdrop.vue";
import useBackdrop from "../../composables/useBackdrop";

const { backdropState, openBackdrop, closeBackdrop } = useBackdrop();
</script>

<template>
  <div class="h-16 inline-grid grid-flow-col gap-5 md:h-28 md:gap-8 lg:gap-14">
    <MenuButton @click="openBackdrop" class="sm:hidden" />
    <LogoButton />
    <LinkList class="hidden sm:inline-grid grid-flow-col gap-3 md:gap-8" />
    <NavbarBackdrop class="sm:hidden" :state="backdropState" @update:state="closeBackdrop" />
  </div>
</template>
