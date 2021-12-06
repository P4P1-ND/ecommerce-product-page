import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    extend: {
      boxShadow: {
        button: "0px 17px 13px 0px hsl(26deg 100% 55% / 20%)",
        cart: "-7px 7px 11px hsl(0deg 0% 19% / 20%), 7px 7px 11px hsl(0deg 0% 19% / 20%)",
      },
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    keyframes: {
      bounce: {
        "0%, 100%": {
          transform: "translateY(0)",
          "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
        },
        "50%": {
          transform: "translateY(-25%)",
          "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
        },
      },
    },
    animation: {
      bounce: "bounce 0.8s 2",
    },
    colors: {
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
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
