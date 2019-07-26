import { Configuration, RuleSetRule } from "webpack"
import { name as packageName } from "./package.json"
import HtmlWebpackPlugin from "html-webpack-plugin"

const babel: RuleSetRule = {
  test: /.ts$/,
  use: [
    {
      loader: "babel-loader",
      options: { presets: ["@babel/preset-typescript"] },
    },
  ],
}

const config: Configuration = {
  module: {
    rules: [babel],
  },
  resolve: {
    extensions: [".json", ".js", ".ts"],
  },
  plugins: [new HtmlWebpackPlugin({ title: packageName })],
}

export default config
