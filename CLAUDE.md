# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

### 開発コマンド

```bash
# Web開発サーバーの起動
npm run dev

# Webアプリのプロダクションビルド
npm run build

# コード品質チェック
npm run lint
npm run lint:fix  # 自動修正
npm run type-check

# テスト実行
npm test         # テスト実行
npm run test:ui  # テストUIで実行
npm run test:run # ワンショット実行

# ビルド結果のプレビュー
npm run preview

# 依存関係のインストール（新規セットアップ時）
npm install
```

## アーキテクチャ

### プロジェクト構造

- **単一のReactアプリケーション**
- Vite + React + TypeScript の Web アプリ

### 技術スタック

- **Node.js**: 22 以上必須
- **パッケージマネージャー**: npm
- **フロントエンド**: React 19 + TypeScript 5.6
- **ビルドツール**: Vite 5.4
- **ルーティング**: TanStack Router
- **スタイリング**: Tailwind CSS v4 + shadcn/ui
- **テスト**: Vitest + Testing Library
- **コード品質**: Biome（フォーマッター・リンター）

### 重要な設定

- **TypeScript**: strict モード有効、未使用変数チェック有効
- **Biome**: スペース 2 つインデント、行幅 100 文字、import 自動整理
- **VSCode**: Biome をデフォルトフォーマッターに設定済み

## 開発時の注意点

1. **日本語対応**: ドキュメントとコミュニケーションは日本語で行う
2. **コード品質**: 保存時に自動フォーマットが実行される
3. **型安全性**: TypeScript の strict モードを維持する
4. **スタイリング**: Tailwind CSS v4 のユーティリティクラスを使用。shadcn/ui コンポーネント（`src/components/ui/`）を活用
5. **ルーティング**: routes/[page]/route.tsx でページを定義
6. **テスト**: Vitest を使用、Testing Library でコンポーネントテスト

### スタイリング詳細

- **UIコンポーネント**: 新規作成時は shadcn/ui の既存コンポーネントを優先的に使用
- **カスタムスタイル**: Tailwind のユーティリティクラスで記述
- **条件付きスタイル**: `cn()` ユーティリティ（`src/lib/utils.ts`）を使用
- **CSS Modules**: 原則として使用しない（レガシーコードにのみ残存）
