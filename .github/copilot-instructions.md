# Copilot Instructions for AI Coding Agents

このプロジェクトは Vite + React + TypeScript をベースにしたフロントエンドです。AI コーディングエージェントが即戦力となるための重要な知識・ワークフロー・設計方針をまとめます。

## アーキテクチャ概要
- **主要技術**: React 19, TypeScript 5.6, Vite 5.4, TanStack Router, CSS Modules, Firebase
- **ディレクトリ構成**:
  - `src/components/` : UIコンポーネント（CSS Modulesでスタイリング）
  - `src/features/` : ドメインごとの機能（auth, dashboard, exercise, navigation）
  - `src/routes/` : ページルーティング（TanStack Router）
  - `src/store/` : グローバルステート管理
  - `src/lib/` : 汎用ロジック（http, validation, firebase連携など）
  - `src/constants/` : 定数管理
  - `src/configs/` : 外部サービス設定（firebase など）

## 開発ワークフロー
- **ビルド**: `pnpm build` または `npm run build`
- **テスト**: `npm test`（Vitest + Testing Library）
  - UIテスト: `npm run test:ui`
  - ワンショット: `npm run test:run`
- **コード品質**: Biome（`biome.json`で設定、VSCodeでデフォルトフォーマッター）
- **型安全性**: TypeScript strict モード有効
- **スタイリング**: CSS Modules（`Component.module.css`）
- **ルーティング**: `src/routes/[page].tsx` でページ定義

## プロジェクト固有のパターン・注意点
- **機能分割**: `features/`配下でドメインごとに分離。例: `features/exercise/components/ExerciseForm.tsx`
- **hooks, lib, schema, action**: 各機能ごとに `hooks/`, `lib/`, `schema.ts`, `create*Action.ts` などを分離
- **Firebase連携**: `src/configs/firebase.ts` で初期化、`features/auth/lib/auth.ts` で認証ロジック
- **グローバルCSS**: `src/global.css` を参照
- **CSSトークン**: open-props をベースに、背景やコントラストなどプロジェクト固有色は `--color-*` プレフィックス（例: `--color-background`, `--color-on-contrast`）で `global.css` に定義
- **レイアウトスタイル**: ルートやページ専用のレイアウトは該当 TSX と同階層の CSS Module（例: `src/routes/__root.module.css`）で管理し、グローバルクラスは追加しない

## レビュー時の着眼点
- `global.css` に新たなレイアウト用クラスやドメイン固有スタイルが追加されていないかを確認し、違反があれば必ず指摘する。
- 背景やコントラスト用のカラーは `--color-*` トークンを使用しているか、open-props の既存トークンと混在していないかを確認し、逸脱があれば指摘する。
- **テストセットアップ**: `src/test/setup.ts` でテスト環境初期化
- **定数管理**: `src/constants/` 配下でドメインごとに分離

## 参考ファイル
- `README.md`, `CLAUDE.md` : 開発・運用の補足情報
- `biome.json`, `tsconfig.json`, `vite.config.ts`, `vitest.config.ts` : 各種設定

---

**不明点や追加情報が必要な場合は、README.mdやCLAUDE.mdを参照し、設計意図やワークフローを明記してください。**
