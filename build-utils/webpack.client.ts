import path from "path";
import webpack from "webpack";
// import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
const CURRENT_WORKING_DIR = process.cwd();

export const config = {
  name: "browser",
  mode: "development",
  devtool: "eval-source-map",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR, "client/main.tsx"),
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new ForkTsCheckerWebpackPlugin({
    //   async: false,
    // }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
