# Auth Flow Studio

各種ログイン方式の「裏側」で何が起きているかを体感するためのミニアプリです。

## 概要

Auth Flow Studio は、現代の認証フローをステップごとにインタラクティブに可視化し、その仕組みを理解するための学習ツールです。

## 対応している認証フロー

### 🔐 OIDC Code Flow

OAuth2 / OpenID Connect の典型的な認証フローをステップごとに可視化します。

### 🔑 Passkey (WebAuthn)

パスワードレスな認証がどのように動作しているかをざっくり追体験できます。

### ✉️ Magic Link

メールのワンタイムリンクでログインする仕組みを理解できます。

## 技術スタック

- **React** 19 - UI フレームワーク
- **Vite** 7 - ビルドツール
- **React Router** - ルーティング

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# 本番ビルド
pnpm build

# ビルド結果のプレビュー
pnpm preview
```

## プロジェクト構成

```
src/
├── components/     # 共通UIコンポーネント
├── flows/          # 各認証フローの実装
│   ├── magic/      # Magic Link フロー
│   ├── oidc/       # OIDC Code フロー
│   └── passkey/    # Passkey フロー
├── hooks/          # カスタムフック
├── pages/          # ページコンポーネント
└── utils/          # ユーティリティ関数
```

## ライセンス

MIT
