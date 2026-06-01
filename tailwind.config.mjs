import defaultTheme from "tailwindcss/defaultTheme.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        graphite: "#2b2b2b",
        muted: "#6a6a6a",
        line: "#dedede",
        paper: "#f7f7f5",
        soft: "#eeeeeb",
        accent: "#2f9f5f"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Display",
          "Helvetica Neue",
          "Arial",
          ...defaultTheme.fontFamily.sans
        ]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0, 0, 0, 0.08)",
        card: "0 12px 30px rgba(0, 0, 0, 0.06)"
      },
      maxWidth: {
        site: "1120px"
      }
    }
  },
  plugins: []
};
