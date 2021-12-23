import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import buble from "@rollup/plugin-buble";

export default {
  input: "src/wrapper.js",
  output: {
    name: "Toneletter",
    exports: "named",
  },
  plugins: [
    vue(),
    commonjs(),
    buble({
      objectAssign: "Object.assign",
    }),
  ],
};
