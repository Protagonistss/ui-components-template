import { join } from "path";
function resolve(dir) {
  return join(__dirname, dir);
}

export default {
  input: resolve("../explore/index.js"),
  output: {
    file: resolve("../lib/bundle.js"),
    format: "cjs",
  },
  watch: {
    include: resolve("../explore/**"),
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true
    }),
  ],
};
