const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new WorkerPlugin(),
    new HTMLPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
};
