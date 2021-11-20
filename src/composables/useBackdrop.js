import { ref, readonly } from "vue";

export default () => {
  const backdropState = ref(false);
  const openBackdrop = () => (backdropState.value = true);
  const closeBackdrop = () => (backdropState.value = false);

  return {
    backdropState: readonly(backdropState),
    openBackdrop,
    closeBackdrop,
  };
};
