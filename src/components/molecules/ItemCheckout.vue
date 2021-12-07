<script setup>
import { inject } from "vue";
import AppButton from "../atoms/buttons/AppButton.vue";
import DeleteButton from "../atoms/buttons/DeleteButton.vue";
import useBackdrop from "../../composables/useBackdrop";
import CheckoutBackdrop from "./backdrops/CheckoutBackdrop.vue";

const { backdropState, openBackdrop, closeBackdrop } = useBackdrop();

const store = inject("store");
const {
  actions: { isCartEmpty, deleteProduct },
  qty,
  total,
  product,
} = store.cart;
</script>

<template>
  <section class="px-5 py-8 h-48 grid place-content-center">
    <p v-if="isCartEmpty()" class="text-neutral-600 font-bold text-base">Your cart is empty.</p>

    <article v-else class="space-y-6">
      <div class="grid grid-cols-[1fr,auto] gap-3 items-center">
        <div class="grid grid-cols-[auto,1fr] space-x-3">
          <img
            width="48"
            height="48"
            :src="`/img/products/${product.img}-thumbnail.jpg`"
            alt="Product's thumbnail"
            class="w-12 h-12 object-center rounded"
          />
          <!-- TODO: Investigate why I have to repeat the truncate class in order for it to actually work -->
          <div class="truncate text-neutral-600">
            <h3 class="truncate">{{ product.name }}</h3>
            <p>
              {{ product.price }} x {{ qty }}
              <span class="font-bold text-black">{{ total }}</span>
            </p>
          </div>
        </div>
        <DeleteButton @click="deleteProduct" />
      </div>

      <AppButton
        @click="openBackdrop"
        class="font-bold bg-primary-800 text-white hover:opacity-70 focus:opacity-70"
      >
        Checkout
      </AppButton>

      <CheckoutBackdrop :state="backdropState" @update:state="closeBackdrop" />
    </article>
  </section>
</template>
