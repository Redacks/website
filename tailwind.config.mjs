import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        grotesque: ["Darker Grotesque", "sans-serif"],
        inter: ["Inter Variable", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00dbd8",
          secondary: "#b133ff",
          accent: "#ffffff",
          neutral: "#0e1624",
          "base-100": "#0e1624",
          "base-200": "#1f1f1f",
          success: "#2aca44",
          error: "#ff5f5a",
          warning: "#ffbe2e",
        },
      },
    ],
  },
  plugins: [daisyui],
};
