const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: "development",
  entry: resolve("../examples/src/main.js"),
  output: {
    path: resolve("../dist"),
    filename: "bundle.js",
  },
  devServer: {
    open: true,
    port: 9888,
    compress: true,
    contentBase: resolve("../examples/public/index.html"),
    hot: true,
    hotOnly: true,
    overlay: true,
    watchOptions: {
      ignored: "node_modules",
      aggregateTimeout: 1000,
      poll: 1000,
    },
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
      "@": resolve("../src"),
      "@examples": resolve("../examples"),
    },
    extensions: [".js", ".vue"],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: resolve("../examples/public/index.html"),
    }),
    new CleanWebpackPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {
          from: resolve("../examples/public"),
          to: resolve("../dist"),
        },
      ],
    }),
    new vueLoaderPlugin(),
    new miniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
