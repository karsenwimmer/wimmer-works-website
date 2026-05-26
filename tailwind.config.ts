import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        charcoal: "#2d2b28",
        linen: "#fbfaf7",
        parchment: "#f3efe7",
        gold: "#c88a05",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "Avenir Next", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(17, 17, 17, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
