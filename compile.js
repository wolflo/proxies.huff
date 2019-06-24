const path = require('path');
const fs = require('fs');

const parser = require('./huff/src/parser');
const compiler = require('./huff/src/compiler');

const modulesPath = path.posix.resolve(__dirname, './huff_modules');

const proxy_constant = parseContract('proxy_constant.huff', modulesPath);
const proxy_storage = parseContract('proxy_storage.huff', modulesPath);

const contracts = [{
  name: 'proxy_constant',
  bytecode: `0x${proxy_constant.bytecode}`,
  runtimeBytecode: `0x${proxy_constant.runtime}`,
}, {
  name: 'proxy_storage',
  bytecode: `0x${proxy_storage.bytecode}`,
  runtimeBytecode: `0x${proxy_storage.runtime}`,
}];

fs.writeFileSync(
  path.posix.resolve(__dirname, './proxies.json'),
  JSON.stringify(contracts, null, 2)
);

console.log('written bytecode to proxies.json');

function parseContract(filename, pathToData) {
  const { inputMap, macros, jumptables } = parser.parseFile(filename, pathToData);
  runtime = parser.processMacro('RUNTIME', 0, [], macros, inputMap, jumptables).data.bytecode;
  constructor = parser.processMacro('CONSTRUCTOR', 0, [], macros, inputMap, jumptables).data.bytecode;
  bytecode = constructor + runtime;
  return { constructor, runtime, bytecode };
}
