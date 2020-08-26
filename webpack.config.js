const path = require("path"),
  webpack = require("webpack"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.min.js",
      publicPath: "/",
    },
    mode: argv.mode || "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                native: true,
              },
            },
          ],
        },
        {
          test: /\.(pdf|jpg|png|gif|ico)$/,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/images", to: "images" },
          { from: "public/git-cheat-sheet.html", to: "" },
        ],
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
