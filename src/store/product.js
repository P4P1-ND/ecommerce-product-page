import { reactive, toRefs, computed } from "vue";

const { format: formatPrice } = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const state = reactive({
  name: "Fall Limited Edition Sneakers",
  tag: "sneaker company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: {
    normal: 250,
    discount: 50,
  },
  imgList: ["image-product-1", "image-product-2", "image-product-3", "image-product-4"],
  selectedImg: null,
});

const getters = reactive({
  oldPrice: computed(() => formatPrice(state.price.normal)),
  discount: computed(() => `${state.price.discount}%`),
  newPrice: computed(() => {
    const priceReduced = (state.price.normal * state.price.discount) / 100;

    return formatPrice(priceReduced);
  }),
});

export default () => {
  return {
    ...toRefs(state),
    ...toRefs(getters),
  };
};
