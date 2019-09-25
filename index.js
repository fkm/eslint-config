module.exports = {
	rules: {
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'max-len': ['warn', {
			// (default 80) enforces a maximum line length
			'code': 79,
			// ignores all trailing comments and comments on their own line
			'ignoreComments': false,
			// ignores only trailing comments
			'ignoreTrailingComments': false,
			// ignores lines that contain a URL
			'ignoreUrls': true,
			// ignores lines that contain a double-quoted or single-quoted string
			'ignoreStrings': false,
			// ignores lines that contain a template literal
			'ignoreTemplateLiterals': false,
			// ignores lines that contain a RegExp literal
			'ignoreRegExpLiterals': true,

			// 'tabWidth' (default 4) specifies the character width for tab characters
			// 'comments' (defaults to value of code) enforces a maximum line length for comments
		}],

		// Spacing
		'keyword-spacing': ['error', { 'before': true, 'after': true }],
		'space-before-function-paren': ['error', {
			'anonymous': 'always',
			'named': 'never',
			'asyncArrow': 'always',
		}],
		'space-in-parens': ['error', 'never'],
		'array-bracket-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'space-infix-ops': ['error', { 'int32Hint': false }],
		'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
		'no-trailing-spaces': 'error',

		// Comma
		'comma-dangle': ['error', 'always-multiline', 'only-multiline'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'comma-style': ['error', 'last'],
	},
};
