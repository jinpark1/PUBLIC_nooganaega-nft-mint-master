const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        coiny: ["Coiny", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-pink": "var(--light-pink)",
        "deep-champagne": "var(--deep-champagne)",
        "lemon-yellow-crayola": "var(--lemon-yellow-crayola)",
        "tea-green": "var(--tea-green)",
        "electric-blue": "var(--electric-blue)",
        "baby-blue-eyes": "var(--baby-blue-eyes)",
        "maximum-blue-purple": "var(--maximum-blue-purple)",
        "mauve": "var(--mauve)",
        "baby-powder": "var(--baby-powder)",
        "light": "var(--light)",
        'primary': '#22D3EE',
        'secondary': '#48ABFF',
        'tertiary': '#69B3FF',
        'accent': '#97CCFF',
        'background': "#070707",
      },
      animation: {
        "pulse-slow": "pulse 10s linear infinite",
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}
