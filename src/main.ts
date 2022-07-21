import prettier from "prettier";
import parserBabel from "prettier/parser-babel";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = prettier.format(
  `export const data: Data = {
foo: "bar"
};`,
  {
    parser: "babel",
    plugins: [parserBabel],
    filepath: "test.js",
  }
);
