const { defineConfig } = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const webpackOptions = require('./webpack.config.js');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', webpackPreprocessor({ webpackOptions }));
      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
});
