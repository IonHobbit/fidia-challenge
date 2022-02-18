module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/*.{vue,js}`,
      `layouts/*.vue`,
      `pages/**/*.{vue,css,js}`,
      `pages/*.vue`,
      `plugins/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      colors: {
        "fidia-purple": "#7F56D9",
        "fidia-light-purple": "#F9F5FF",
        "fidia-violet": "#6941C6",
        "fidia-light-violet": "#9E77ED",
        "fidia-grey": "#344054",
        "fidia-light-grey": "#F2F4F7",
        "fidia-green": "#027A48",
        "fidia-light-green": "#ECFDF3",
        "fidia-red": "#B42318",
        "fidia-ash": "#F9FAFB",
        "fidia-dark-ash": "#667085",
        "fidia-light-ash": "#D0D5DD",
        "black": "#101828",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
