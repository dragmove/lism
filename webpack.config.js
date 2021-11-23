import path from 'path';
import nodeExternals from 'webpack-node-externals';
import tsTransformPaths from '@zerollup/ts-transform-paths';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    index: ['./src/index.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              getCustomTransformers: (program) => {
                const transformer = tsTransformPaths(program);
                return {
                  afterDeclarations: [transformer.afterDeclarations],
                };
              },
            },
          },
        ],
        exclude: [/node_modules/],
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'lism',
    libraryTarget: 'umd',
  },
};
