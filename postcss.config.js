module.exports = (ctx) => ({
  plugins: {
    'postcss-import': {} || null,
    cssnano: ctx.env === 'production' ? {} : null
  }
})