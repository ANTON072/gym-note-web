# Copilot Instructions for AI Coding Agents

このプロジェクトは Vite + React + TypeScript をベースにしたフロントエンドです。AI コーディングエージェントが即戦力となるための重要な知識・ワークフロー・設計方針をまとめます。

## アーキテクチャ概要
- **主要技術**: React 19, TypeScript 5.6, Vite 5.4, TanStack Router, Tailwind CSS v4, shadcn/ui, Firebase
- **ディレクトリ構成**:
  - `src/components/` : UIコンポーネント（Tailwind CSS でスタイリング）
  - `src/components/ui/` : shadcn/ui の再利用可能なコンポーネント
  - `src/features/` : ドメインごとの機能（auth, dashboard, exercise, navigation, note）
  - `src/routes/` : ページルーティング（TanStack Router）
  - `src/store/` : グローバルステート管理
  - `src/lib/` : 汎用ロジック（http, validation, firebase連携、utils など）
  - `src/constants/` : 定数管理
  - `src/configs/` : 外部サービス設定（firebase など）

## 開発ワークフロー
- **ビルド**: `pnpm build` または `npm run build`
- **テスト**: `npm test`（Vitest + Testing Library）
  - UIテスト: `npm run test:ui`
  - ワンショット: `npm run test:run`
- **コード品質**: Biome（`biome.json`で設定、VSCodeでデフォルトフォーマッター）
- **型安全性**: TypeScript strict モード有効
- **スタイリング**: Tailwind CSS v4 のユーティリティクラス + shadcn/ui コンポーネント
- **ルーティング**: `src/routes/[page].tsx` でページ定義

## プロジェクト固有のパターン・注意点
- **機能分割**: `features/`配下でドメインごとに分離。例: `features/exercise/components/ExerciseForm.tsx`
- **hooks, lib, schema, action**: 各機能ごとに `hooks/`, `lib/`, `schema.ts`, `create*Action.ts` などを分離
- **Firebase連携**: `src/configs/firebase.ts` で初期化、`features/auth/lib/auth.ts` で認証ロジック
- **グローバルCSS**: `src/global.css` を参照（Tailwind ディレクティブ、CSS変数の定義）
- **デザイントークン**: プロジェクト固有色は `--color-*` プレフィックス（例: `--color-background`, `--color-foreground`）で `global.css` に CSS 変数として定義
- **スタイリングアプローチ**:
  - UIコンポーネント: `src/components/ui/` の shadcn/ui コンポーネントを優先的に使用
  - カスタムスタイル: Tailwind のユーティリティクラスで記述
  - 条件付きスタイル: `cn()` ユーティリティ（`src/lib/utils.ts`）を使用
  - CSS Modules: 原則として使用しない（レガシーコードにのみ残存）

## レビュー時の着眼点
- `global.css` に新たなレイアウト用クラスやドメイン固有スタイルが追加されていないかを確認し、違反があれば必ず指摘する。
- 新規UIコンポーネント作成時に shadcn/ui の既存コンポーネントが利用可能かどうかを確認し、可能であれば shadcn/ui を使うよう指摘する。
- Tailwind のユーティリティクラスを適切に使用しているか（インラインスタイルや CSS Modules を新規作成していないか）を確認する。
- 条件付きスタイル適用時に `cn()` ユーティリティが使われているかを確認する。
- **テストセットアップ**: `src/test/setup.ts` でテスト環境初期化
- **定数管理**: `src/constants/` 配下でドメインごとに分離

## 参考ファイル
- `README.md`, `CLAUDE.md` : 開発・運用の補足情報
- `biome.json`, `tsconfig.json`, `vite.config.ts`, `vitest.config.ts` : 各種設定

---

**不明点や追加情報が必要な場合は、README.mdやCLAUDE.mdを参照し、設計意図やワークフローを明記してください。**
