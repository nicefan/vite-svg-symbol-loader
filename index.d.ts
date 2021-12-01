
// declare module 'vite-svg-symbol-loader' {
import { Plugin as SvgoPlugin } from 'svgo';
  import { Plugin } from 'vite'
  declare function svgSymbolLoader(options?: { id?: string, svgo?: boolean | SvgoPlugin[] }): Plugin
  export default svgSymbolLoader
// }

// declare module '*.svg' {
//   export default string
// }
