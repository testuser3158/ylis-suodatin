const path = require('path')
const assert = require('assert')
const webpack = require('webpack')
const WebpackUserscript = require('webpack-userscript')
const isProductionBuild = process.env.NODE_ENV === 'production'
const pkg = require('./package.json')

const dist = path.resolve(__dirname, 'dist')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: dist,
    filename: `${pkg.name}.user.js`
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ]
      }
    ]
  },
  devServer: {
    static: dist,
    webSocketServer: false,
    client: false,
    devMiddleware: { writeToDisk: true }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new WebpackUserscript({
      headers: {
        version: !isProductionBuild ? `[version]-build.[buildNo]` : `[version]`,
        include: '/^https:\\/\\/ylilauta.org\\/[^/]+/.*/',
        namespace: pkg.repository,
        ...(isProductionBuild
          ? (() => {
              assert(pkg.repository)
              const githubUserName = pkg.repository.match(/github:(.+)\//)[1]
              const githubPagesBaseUrl = `https://${githubUserName}.github.io/${pkg.name}`

              return {
                updateURL: `${githubPagesBaseUrl}/${pkg.name}.meta.js`,
                downloadURL: `${githubPagesBaseUrl}/${pkg.name}.user.js`
              }
            })()
          : {})
      },
      proxyScript: {
        baseUrl: `file://${path.resolve(__dirname, dist)}`,
        filename: '[basename].proxy.user.js',
        enable: !isProductionBuild
      }
    })
  ]
}
