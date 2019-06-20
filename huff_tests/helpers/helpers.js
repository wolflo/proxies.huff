const BN = require('bn.js');
const chai = require('chai');;
const { expect } = chai;
chai.use(require('bn-chai')(BN));

const CLEAN_MEM = [];
const CLEAN_CALLDATA = [];
const CLEAN_CALLVALUE = 0;
const CLEAN_RETURNDATA = undefined;

async function executeFn(runtime, fn, call) {
  return await runtime(fn, call.stack, call.mem, call.data, call.value);
}

function expectResult(result, expected) {
  expect(result.stack).to.deep.eq.BN(expected.stack);
  expect(result.mem).to.deep.eq.BN(expected.mem);
  expect(result.returndata).to.deep.eq.BN(expected.returndata);
}

async function testFn(runtime, fn, call, expected) {
  // const {
  //   stack,
  //   mem,
  //   gas,
  //   bytecode,
  //   returndata,
  // } = await executeFn(runtime, fn, call);
  const result = await executeFn(runtime, fn, call);

  expectResult(result, expected);

  return result;
}

async function testFailFn(runtime, fn, call, reason) {
  try {
    await executeFn(runtime, fn, call);
  } catch(err) {
    expect(err.error).to.equal(reason);
    return;
  }
  throw Error('Expected failure not received');
}

async function executeStackFn(runtime, fn, initialStack) {
  call = {
    stack: initialStack,
    mem: CLEAN_MEM,
    data: CLEAN_CALLDATA,
    value: CLEAN_CALLVALUE
  };
  return await executeFn(runtime, fn, call);
}

// used to test a function that should only manipulate the stack
async function testStackFn(runtime, fn, initialStack, expectedStack) {
  call = {
    stack: initialStack,
    mem: CLEAN_MEM,
    data: CLEAN_CALLDATA,
    value: CLEAN_CALLVALUE
  };
  expected = {
    stack: expectedStack,
    mem: CLEAN_MEM,
    returndata: CLEAN_RETURNDATA
  };

  await testFn(runtime, fn, call, expected);
}

async function testFailStackFn(runtime, fn, initialStack, reason) {
  call = {
    stack: initialStack,
    mem: CLEAN_MEM,
    data: CLEAN_CALLDATA,
    value: CLEAN_CALLVALUE
  };

  await testFailFn(runtime, fn, call, reason)
}

module.exports = {
  executeFn,
  executeStackFn,
  testFn,
  testStackFn,
  testFailFn,
  testFailStackFn,
}
