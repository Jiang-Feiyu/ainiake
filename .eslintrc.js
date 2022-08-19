module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "linebreak-style": [0 ,"error", "windows"],
    'indent': 'off',  
  },
  // 'settings': {
  //   "import/resolver": {
  //   "webpack": {
  //   //此处config对应webpack.config.js的路径，我这个路径是vue-cli3默认的路径
  //   "config": "node_modules/@vue/cli-service/webpack.config.js"
  //   }
  //   }
  //   }
};
