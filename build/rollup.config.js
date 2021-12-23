import commonjs from "@rollup/plugin-commonjs"; // CommonJS モジュールを ES6 に変換
import vue from "rollup-plugin-vue"; // .vue 単一ファイルコンポーネントを取得
import buble from "@rollup/plugin-buble"; // 適切にブラウザをサポートするトランスパイラおよびポリフィル

export default {
  input: "src/wrapper.js", // Path relative to package.json
  output: {
    name: "Toneletter",
    exports: "named",
  },
  plugins: [
    vue({
      css: true, // css を <style> タグとして注入
      compileTemplate: true, // 明示的にテンプレートを描画関数に変換
    }),
    commonjs(),
    buble(), // ES5 へトランスパイルする
  ],
};
