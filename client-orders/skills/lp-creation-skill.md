# LP制作スキル

## 概要
クライアント向けランディングページを制作するスキル。

## 技術スタック
- **フレームワーク**: Vite + React（またはHTML+CSS）
- **スタイリング**: TailwindCSS
- **デプロイ**: GitHub Pages / Vercel / Netlify

## 制作手順

### 1. テンプレート選択
ギャラリーの LP テンプレートを参考に、クライアントの業種に合ったデザインを選択。

| テンプレート | 業種 | カラースキーム |
|-------------|------|------------|
| img-007 | 美容サロン | ピンク×ゴールド |
| img-008 | パーソナルトレーナー | ネイビー×オレンジ |
| img-009 | カフェ・飲食店 | ベージュ×グリーン |

### 2. プロジェクト作成
```bash
npx -y create-vite@latest ./client-lp -- --template react-ts
cd client-lp
npm install
npm install -D tailwindcss @tailwindcss/vite
```

### 3. セクション構成

クライアントの注文書にチェックされたセクションを実装:

1. **ヒーロー**: メインビジュアル + キャッチコピー + CTA
2. **サービス紹介**: メニュー/サービス内容
3. **料金表**: プランカード形式
4. **ビフォーアフター**: 比較表示
5. **お客様の声**: レビューカード
6. **スタッフ紹介**: プロフィールカード
7. **アクセス**: Google Maps埋め込み
8. **FAQ**: アコーディオン
9. **問い合わせ**: フォーム（Googleフォーム連携等）

### 4. レスポンシブ対応
- モバイルファースト設計
- ブレークポイント: sm(640px) / md(768px) / lg(1024px)

### 5. SEO設定
- title / meta description
- OGP (og:title, og:description, og:image)
- JSON-LD 構造化データ
- sitemap.xml

### 6. デプロイ
```bash
npm run build
npx gh-pages -d dist
```
または Vercel/Netlify でデプロイ。

## 品質チェックリスト
- [ ] スマホ表示確認（Chrome DevTools）
- [ ] ページ読み込み速度（Lighthouse 90+）
- [ ] 問い合わせフォーム動作確認
- [ ] OGP画像表示確認
- [ ] リンク切れチェック
- [ ] ファビコン設定
