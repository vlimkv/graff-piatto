// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graffBlue: "#303F56",
        graffGold: "#C9A25B",
        graffBg: "#F5F1E5",
      },
      screens: {
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;