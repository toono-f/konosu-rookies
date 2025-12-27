# 鴻巣ROOKIES

埼玉県鴻巣市を拠点とする草野球チーム「鴻巣ROOKIES」の公式サイトです。

## サイトURL

https://konosu-rookies.vercel.app/

## ページ構成

| ページ | URL | 説明 |
|--------|-----|------|
| トップ | `/` | チーム紹介、活動内容、入部案内 |
| チーム方針 | `/policy` | チームの方針・特徴・今後の構想 |
| 活動一覧 | `/activities` | 練習会予定、試合結果 |
| SNS一覧 | `/sns` | 各SNSアカウントへのリンク |

## 技術スタック

- **フレームワーク**: Next.js 16 (Page Router)
- **スタイリング**: Tailwind CSS v4
- **フォント**: Noto Sans JP
- **ホスティング**: Vercel

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## カラースキーム

| 色 | コード | 用途 |
|----|--------|------|
| Navy | `#1e2a4a` | メインカラー |
| Burgundy | `#8b2942` | アクセント |
| Gold | `#c9a227` | ハイライト |
| Cream | `#f8f5eb` | 背景 |

## TODO

### OGP画像の作成
- [ ] `/public/og-image.png` を作成する
  - サイズ: 1200 x 630 px
  - 用途: SNSシェア時のサムネイル画像（Twitter, Facebook, LINE等）
  - 内容例: チームロゴ + チーム名 + キャッチコピー

### microCMSでのコンテンツ更新対応
- [ ] microCMSのAPI設定（サービス作成、API作成）
- [ ] 環境変数の設定（MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY）
- [ ] チーム方針ページのコンテンツをmicroCMSから取得
- [ ] 活動一覧ページのコンテンツをmicroCMSから取得
