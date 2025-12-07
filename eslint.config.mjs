import nextPlugin from '@next/eslint-plugin-next'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
	{
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
		},
	},
	/* TYPESCRIPT */
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: process.cwd(),
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
		},
	},
	/* IMPORT ORDER */
	{
		plugins: {
			import: importPlugin,
		},
		rules: {
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
					pathGroups: [
						{ pattern: '@/widgets/**', group: 'internal', position: 'after' },
						{ pattern: '@/features/**', group: 'internal', position: 'after' },
						{ pattern: '@/entities/**', group: 'type', position: 'after' },
						{ pattern: '@/shared/**', group: 'internal', position: 'after' },
					],
					pathGroupsExcludedImportTypes: ['type'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
		},
	},
	/* PRETTIER */
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': 'error',
		},
	},
	/* IGNORES */
	{
		ignores: ['node_modules/**', '.next/**', 'dist/**', 'build/**', 'out/**', '**/*.config.js'],
	},
]
