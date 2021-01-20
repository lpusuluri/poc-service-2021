module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ['prettier', 'airbnb-base'],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": ["prettier"],
    "rules": {
        "camelcase": 0,
        "consistent-return": 0,
        "function-paren-newline": 0,
        "indent": ["error", 2],
        "implicit-arrow-linebreak": 0,
        "import/newline-after-import": 0,
        "prettier/prettier": "error",
        "max-len": 0,
        "no-var": 2,
        "no-await-in-loop": 1,
        "no-console": 1,
        "no-unused-vars": 1,
        "no-param-reassign": 1,
        "no-plusplus": 0,
        "no-throw-literal": 0,
        "space-before-function-paren": 0,
        "quotes": 0,
        "object-curly-newline": 0,
        "operator-linebreak": 0,
        "newline-per-chained-call": 0,
        "import/prefer-default-export": [0],
        "class-methods-use-this": 0
    }
};
