import webpack from "webpack";
import { Express } from "express";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import { config } from "./webpack.client";

const compile = (app: Express) => {
  if (process.env.NODE_ENV == "development") {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  }
};
export default {
  compile,
};
