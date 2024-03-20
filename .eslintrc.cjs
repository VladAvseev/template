module.exports = {
  root: true,
  env: {
		browser: true, 
		es2020: true 
	},
  extends: [
    'eslint:recommended',
		'prettier/react',
		'plugin:prettier/recomended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
