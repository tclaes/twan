module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,

  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**"
  ],

  coverageReporters: [
    "html",
    "text",
    "text-summary"
  ],

  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
