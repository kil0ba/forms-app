module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      "modules": true
    }
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    "node/no-unsupported-features/es-syntax": ["off", {
      "version": ">=8.0.0",
      "ignores": []
    }],
    "node/no-missing-import": ["error", {
      "allowModules": [],
      "resolvePaths": ["/path/to/a/modules/directory"],
      "tryExtensions": [".ts", ".js", ".json", ".node"]
    }],
    "@typescript-eslint/no-unused-vars": ["error"]
  },
  ignorePatterns: [
    '*.test.js'
  ]
};
