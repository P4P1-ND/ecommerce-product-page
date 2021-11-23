import { ref, onMounted, reactive } from "vue";

const screenSize = ref(window.innerWidth);

const breakpoints = reactive({
  tablet: 639,
  desktop: 1023,
});

const updateScreenSize = () => (screenSize.value = window.innerWidth);

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
  onMounted(() => window.addEventListener("resize", updateScreenSize));

  return {
    screenSize,
    showOn,
  };
};
