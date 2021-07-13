module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    // "jquery": true
    "jest": true,
    "jsx-control-statements/jsx-control-statements": true // To be able to use if in JSX, you need to work with another Babel plugin
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": 'module',
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "globals": {
    // "wx": "readonly",
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-control-statements/recommended", 
  ],
  "settings": {
    "react": {
      "version": "detect" // Automatically reads the installed version of React
    }
  },
  "plugins": ["@typescript-eslint", "react", "jsx-control-statements",'prettier'],
  "rules": {
    "no-extra-semi": 2, // 禁止不必要的分号
    "quotes": ['error', 'single'], // 强制使用单引号
    "no-unused-vars": 0, // 不允许未定义的变量
    "jsx-control-statements/jsx-use-if-tag": 0,
    "prettier/prettier": "error"
  }
};