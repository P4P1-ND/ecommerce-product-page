<script setup>
import AppBackdrop from "../../atoms/AppBackdrop.vue";
import AppAnimation from "../../atoms/AppAnimation.vue";
</script>

<template>
  <AppBackdrop v-slot="{ emits, close, showContent }">
    <AppAnimation variant="fade-zoom" @after-leave="emits('update:state', false)">
      <div
        v-if="showContent"
        @click.self="close"
        class="px-3 h-screen max-w-sm mx-auto w-full grid items-center"
      >
        <div class="px-5 h-40 bg-white rounded-lg grid place-content-center sm:px-8">
          <div class="text-neutral-800 text-center">
            Challenge by
            <a
              class="text-primary-800 hover:underline"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor </a
            >. Coded by
            <a
              class="text-primary-800 hover:underline"
              href="https://github.com/P4P1-ND"
              target="_blank"
              rel="noopener noreferrer"
            >
              Papy NDOYE </a
            >.
          </div>
        </div>
      </div>
    </AppAnimation>
  </AppBackdrop>
</template>
