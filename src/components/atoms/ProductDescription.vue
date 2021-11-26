<script setup>
import { inject } from "vue";

const store = inject("store");

const { description, tag, name, oldPrice, discount, newPrice } = store.product;
</script>
<template>
  <section>
    <span class="text-xs font-bold text-primary-800 uppercase tracking-[2px]">
      {{ tag }}
    </span>
    <h1 class="mt-2 text-neutral-800 text-3xl font-bold md:text-5xl lg:mt-4">
      {{ name }}
    </h1>
    <p class="mt-4 text-neutral-600 leading-relaxed lg:mt-8">
      {{ description }}
    </p>
  </section>

  <aside class="mt-6 grid grid-flow-col items-center justify-between sm:(grid-flow-row gap-1)">
    <div class="inline-grid grid-flow-col items-center gap-4">
      <h2 class="text-neutral-800 text-3xl font-bold">{{ newPrice }}</h2>
      <span class="px-2 py-px bg-primary-200 text-primary-800 text-base font-bold rounded-md">
        {{ discount }}
      </span>
    </div>
    <span class="text-neutral-400 text-base font-bold line-through">{{ oldPrice }}</span>
  </aside>
</template>
