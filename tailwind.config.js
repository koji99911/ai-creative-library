/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // カスタムカラーパレット（instructions.mdに基づく）
        cream: '#FAF7F2',
        ink: '#1C1917',
        accent: '#C2410C',
        teal: '#0F766E',
        violet: '#7C3AED',
      },
      fontFamily: {
        // 日本語フォント
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
    },
  },
  plugins: [],
}
