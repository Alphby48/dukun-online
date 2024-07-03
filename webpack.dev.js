const path = require("path");
const config = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    assetModuleFilename: "img/[name][ext]",
    clean: true,
  },

  //   watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
  optimization: {
    // [...]
    minimize: true,
  },
});
