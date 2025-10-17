# コードスタイル

## スタイリング方針

このプロジェクトでは **Tailwind CSS v4** と **shadcn/ui** を使用してスタイリングを行います。

### 基本方針

- **Tailwind v4**: ユーティリティファーストのアプローチでスタイリング
- **shadcn/ui**: 再利用可能なUIコンポーネントライブラリとして利用
  - コンポーネントは `src/components/ui/` 配下に配置
  - Radix UI を基盤とした高品質なコンポーネント
- **CSS Modules**: 原則として使用しない（レガシーコードにのみ残存）

### Tailwind CSS の使用方法

- クラス名は直接 JSX の `className` プロパティに記述
- 条件付きスタイルは `cn()` ユーティリティを使用（`src/lib/utils.ts`）
- プロジェクト固有のデザイントークンは `src/global.css` の `:root` に CSS 変数として定義

### shadcn/ui コンポーネントの利用

- 新規UIコンポーネントが必要な場合は、まず shadcn/ui を確認
- 既存の shadcn/ui コンポーネントをカスタマイズする場合は `src/components/ui/` 内で編集
- shadcn/ui にないコンポーネントのみカスタム実装を検討

## デザイントークン

### カラー

プロジェクト固有の色は `src/global.css` に CSS 変数として定義します。

```css
:root {
  --color-background: #ffffff;
  --color-foreground: #000000;
  --color-primary: #0070f3;
  /* その他のカスタムカラー */
}
```

Tailwind のテーマ設定で参照可能です。

### スペーシング・サイズ

Tailwind のデフォルトスペーシングシステムを使用します（`p-4`, `m-2`, `gap-6` など）。

## Global CSS の役割

- `src/global.css` にはリセット・Tailwind ディレクティブ・共通トークン（`--color-*` など）・グローバルで共有する最低限のスタイルのみを記述する
- ページ固有・レイアウト固有のスタイルは、Tailwind のユーティリティクラスで対応する
- どうしても必要な場合のみ、対象のルートやコンポーネントと同じ場所に CSS Module として配置する

## コンポーネントスタイリングのベストプラクティス

### 推奨パターン

```tsx
import { cn } from '@/lib/utils'

export function MyComponent({ className, ...props }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-4 p-6', className)} {...props}>
      <h1 className="text-2xl font-bold">タイトル</h1>
    </div>
  )
}
```

### shadcn/ui コンポーネントの使用例

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ExamplePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>カードタイトル</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">説明文</p>
        <Button variant="default" size="lg" className="mt-4">
          実行
        </Button>
      </CardContent>
    </Card>
  )
}
```

## 条件付きスタイルの適用

`cn()` ユーティリティを使用して条件付きでクラスを適用します。

```tsx
import { cn } from '@/lib/utils'

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        status === 'active' && 'bg-green-100 text-green-800',
        status === 'inactive' && 'bg-gray-100 text-gray-800',
      )}
    >
      {status}
    </span>
  )
}
```

## レスポンシブデザイン

Tailwind のレスポンシブユーティリティを活用します。

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* コンテンツ */}
</div>
```

## ダークモード対応

Tailwind の `dark:` プレフィックスを使用してダークモードに対応します。

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  {/* コンテンツ */}
</div>
```
