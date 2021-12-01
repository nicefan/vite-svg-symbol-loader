# Vite SVG transform to Symbol tag
Vite plugin to load SVG file transform to symobl tag strings

<a href="https://www.npmjs.com/package/vite-svg-symbol-loader" target="_blank"><img src="https://img.shields.io/npm/v/vite-svg-symbol-loader?style=flat-square" alt="Version"></a>
<a href="https://www.npmjs.com/package/vite-svg-symbol-loader" target="_blank"><img src="https://img.shields.io/npm/dw/vite-svg-symbol-loader?style=flat-square" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vite-svg-symbol-loader" target="_blank"><img src="https://img.shields.io/npm/l/vite-svg-symbol-loader?style=flat-square" alt="License"></a>


### Install
```bash
npm install vite-svg-symbol-loader --save-dev
```

### Setup

#### `vite.config.js`
```js
import svgSymbol from 'vite-svg-symbol-loader'

export default defineConfig({
  plugins: [
    svgSymbol({
      id: 'icon-[name]'
    })
  ]
})
```

### SVGO Configuration

#### `vite.config.js`
```js
svgLoader({
  id: 'icon-[name]'
  svgo: {
    multipass: true
  }
})
```

