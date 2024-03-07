
https://tailwindcss.com/

https://sailboatui.com/docs/components/layout/

インストール
```
npm install -D tailwindcss
npx tailwindcss init
```
tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
src/input.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
エラーを消す設定
設定＞settings.js
"css.lint.unknownAtRules": "ignore"

Tailwind CLI ビルド プロセスを開始する

この設定は/src/css/にinput.ccを作成するように設定しています。

```
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch
```
次回からnpm run buildで動作するように設定
package.json  ”script”を追加
```
{
  "devDependencies": {
    "tailwindcss": "^3.4.1"
  },
  "scripts": {
    "build": "npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch"
  }
}
```


VSCodeプラグイン

https://tailwindcss.com/docs/editor-setup
に沿って設定