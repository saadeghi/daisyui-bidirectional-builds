module.exports = {
  prefix: 'daisy-',
  mode: 'jit',
  purge: ['./public/**/*.html'],
  plugins: [
    require('daisyui')
  ],
  corePlugins: {
    preflight: false,
  }
}