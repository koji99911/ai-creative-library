# 動画レンダリングスキル

## 概要
Remotionテンプレートを使ってクライアント向け動画を制作するスキル。

## 使用ツール
- **Remotion**: React ベースの動画生成フレームワーク
- **@remotion/cli**: コマンドラインレンダリング

## テンプレート一覧

| テンプレートID | 名前 | 秒数 | 用途 |
|---------------|------|------|------|
| SalonIntro | 美容サロン紹介 | 30秒 | サロンPR |
| ProductPromo | 商品プロモーション | 45秒 | EC/商品紹介 |
| SNSShort | SNSショート | 15秒 | Reels/TikTok |
| BeforeAfter | ビフォーアフター | 30秒 | 施術/リフォーム |

## レンダリング手順

### 1. プロパティ設定
`video-props.json` をクライアント情報で更新:

```json
{
  "shopName": "クライアント店名",
  "catchCopy": "キャッチコピー",
  "features": ["特長1", "特長2", "特長3"],
  "ctaText": "ご予約はこちら",
  "primaryColor": "#c2410c",
  "accentColor": "#ffffff"
}
```

### 2. プレビュー確認
```bash
npm run remotion:studio
```
ブラウザで `http://localhost:3000` を開いてプレビュー確認。

### 3. レンダリング
```bash
npm run render:video
```
出力先: `out/video.mp4`

### カスタムpropsでレンダリング
```bash
npx remotion render src/remotion/index.ts SalonIntro \
  --props=./orders/[案件名]/video-props.json \
  out/[案件名].mp4
```

## 品質チェックリスト
- [ ] テキストが読みやすいか（フォントサイズ・コントラスト）
- [ ] アニメーションのタイミングが自然か
- [ ] BGMと尺が合っているか
- [ ] ロゴが正しく表示されているか
- [ ] 最終フレームにCTAが表示されているか

## 納品フォーマット
| フォーマット | コーデック | 用途 |
|-------------|-----------|------|
| MP4 | H.264 | 汎用（推奨） |
| MOV | ProRes | 高品質編集用 |
| GIF | — | Web埋め込み（短尺のみ） |
