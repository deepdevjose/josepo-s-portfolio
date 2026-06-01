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
        accent: "#A74AFF"
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
        ],
        mono: [
          "SFMono-Regular",
          "IBM Plex Mono",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          ...defaultTheme.fontFamily.mono
        ]
      },
      boxShadow: {
        soft: "inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 18px 45px rgba(0, 0, 0, 0.08)",
        card: "inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 4px 24px rgba(0, 0, 0, 0.05)"
      },
      maxWidth: {
        site: "1120px"
      }
    }
  },
  plugins: []
};
