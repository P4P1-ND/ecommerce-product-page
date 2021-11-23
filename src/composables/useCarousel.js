import { ref, toRefs, reactive, onMounted, watch } from "vue";
import useMedia from "./useMedia";

const useCarousel = () => {
  const state = reactive({
    imgList: ["image-product-1", "image-product-2", "image-product-3", "image-product-4"],
    selectedImg: null,
  });

  const { screenSize } = useMedia();

  const container = ref(null);
  const carousel = reactive({
    itemLength: state.imgList.length,
    position: 0,
    fullWidth: 0,
  });

  const calcuteCarouselWidth = () => {
    carousel.fullWidth = carousel.itemLength * screenSize.value;
    container.value.style.width = `${carousel.fullWidth}px`;
    // revert to first item on screen resize
    carousel.position = 0;
    container.value.style.transform = "translateX(0)";
  };

  onMounted(() => calcuteCarouselWidth());
  watch(screenSize, () => calcuteCarouselWidth());

  const prevPhoto = () => {
    carousel.position += screenSize.value;
    if (carousel.position === screenSize.value)
      carousel.position = screenSize.value - carousel.fullWidth;
    container.value.style.transform = `translateX(${carousel.position}px)`;
  };

  const nextPhoto = () => {
    carousel.position -= screenSize.value;
    if (carousel.position === -carousel.fullWidth) carousel.position = 0;
    container.value.style.transform = `translateX(${carousel.position}px)`;
  };

  return { ...toRefs(state), container, nextPhoto, prevPhoto };
};

export default useCarousel;
