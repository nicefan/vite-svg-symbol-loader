const fs = require('fs')
const path = require('path')
const { optimize } = require('svgo')
const SVGCompiler = require('svg-baker')
const { defaultPlugins } = require('svgo/lib/svgo/config')

module.exports = function svgSymbolLoader (options = {}) {
  const { svgo, id } = options
  const inner = [
  {
    name: "removeAttrs",
    params: {
      attrs: "(class)"
    }
  },
  'removeXMLNS'
  ]
  const svgoConfig = [...new Set(defaultPlugins.concat(inner, Array.isArray(svgo) ? svgo : []))]
  const svgRegex = /\.svg(\?(raw|symbol))?$/

  return {
    name: 'svg-symbol',
    enforce: 'pre',

    // resolveid (url) {
    //   return url.match(svgRegex) ? url : null
    // },

    async load(url) {
      if (!url.match(svgRegex)) return
      const [filePath, query] = url.split('?', 2)
      let raw = await fs.promises.readFile(filePath, 'utf-8')
      if (svgo !== false) {
        const { data } = await optimize(raw, {plugins: svgoConfig});
        raw = data;
      }
      if (!query || query === 'symbol') {
        const { name } = path.parse(filePath)
        const svgSymbol = await new SVGCompiler().addSymbol({
          id: id ? id.replace(/\[name\]/g, name) : name,
          content: raw,
          path: filePath,
        });
        raw = svgSymbol.render()
      }

      return `export default ${JSON.stringify(raw)}`
    }
  }
}

module.exports.default = module.exports
