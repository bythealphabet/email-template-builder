import path from "path";
import nodeExternals from "webpack-node-externals";

const CURRENT_WORKING_DIR = process.cwd();

const webpackServerConfig = ({
  mode,
  name,
}: {
  mode: string;
  name: string;
}) => ({
  mode,
  name: "server",
  entry: [path.join(CURRENT_WORKING_DIR, "./server/server.ts")],
  target: "node",
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist/"),
    filename: "server.generated.js",
    publicPath: "/dist/",
    libraryTarget: "commonjs2",
  },
  externals: [nodeExternals()],
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
});

module.exports = webpackServerConfig;
