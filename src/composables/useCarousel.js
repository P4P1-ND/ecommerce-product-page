import { watch, onMounted, onBeforeUnmount, reactive, shallowRef } from "vue";

const useCarousel = (carouselContainer) => {
  // https://www.sitepoint.com/vue-3-reactivity-system/#shallowmethods
  // shallowRef creates a ref which tracks only its value property without making its value reactive.
  const resizer = shallowRef()
  const carouselDOM = shallowRef()

  const carousel = reactive({
    itemLength: 0,
    position: 0,
    fullWidth: 0,
    displayWidth: 0
  });


  watch(
    () => carousel.displayWidth,
    () => {
      carousel.fullWidth = carousel.itemLength * carousel.displayWidth
      carouselDOM.value.style.width = `${carousel.fullWidth}px`

      // On resize reset the position
      carousel.position = 0
    }
  )

  watch(
    () => carousel.position,
    () => carouselDOM.value.style.transform = `translateX(${carousel.position}px)`
  )

  onMounted(() => {
    carouselDOM.value = carouselContainer.value.children[1]
    carousel.itemLength = carouselDOM.value.children.length

    resizer.value = new ResizeObserver((entries) => {
      for(let entry of entries) {
        carousel.displayWidth = entry.contentBoxSize
          ? entry.contentBoxSize[0].inlineSize
          : entry.contentRect.width
      } 
    })

    resizer.value.observe(carouselContainer.value)
  })

  const nextPhoto = () => {
    carousel.position -= carousel.displayWidth
    if (carousel.position === -carousel.fullWidth) carousel.position = 0;
  }

  const prevPhoto = () => {
    carousel.position += carousel.displayWidth
    if (carousel.position === carousel.displayWidth)
      carousel.position = carousel.displayWidth - carousel.fullWidth;
  }

  onBeforeUnmount(() => resizer.value.disconnect())

  return { nextPhoto, prevPhoto };
};

export default useCarousel;
