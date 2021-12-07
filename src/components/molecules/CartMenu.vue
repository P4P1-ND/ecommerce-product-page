<script setup>
import { inject } from "vue";
import ItemCheckout from "./ItemCheckout.vue";
import AppAnimation from "../atoms/AppAnimation.vue";

const store = inject("store");

const {
  actions: { handleCartMenu },
  openCartMenu,
} = store.cart;

// https://stackoverflow.com/questions/36170425/detect-click-outside-element#answer-64698630
const vClickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      // here I check that click was outside the el and his children
      // Need to limit the event to #app so that it doesn't activate when a backdrop is open
      // Because the backdrop is injected into the DOM outside of #app
      const appDOM = document.querySelector("#app");
      if (appDOM.contains(event.target) && !(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  mounted: (el) => {
    el.focus();
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
</script>

<template>
  <AppAnimation variant="fade-vertical">
    <div
      tabindex="0"
      @keyup.esc="handleCartMenu"
      v-if="openCartMenu"
      v-click-outside="handleCartMenu"
      class="
        absolute
        top-full
        inset-x-3
        max-w-[360px]
        mt-3
        ml-auto
        bg-white
        rounded-lg
        shadow-cart
        z-5
        md:top-2/3
        xl:-right-10
        focus:outline-none
      "
    >
      <header class="p-5 border-b-2 border-neutral-200">
        <h2 class="text-black font-bold">Cart</h2>
      </header>
      <ItemCheckout />
    </div>
  </AppAnimation>
</template>
