import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        surface: "#1A1F2B",
        surfaceLine: "#2A3142",
        amber: "#E8A33D",
        lilac: "#8B9EFF",
        body: "#C9CDD6",
        paper: "#F4F1EA",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(11,14,20,0) 0%, #0B0E14 90%)",
      },
    },
  },
  plugins: [],
};
export default config;
