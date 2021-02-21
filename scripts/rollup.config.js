import { join } from "path";
import babelPlugin from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import rollupVuePlugin from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import postCss from "rollup-plugin-postcss";
import alias from "rollup-plugin-alias";
function resolve(dir) {
  return join(__dirname, dir);
}

export default {
  input: resolve("../src/packages/index.js"),
  output: {
    file: resolve("../lib/bpm-component.js"),
    name: "bpm",
    format: "esm",
    globals: {
      vue: "Vue",
    },
  },
  watch: {
    include: resolve("../src/**"),
  },
  external: ["ant-design-vue"],
  plugins: [
    alias({
      resolve: [".js", ".vue"],
      entries: {
        "@": resolve("../src"),
      },
    }),
    nodeResolve(),
    commonjs(),
    rollupVuePlugin(),
    postCss({
      plugins: [],
    }),
    babelPlugin({
      exclude: "node_modules/**",
      babelHelpers: "runtime",
    }),
  ],
};
