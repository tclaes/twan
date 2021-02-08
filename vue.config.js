module.exports = {
  runtimeCompiler: true,
  pwa: {
    iconPaths: {
      favicon32: 'assets/icons/favicon-32x32.png',
      favicon16: 'assets/icons/favicon-16x16.png',
      appleTouchIcon: 'assets/icons/apple-touch-icon.png',
      maskIcon: 'assets/icons/safari-pinned-tab.svg',
      msTileImage: 'assets/icons/mstile-150x150.png',
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  }
}