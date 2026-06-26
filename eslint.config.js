import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

// vue-eslint-parser is a dep of eslint-plugin-vue, extracted here so we can
// re-apply it for .vue files after typescript-eslint overrides the global parser
const vueParser = pluginVue.configs['flat/essential'][1].languageOptions.parser

export default tseslint.config(
  {
    ignores: ['dist/**', 'coverage/**', 'node_modules/**'],
  },
  ...pluginVue.configs['flat/essential'],
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    // Re-apply vue-eslint-parser for .vue files after tseslint overrides the parser globally
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      // TODO Phase 3: rename single-word components and remove these overrides
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'warn',
    },
  },
)
