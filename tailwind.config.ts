import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      padding: {
        '4x2': '1.2rem',
      },
      fontSize: {
        '6xl': '3.815rem',
        '7xl': '4.768rem'
      },
      borderWidth: {
        '0x1': '0.1px',
        '0x2': '0.2px',
        '0x3': '0.3px',
        '0x4': '0.4px',
        '0x5': '0.5px',
        '0x6': '0.6px',
        '0x7': '0.7px',
        '0x8': '0.8px',
        '0x9': '0.9px',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        '13': '4.5rem'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkPink: 'hsl(337, 48%, 49%)',
        linkWaterWhite: 'hsl(220, 60%, 99%)',
        sanHuanBlue: 'hsl(207, 33%, 32%)',
        mirageBlue: 'hsl(207, 27%, 15%)',
        charmPink: 'hsl(337, 60%, 64%)',
        lightSanHuanBlue: 'hsl(207, 16%, 50%)',
      },
      fontFamily: {
        dmSerifDisplay: ["DM Serif Display", 'serif'],
        publicSans: ["Public Sans", 'serif'],
        roboto: ["Roboto", 'serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
