const { resolve } = require('path');
process.env.PLATFORM = process.env.PLATFORM || 'browser';
module.exports = require(resolve(__dirname, 'webpack', `${process.env.PLATFORM}.config`));