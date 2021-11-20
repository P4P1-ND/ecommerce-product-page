import { ref, readonly } from "vue";

const backdropState = ref(false);

const openBackdrop = () => (backdropState.value = true);
const closeBackdrop = () => (backdropState.value = false);

export default () => {
  return {
    backdropState: readonly(backdropState),
    openBackdrop,
    closeBackdrop,
  };
};
