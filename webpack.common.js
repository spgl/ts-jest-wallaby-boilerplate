const path = require('path');

module.exports = {
  entry: { './src/index': './src/index.ts', './tests/sum.test': './tests/sum.test.js' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
    ],
  },
};
