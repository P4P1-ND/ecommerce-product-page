import { reactive, toRefs } from "vue";
import product from "./product";
import formatPrice from "../lib/formatPrice";

const { name, mainImg, newPrice, stock, actions: productActions } = product();

const state = reactive({
  qty: 0,
  total: 0,
  amountToAdd: 0,
  product: {},
  openCartMenu: false,
});

const actions = {
  handleCartMenu: () => (state.openCartMenu = !state.openCartMenu),
  isCartEmpty: () => state.qty === 0,
  isAmountEmpty: () => state.amountToAdd === 0,
  increaseAmount: () => {
    if (state.amountToAdd < stock.value) state.amountToAdd++;
  },
  decreaseAmount: () => {
    if (state.amountToAdd > 0) state.amountToAdd--;
  },
  deleteProduct: () => {
    state.product = {};
    state.total = 0;
    state.qty = 0;

    productActions.resetStock();
  },
  addProductToCart: () => {
    if (actions.isAmountEmpty()) return;

    state.qty += state.amountToAdd;
    updateTotal();
    createProduct();
    productActions.decreaseStock(state.amountToAdd);
    state.amountToAdd = 0;
  },
};

const updateTotal = () => {
  const total = state.qty * parseInt(newPrice.value.slice(1));

  state.total = formatPrice(total);
};

const createProduct = () => {
  state.product = {
    name: name.value,
    img: mainImg.value,
    price: newPrice.value,
  };
};

export default () => {
  return {
    ...toRefs(state),
    actions,
  };
};
