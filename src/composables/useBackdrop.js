import { ref, readonly } from "vue";

const useBackdrop = () => {
  const backdropState = ref(false);
  const openBackdrop = () => (backdropState.value = true);
  const closeBackdrop = () => (backdropState.value = false);

  return {
    backdropState: readonly(backdropState),
    openBackdrop,
    closeBackdrop,
  };
};

export default useBackdrop;
