require('@babel/register')({
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-optional-chaining']
  });
  
  // Import the rest of application.
  module.exports = require('./index.js')
  