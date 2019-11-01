# Huff Proxies
A few Ethereum delegate-call proxies written in raw bytecode via [Huff](https://github.com/AztecProtocol/AZTEC/tree/master/packages/huff). The goal is proxies as close to the metal as possible with minimal deployment costs and call overhead.

### Constant Proxy
`huff_modules/proxy-constant.huff`  

The cheapest of the cheap. Deploys a proxy with a hardcoded target address, which means no `SSTORE` operations on deployment and no `SLOAD` overhead on calls. The hardocded address can be changed in the `TARGET` macro. This has not been tested much, but seems to be working and fairly close to optimized.

### Storage Proxy
`huff_modules/proxy-storage.huff`  

Deploys a more traditional proxy with a modifiable target address. Takes a single constructor argument (the target), and stores it at the `TARGET_SLOT`. Working, but not well tested or optimized. Also, this one can only be compiled with the patched fork of huff at [nsward/huff](https://github.com/nsward/huff). Not sure if this fork will be merged or not, but it allows the bytecode necessary to copy constructor args to be parsed correctly.  

### 2D Proxy
`huff_modules/proxy-2d.huff`  

Idea borrowed from [here](https://github.com/GNSPS/2DProxy). A proxy that delegatecalls it's constructor. Takes the first constructor argument as the target and stores it at the `TARGET_SLOT`. The second constructor argument is the constructor target. All remaining constructor arguments are copied into memory, then the proxy `delegatecalls` to the constructor target with the constructor args as calldata. I haven't even started on this one yet.

# Usage
`git submodule update --init --recursive`
`npm install`

#### Compile bytecode
`npm run compile` - compiles bytecode to proxies.json

#### Run tests
`npm run test`

Contributions and optimizations welcome, or feel free to fork and make it your own.
