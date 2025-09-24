# Gym Note Frontend

## 技術スタック

- **パッケージマネージャー**: pnpm (v10.15.1)
- **Node.js**: 22 以上
- **コード品質**: Biome (Formatter & Linter)
- **アイコン**: Heroicons (コピーして利用)

## プロジェクト構成

```text
gym-note-frontend/
├── apps/
│   └── web/              # Webフロントエンド (Vite + React + TypeScript)
├── packages/             # 共有パッケージ
├── biome.json           # Biome設定
├── pnpm-workspace.yaml  # pnpmワークスペース設定
└── package.json         # ルートパッケージ
```

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# Web開発サーバーの起動
pnpm dev:web

# Webアプリのビルド
pnpm build:web
```

## 開発コマンド

- `pnpm dev:web` - Web アプリケーションの開発サーバーを起動
- `pnpm build:web` - Web アプリケーションのプロダクションビルド
- `pnpm lint` - コードの静的解析
- `pnpm lint:fix` - コードの自動修正
- `pnpm type-check` - 型チェックの実行
