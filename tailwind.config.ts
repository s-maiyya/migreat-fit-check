import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1B2A5E",
        gold: "#F5C518",
        cream: "#FDF8E7",
        midblue: "#2E4494",
        dark: "#1A1A1A",
      },
      fontFamily: {
        heading: ["var(--font-playfair)"],
        body: ["var(--font-dmsans)"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
