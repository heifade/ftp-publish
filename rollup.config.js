import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'bin/index.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node\n',
  },
  
  plugins: [typescript(), json(), resolve(), commonjs()],
};
