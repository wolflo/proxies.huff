// const { ADD, SUB, MUL, DIV, MOD } = require('./constants.js');

// module.exports = `
// #include "math.huff"

// #define macro THROW = takes(0) returns(0) {
//   0x00 0x00 revert
// }

// #define macro ${ADD} = takes(2) returns(1) {
//   MATH__ADD<throw_error>()
//   stop
//   throw_error:
//     THROW()
// }

// #define macro ${SUB} = takes(2) returns(1) {
//   MATH__SUB<throw_error>()
//   stop
//   throw_error:
//     THROW()
// }

// #define macro ${MUL} = takes(2) returns(1) {
//   MATH__MUL<throw_error>()
//   stop
//   throw_error:
//     THROW()
// }

// #define macro ${DIV} = takes(2) returns(1) {
//   MATH__DIV<throw_error>()
//   stop
//   throw_error:
//     THROW()
// }

// # define macro ${MOD} = takes(2) returns(1) {
//   MATH__MOD<throw_error>()
//   stop
//   throw_error:
//     THROW()
// }
// `;
