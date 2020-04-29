const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".mjs", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }],
      },
    ],
  },
  plugins: [
    new WorkerPlugin(),
    new HTMLPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
};
