const path = require('path');
const { DefinePlugin } = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postCssPresetEnv = require('postcss-preset-env');

const PORT = 9000;
const IS_PROD = process.env.NODE_ENV === 'production';
const publicPath = IS_PROD ? '/dist/' : `http://localhost:${PORT}/dist/`;

let optimization = {};

let plugins = [
  new DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new ManifestPlugin({
    writeToFileEmit: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[id].[chunkhash].css',
    ignoreOrder: false,
    hmr: !IS_PROD,
  }),
];

let resolve = {
  extensions: ['.js', '.jsx', '.json', '.scss'],
};

let stats = {};

const sassLoaders = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      plugins: () => [postCssPresetEnv()],
      hmr: !IS_PROD,
      // reloadAll: !IS_PROD,
    },
  },
  {
    loader: 'css-loader',
    options: { sourceMap: !IS_PROD },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: !IS_PROD,
      plugins: () => [postCssPresetEnv()],
    },
  },
  {
    loader: 'sass-loader',
    options: { sourceMap: !IS_PROD },
  },
];

const devServer = {
  contentBase: path.join(__dirname, 'dist'),
  publicPath,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  port: PORT,
  hot: true,
};

if (IS_PROD) {
  optimization = {
    minimizer: [
      new TerserPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  };
} else {
  // resolve = {
  //   ...resolve,
  //   alias: {
  //     'react-dom': '@hot-loader/react-dom',
  //   },
  // };
  stats = {
    children: false,
  };
}

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    filename: IS_PROD ? 'main.[chunkhash].js' : 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath,
  },
  mode: IS_PROD ? 'production' : 'development',
  devtool: IS_PROD ? false : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: sassLoaders,
      },
    ],
  },
  plugins,
  resolve,
  devServer,
  optimization,
  stats,
};
