module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    semi: 'error',
    complexity: ['warn', 25],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'no-restricted-globals': 'off',
    'max-params': ['warn', 7],
    'no-console': 'warn',
    'no-new-func': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-return-await': 'off',
  }
};
