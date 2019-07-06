module.exports = {
  entry: 'demo/index.js',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md/,
          use: [
            { loader: 'raw-loader' },
            {
              loader: 'markdown-it-loader',
              options: {
                html: true,
                linkify: true,
                preset: 'default',
                use: [require('markdown-it-anchor')]
              }
            }
          ]
        }
      ]
    }
  }
}
