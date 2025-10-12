# コードスタイル

- 1コンポーネントにつき1つのCSS Moduleファイルを作る。
- CSS Moduleファイルの名称は　`[コンポーネント名].module.css` とする。
- クラス名はrootを `.[コンポーネント名]` とし、以下のスタイルは `.[コンポーネント名]__` といったBEM風スタイルを採用する。
- サイズやカラーは open-props を利用する。ただし背景やコントラストなどプロジェクト固有の色は `--color-*` プレフィックスで `global.css` に定義する（例: `--color-background`, `--color-on-contrast`）。
- base.cssはkiso.cssを利用する。
- 必要に応じてglobal.cssを利用する。
- 汎用的なユーティリティクラスは`src/styles/utilities.module.css`に定義する。
- ユーティリティクラスは `.flexCenter`, `.visuallyHidden` のように機能を表すキャメルケースで命名する。

## Global CSS の役割

- `src/global.css` にはリセット・共通トークン（上記 `--color-*` など）・グローバルで共有する最低限のユーティリティのみを記述する。
- ページ固有・レイアウト固有のスタイルは、対象のルートやコンポーネントと同じ場所に CSS Module（例: `src/routes/__root.module.css`）として配置する。
- ルートレイアウトで使用するスタイルは CSS Module を import して適用する。グローバルクラスは新規では追加しない。

## ユーティリティクラスの例

```css
/* レイアウト */
.flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flexBetween {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* スペーシング（open-props活用） */
.mt1 {
  margin-top: var(--size-1);
}
.px3 {
  padding-inline: var(--size-3);
}

/* 汎用的な状態 */
.visuallyHidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.fullWidth {
  width: 100%;
}
.textCenter {
  text-align: center;
}
```
