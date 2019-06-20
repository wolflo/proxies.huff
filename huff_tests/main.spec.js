const chai = require('chai');
const path = require('path');
const BN = require('bn.js');

const { Runtime } = require('../huff');

const { expect } = chai;
const pathToTestData = path.posix.resolve(__dirname, '../huff_modules');

describe('MAIN__PROXY', () => {
  let main;
  before(async () => {
    main = new Runtime('main.huff', pathToTestData, true);
  });

  it('exists', () => {});
});
