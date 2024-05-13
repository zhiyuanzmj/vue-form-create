export default {
  install: () => {
    // @ts-expect-error ignore
    const context = require.context('./svg', false, /\.svg$/)
    context.keys().map(context)
  }
}
