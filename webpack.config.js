const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "module": false,  // Prevent bundling of Node.js module system
      "fs": false,      // Prevent fs from being included in the bundle
      "path": false,    // Prevent path from being bundled
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '{}',  // Provide an empty object for process.env in the browser context
    }),
  ],
};
