<script setup>
import { ref } from "vue";

const linkList = ref(["Collections", "Men", "Women", "About", "Contact"]);
</script>

<template>
  <ul>
    <li
      tabindex="0"
      v-for="link in linkList"
      :key="link"
      class="relative group focus:outline-none sm:(inline-grid items-center)"
    >
      <div
        class="
          absolute
          w-full
          h-1
          bg-primary-800
          opacity-0
          bottom-4
          transform
          duration-150
          hidden
          sm:block
          md:bottom-8
          lg:bottom-1
          group-hover:(opacity-100
          translate-y-1)
          group-focus:(opacity-100
          translate-y-1)
        "
      ></div>
      <a
        tabindex="-1"
        href="#!"
        class="
          text-neutral-800 text-lg
          font-bold
          sm:(text-neutral-600
          text-base
          font-normal)
          group-focus:text-black
        "
      >
        {{ link }}
      </a>
    </li>
  </ul>
</template>
