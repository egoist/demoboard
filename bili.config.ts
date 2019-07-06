import { Config } from 'bili'

const config: Config = {
  input: './src/index.js',
  output: {
    moduleName: 'demoboard',
    format: ['cjs', 'esm']
  }
}

export default config
