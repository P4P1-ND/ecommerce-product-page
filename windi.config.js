import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    boxShadow: {
      custom: "0px 17px 13px 0px hsl(26deg 100% 55% / 20%)",
    },
    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      primary: {
        200: "hsl(25, 100%, 94%)",
        800: "hsl(26, 100%, 55%)",
      },
      neutral: {
        200: "hsl(223, 64%, 98%)",
        400: "hsl(220, 14%, 75%)",
        600: "hsl(219, 9%, 45%)",
        800: "hsl(220, 13%, 13%)",
      },
    },
  },
});
