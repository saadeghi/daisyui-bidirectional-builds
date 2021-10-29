module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  plugins: [
    require('daisyui'),
    require("tailwindcss-flip")
  ],
  daisyui: {
    rtl: true
  }
}