export default {
	'*.*': [
		'prettier --write',
		'cross-env NODE_OPTIONS=--experimental-vm-modules jest --bail --runInBand --findRelatedTests'
	],
	'*.{js,cjs}': 'eslint',
	'*.css': 'stylelint',
	'*.md': 'remark --ignore-path .gitignore'
	//'*.{html,njk]': 'rehype --ignore-path .gitignore' seems to fail with unspecified error
};
