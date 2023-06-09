/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    sm: "660px",
    md: "860px",
    lg: "1140px",
    xl: "1260px",
    "2xl": "1460px",
  },
  extend: {
    colors: {
      "cm-100": "#F7FBFC",
      "cm-200": "#D6E6F2",
      "cm-300": "#B9D7EA",
      "cm-400": "#769FCD",
      "chat-bg": "#EDF1FF",
    },
  },
};
export const safelist = ["z-[1]", "z-[2]", "z-[3]", "z-[4]", "z-[5]"];
export const plugins = [];
