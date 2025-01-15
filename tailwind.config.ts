import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'twinkle-soft': "twinkle-soft 4s ease-in-out infinite",
      },
      keyframes: {
        'twinkle-soft': {
          "0%, 100%": {
            opacity: "var(--tw-opacity)",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "calc(var(--tw-opacity) * 1.4)",
            transform: "scale(1.1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
