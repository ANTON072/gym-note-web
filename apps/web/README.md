# Web Frontend

ジムノート Web フロントエンドアプリケーション

## 技術スタック

- **React** 18.3+ with TypeScript
- **Vite** - ビルドツール
- **TanStack Router** - ルーティング

## プロジェクト構造

```
src/
├── routes/                      # TanStack Router ルートファイル
│   ├── index/
│   │   ├── route.tsx           # / ページ
│   │   └── components/         # index ページ専用コンポーネント
│   │       └── WelcomeSection.tsx
│   ├── about/
│   │   ├── route.tsx           # /about ページ
│   │   └── components/         # about ページ専用コンポーネント
│   │       └── AboutContent.tsx
│   ├── __root.tsx              # ルートレイアウト
│   └── routeTree.gen.ts        # 自動生成ファイル
├── components/                  # 全アプリ共通コンポーネント
│   ├── ui/                     # 再利用可能UIコンポーネント
│   │   └── Button.tsx
│   └── layout/                 # レイアウトコンポーネント
│       └── Header.tsx
├── hooks/                      # カスタムフック
├── lib/                        # ユーティリティ、設定
├── types/                      # 型定義
├── main.tsx                    # アプリケーションエントリーポイント
└── vite-env.d.ts              # Vite 型定義
```

## 設計原則

### ページ専用コンポーネント
各ページのコンポーネントは `routes/[page]/components/` 内に配置し、そのページでのみ使用される機能を実装します。

### 共通コンポーネント  
複数のページで使用されるコンポーネントは `components/` 内に配置します：
- `components/ui/` - Button、Input等の基本UIコンポーネント
- `components/layout/` - Header、Footer等のレイアウトコンポーネント

### ルーティング
TanStack Routerを使用し、ファイルベースルーティングを採用：
- `routes/[page]/route.tsx` - 各ページのルートファイル
- ルートツリーは自動生成される

## 開発コマンド

```bash
# 開発サーバー起動
pnpm dev

# プロダクションビルド
pnpm build

# プレビュー
pnpm preview

# 型チェック
pnpm type-check
```