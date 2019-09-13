module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "global-require": "off",
    "import/no-unresolved": "off",
    "import/no-cycle": "off",
    "no-param-reassign": "off",
    "react/forbid-prop-types": "off",
    "max-len": "off",
    "no-console": "off",
    "padded-blocks": "off",
    "react/no-array-index-key": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
  },
  'globals': {
    "fetch": false
  }
};
