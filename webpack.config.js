module.exports = [
  {
    entry: `${__dirname}/src/index.js`,
    output: {
      filename: 'terminal.js',
      path: `${__dirname}`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] }
          }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
      ]
    },
    resolve: {
      alias: {
        '@app': `${__dirname}/src`,
        '@styles': `${__dirname}/styles`,
      }
    },
  },
  {
    entry: `${__dirname}/src/loader.js`,
    output: {
      filename: 'loader.js',
      path: `${__dirname}`,
      library: 'terminal.js',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] }
          }
        },
      ]
    },
    resolve: {
      alias: {
        '@app': `${__dirname}/src`,
      }
    },
  }
];
