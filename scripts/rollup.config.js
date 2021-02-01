import { join } from "path";
import babelPlugin from "@rollup/plugin-babel";
import rollupPluginNodeResolve from "rollup-plugin-node-resolve";
import rollupVuePlugin from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import lessPlugin from "rollup-plugin-less";
function resolve(dir) {
  return join(__dirname, dir);
}

export default {
  input: resolve("../explore/index.js"),
  output: {
    file: resolve("../lib/bundle.js"),
    format: "cjs",
    globals: {
      vue: "Vue",
    },
  },
  watch: {
    include: resolve("../explore/**"),
  },
  plugins: [
    rollupPluginNodeResolve(),
    rollupVuePlugin({
      css: true,
      compileTemplate: true,
    }),
    babelPlugin({
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
    lessPlugin(),
    commonjs(),
  ],
};
