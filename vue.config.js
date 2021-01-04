module.exports = {
  runtimeCompiler: true,
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  }
}