/* eslint-disable import/no-extraneous-dependencies */

require('babel-register');
require('babel-polyfill');
require('./src/server').default().then().catch(console.log);
