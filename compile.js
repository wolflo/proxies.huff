const path = require('path');
const fs = require('fs');

const parser = require('./huff/src/parser');
const compiler = require('./huff/src/compiler');

const pathToData = path.posix.resolve(__dirname, './huff_modules');

const { inputMap, macros, jumptables } = parser.parseFile('main.huff', pathToData);

const {
  data: { bytecode: macroCode },
} = parser.processMacro('MAIN__PROXY', 0, [], macros, inputMap, jumptables);

const {
  data: { bytecode: compilerCode },
} = parser.processMacro('MAIN__CONSTRUCTOR', 0, [], macros, inputMap, jumptables);

const bytecode = compilerCode + macroCode;

const contract = {
  name: 'PROXY',
  bytecode: `0x${macroCode}`,
  deployedBytecode: `0x${bytecode}`,
};

fs.writeFileSync(
  path.posix.resolve(__dirname, './proxy.json'),
  JSON.stringify(contract)
);

compiler('proxy_project.json', pathToData);

console.log('written bytecode to proxy.json');
