// const { Runtime } = require('../huff');
// const path = require('path');
// const BN = require('bn.js');

// const pathToTestData = path.posix.resolve(__dirname, '../huff_modules');
// const testImpl = require('./helpers/testImpl.js');
// const { testStackFn, testFailStackFn, executeStackFn} = require('./helpers/helpers.js');
// const {
//   MAX_UINT256,
//   REVERT,
//   ADD,
//   SUB,
//   MUL,
//   DIV,
//   MOD,
// } = require('./helpers/constants.js');

// // todo: include tests with signed ints, other data

// describe('MATH__ADD', () => {
//   let math;
//   before(async () => {
//     math = new Runtime(testImpl, pathToTestData, false);
//   });

//   it('adds correctly', async () => {
//     const a = new BN('5678');
//     const b = new BN('1234');
//     const c = a.add(b);

//     await testStackFn(math, ADD, [a, b], [c]);
//     await testStackFn(math, ADD, [b, a], [c]);
//   });

//   it('reverts on overflow', async () => {
//     const a = MAX_UINT256;
//     const b = new BN('1');

//     await testFailStackFn(math, ADD, [a, b], REVERT);
//     await testFailStackFn(math, ADD, [b, a], REVERT);
//   });
// });


// describe('MATH__SUB', () => {
//   let math;
//   before(async () => {
//     math = new Runtime(testImpl, pathToTestData, false);
//   });

//   it('subtracts correctly', async () => {
//     const a = new BN('5');
//     const b = new BN('2');
//     const c = a.sub(b);

//     // sub with stack [b, a] returns a - b
//     await testStackFn(math, SUB, [b, a], [c]);
//   });

//   it('reverts on underflow', async () => {
//     const a = new BN('0');
//     const b = new BN('1');

//     // sub with stack [b, a] returns a - b
//     await testFailStackFn(math, SUB, [b, a], REVERT);
//   });
// });


// describe('MATH__MUL', () => {
//   let math;
//   before(async () => {
//     math = new Runtime(testImpl, pathToTestData, false);
//   });

//   it('multiples correctly', async () => {
//     const a = new BN('5678');
//     const b = new BN('1234');
//     const c = a.mul(b);

//     await testStackFn(math, MUL, [a, b], [c]);
//     await testStackFn(math, MUL, [b, a], [c]);
//   });

//   it('multiplies by zero correctly', async () => {
//     const a = new BN('5678');
//     const b = new BN('0');
//     const c = new BN('0');

//     await testStackFn(math, MUL, [a, b], [c]);
//     await testStackFn(math, MUL, [b, a], [c]);
//     await testStackFn(math, MUL, [b, b], [c]);
//   });

//   it('reverts on overflow', async () => {
//     const a = MAX_UINT256;
//     const b = new BN('2');

//     await testFailStackFn(math, MUL, [a, b], REVERT);
//     await testFailStackFn(math, MUL, [b, a], REVERT);
//   });
// });


// // todo: check flooring behavior
// describe('MATH__DIV', () => {
//   let math;
//   before(async () => {
//     math = new Runtime(testImpl, pathToTestData, false);
//   });

//   it('divides correctly', async () => {
//     const a = new BN('5678');
//     const b = new BN('1234');
//     const c = a.div(b);

//     await testStackFn(math, DIV, [b, a], [c]);
//   });

//   it('divides zero correctly', async () => {
//     const a = new BN('0');
//     const b = new BN('5678');
//     const c = new BN('0');

//     await testStackFn(math, DIV, [b, a], [c]);
//   });

//   it('reverts on division by zero', async () => {
//     const a = new BN('5678');
//     const b = new BN('0');

//     await testFailStackFn(math, DIV, [b, a], REVERT);
//     // const divByZero = await executeStackFn(math, DIV, [b, a]);
//     // console.log('divByZero', divByZero);
//   });
// });

// describe('MATH__MOD', () => {
//   let math;
//   before(async () => {
//     math = new Runtime(testImpl, pathToTestData, true);
//   });

//   it('mods correctly', async () => {
//     const a = new BN('5678');
//     const b = new BN('6');
//     const c = a.mod(b);

//     console.log('5678 % 5 = ', c)

//     await testStackFn(math, MOD, [b, a], [c]);
//   });

//   it('reverts on mod by zero', async () => {
//     const a = new BN('5678');
//     const b = new BN('0');

//     await testFailStackFn(math, MOD, [b, a], REVERT);
//   })
// });
