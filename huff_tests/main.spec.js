// const chai = require('chai');
const path = require('path');
const BN = require('bn.js');

const { Runtime } = require('../huff');

// const { expect } = chai;
const pathToTestData = path.posix.resolve(__dirname, '../huff_modules');

const { executeFn } = require('./helpers/helpers.js');

describe('MAIN__PROXY', () => {
  let main;
  before(async () => {
    main = new Runtime('main.huff', pathToTestData, true);
  });

  it('exists', () => {

  });
});

describe('MAIN__CONSTRUCTOR', () => {
  let main_construcor;
  before(async () => {
    main_construcor = new Runtime('main.huff', pathToTestData, true);
  });

  it('deploys correctly', () => {

  });
});
