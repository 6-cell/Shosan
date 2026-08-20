# 住宅総額シミュレーター

## 一番早い公開方法（ビルド不要・1分)

`dist/` フォルダをそのまま使います。

1. https://app.netlify.com/drop を開く
2. `dist` フォルダをブラウザにドラッグ＆ドロップ
3. 数秒で `https://xxxxx.netlify.app` のような公開URLが発行されます（アカウント登録不要）

このURLをそのまま共有すれば、誰でも開けます。

## あとで仕様変更・再デプロイもしたい場合

こちらの `site` フォルダ一式（source版）を使います。

```bash
npm install
npm run build      # dist/ に静的ファイルが生成されます
```

- **Vercel**: このフォルダを GitHub リポジトリにpush → https://vercel.com/new でインポート。
  `vercel.json` 済みなのでビルド設定は自動認識されます。
- **Netlify**: 同様に GitHub 連携、または `netlify deploy --prod` でCLIデプロイ。
  `netlify.toml` 済みです。
- **その他の静的ホスティング**（GitHub Pages, Cloudflare Pages等）: `npm run build` 後、
  `dist/` フォルダの中身をそのまま配置すれば動きます（サーバーサイド処理は一切ありません）。

## 中身

- `src/App.jsx` … シミュレーター本体（地図データ・地価データ込み、外部API通信なし）
- `src/main.jsx` … マウント用エントリーポイント
- `build.mjs` … esbuildでReactごと1ファイルにバンドルするスクリプト
- 完全に静的なファイルのみで動作するため、サーバー費用はかかりません
