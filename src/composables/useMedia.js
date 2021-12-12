import { ref, reactive, shallowRef, onMounted, onBeforeUnmount } from "vue";

const screenSize = ref();
const resizer = shallowRef()

const breakpoints = reactive({
  tablet: 639,
  desktop: 1023,
});

/**
 * Function that check if we should show a content on a specified breakpoint
 *
 * @param {('tablet'|'desktop')} breakpoint - The breakpoint to show the content
 * @returns {boolean}
 */
const showOn = (breakpoint) => {
  if (breakpoints.hasOwnProperty(breakpoint)) return screenSize.value > breakpoints[breakpoint];
};

export default () => {
  onMounted(() => {
    resizer.value = new ResizeObserver(() => screenSize.value = window.innerWidth)
    resizer.value.observe(document.body)
  })

  onBeforeUnmount(() => resizer.value.disconnect)

  return {
    showOn,
  };
};
