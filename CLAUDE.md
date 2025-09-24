# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

### 開発コマンド

```bash
# Web開発サーバーの起動
pnpm dev:web

# Webアプリのプロダクションビルド
pnpm build:web

# コード品質チェック
pnpm lint
pnpm lint:fix  # 自動修正
pnpm type-check

# CSSリンター
pnpm css:lint  # CSSプロパティ順序チェック
pnpm css:fix   # CSS自動修正（プロパティ順序等）

# 依存関係のインストール（新規セットアップ時）
pnpm install
```

### アプリケーション固有のコマンド

apps/web 内で実行:

```bash
pnpm dev       # Vite開発サーバー
pnpm build     # TypeScriptコンパイル + Viteビルド
pnpm preview   # ビルド結果のプレビュー
```

## アーキテクチャ

### モノレポ構造

- **pnpm ワークスペース**を使用したモノレポ
- `apps/` - エンドユーザー向けアプリケーション
  - `web/` - Vite + React + TypeScript の Web アプリ
- `packages/` - 共有パッケージ（将来の拡張用）

### 技術スタック

- **Node.js**: 22 以上必須
- **パッケージマネージャー**: pnpm 10.15.1（frozen-lockfile 有効）
- **フロントエンド**: React 19 + TypeScript 5.6
- **ビルドツール**: Vite 5.4
- **ルーティング**: TanStack Router
- **スタイリング**: CSS Modules
- **コード品質**: Biome（フォーマッター・リンター / CSS 含む統一運用）

### 重要な設定

- **TypeScript**: strict モード有効、未使用変数チェック有効
- **Biome**: スペース 2 つインデント、行幅 100 文字、import 自動整理
- **VSCode**: Biome をデフォルトフォーマッターに設定済み

## 開発時の注意点

1. **日本語対応**: ドキュメントとコミュニケーションは日本語で行う
2. **コード品質**: 保存時に自動フォーマットが実行される
3. **型安全性**: TypeScript の strict モードを維持する
4. **スタイリング**: CSS Modules を使用（Component.module.css）
5. **ルーティング**: routes/[page]/route.tsx でページを定義
6. **モノレポ拡張**: 将来的に mobile アプリや shared パッケージが追加される前提で開発
