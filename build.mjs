import * as esbuild from "esbuild";
import { mkdirSync, copyFileSync, writeFileSync } from "fs";

mkdirSync("dist", { recursive: true });

await esbuild.build({
  entryPoints: ["src/main.jsx"],
  bundle: true,
  minify: true,
  format: "iife",
  target: ["es2019"],
  outfile: "dist/bundle.js",
  loader: { ".jsx": "jsx" },
  jsx: "automatic",
});

writeFileSync(
  "dist/index.html",
  `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>住宅総額シミュレーター | Housing Total Cost Simulator</title>
<meta name="description" content="地方・都道府県・市区町村を選んで地価とハウスメーカー坪単価から総額を試算する住宅シミュレーター" />
</head>
<body style="margin:0;">
<div id="root"></div>
<script src="./bundle.js"></script>
</body>
</html>
`
);

console.log("build done");
