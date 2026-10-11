import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mitech: {
          dark: "#111827",      // Deep Charcoal
          blue: "#0066FF",      // Electric Blue
          light: "#F9FAFB",     // Clean background off-white
        },
      },
    },
  },
  plugins: [],
};
export default config;