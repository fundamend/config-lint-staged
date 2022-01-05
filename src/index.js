export default {
	'*.*': ['prettier --write', 'jest --bail --runInBand --findRelatedTests'],
	'*.js': 'eslint',
	'*.css': 'stylelint',
	'*.md': 'remark --ignore-path .gitignore'
	//'*.{html,njk]': 'rehype --ignore-path .gitignore' seems to fail with unspecified error
};
