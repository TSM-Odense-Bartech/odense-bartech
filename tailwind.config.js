/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary: "#21C9AB",
      secondary: "#000000",
      tertiary: "#fafafa",
      textprimary: "#333",
      textsecondary: "#a3a3a3",
    },
  },
  plugins: [],
};
