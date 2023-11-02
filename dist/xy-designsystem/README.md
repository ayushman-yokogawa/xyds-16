# XY Design System コンポーネント（@yokogawaelectric/XY-designsystem）

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## 開発者向けのガイド
 
1. 準備
   1. 管理者からアクセストークンを入手します。  
      2022/04/現在：`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`
   2. `.npmrc`ファイルにアクセストークンを保存します。次のどちらかの操作を行ってください。
       1. ホームディレクトリ(例:`/Users/hogehoge`、`C:\Users\hogehoge`)の下に`.npmrc`という名称のファイルを作成または編集する。
       2. プロジェクトのpackage.jsonと同じディレクトリに`.npmrc`という名称のファイルを作成または編集する。
       
       ※編集するにはVisualSourceCodeをはじめとする任意のIDEやメモ帳等のテキストエディタを使用してください。
      
      .npmrc:

      ```
      @yokogawaelectric:registry=https://npm.pkg.github.com  
      //npm.pkg.github.com/:_authToken=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
      ```

2. プロジェクトへのAngular Materialのインストール  
   `ng add @angular/material`


3. プロジェクトへのインストール  
   `npm install --save @yokogawaelectric/xy-designsystem`


4. モジュールを組み込む  
   src/app/app.module.ts: 
    ```ts
        import {NgModule} from '@angular/core';
        import {BrowserModule} from '@angular/platform-browser';

        import {AppComponent} from './app.component';
        import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
        import {MaterialModule} from './material.module';
        import {FormsModule, ReactiveFormsModule} from "@angular/forms";
        import {RouterModule} from "@angular/router";
        import {AppRoutingModule} from './app-routing.module';
        import {XyModule} from '@yokogawaelectric/xy-designsystem';
        import { MatIconModule } from '@angular/material/icon';


        @NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                MaterialModule,
                ReactiveFormsModule,
                FormsModule,
                RouterModule,
                AppRoutingModule,
                XyModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
        export class AppModule {
    }
    ```

5. プロジェクトにスタイルシートを組み込む  
    スタイルシート`node_modules/@yokogawaelectric/xy-designsystem/theme/xy-theme.scss`をangular.jsonに組み込む。

    angular.json:
    ```json
    {
        "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
        "version": 1,
        "newProjectRoot": "projects",
        "projects": {
            "<プロジェクト名>": {
                "projectType": "application",
                "schematics": {
                    "@schematics/angular:component": {
                        "style": "scss"
                    },
                    "@schematics/angular:application": {
                        "strict": true
                    }
                },
                "root": "",
                "sourceRoot": "src",
                "prefix": "app",
                "architect": {
                    "build": {
                        "builder": "@angular-devkit/build-angular:browser",
                        "options": {
                            "styles": [
                                "node_modules/@yokogawaelectric/xy-designsystem/theme/xy-theme.scss",
                                "src/styles.scss"
                            ],
                            "scripts": []
                        },
                        "configurations": {

                        }
                    }
                }
            }
        }
    }
   ```

6. HTMLにテーマを設定する  
   `<body>`タグにテーマを指定する。  

   src/app/index.html:
    - ライトテーマ（デフォルト）
      `<body class="light-theme">`
      - インディゴテーマ  
        `<body class="light-theme xy-indigo-theme">`
      - ブルーテーマ  
        `<body class="light-theme xy-blue-theme">`
    - ダークテーマ
      `<body class="dark-theme">`  

    ※ 何も指定しない場合は、ライトテーマのインディゴテーマが使用される


7. コンポーネントを使用する
    app.component.htmlやコンポーネントのテンプレート内で`<xy-*****>`を使用する。


## 提供されるコンポーネント
1. ボタン `<xy-button>`
2. ボタントグル `<xy-button-toggle>`
3. テキストフィールド `<xy-input>`
4. テキストエリア `<xy-area>`
5. 検索ボックス `<xy-searchbox>`
6. ドロップダウン `<xy-select>`
7. ラジオボタン `<xy-radio>`
8. チェックボックス `<xy-checkbox>`
9. スライドトグル `<xy-slide-toggle>`
10. コンテナ `<xy-container>`
11. カード `<xy-card>`
12. ダイアログ `<xy-dialog>`
13. メニュー `<yds-menu>`
14. サイドナビ `<xy-sidenav>`
15. タブ `<xy-tab>`
16. ツールバー `<xy-toolbar>`
17. ツリー `<xy-tree>`

## フォントサイズを指定する

アプリケーション全体のフォントサイズを指定するには`html`要素にクラス指定します。
```html
<html class="large">
...
</html>
```
HTML要素(`div`、`table`等)にクラス指定します。
```html
<div class="large">
...
</div>
```
### 指定可能なフォントサイズのクラス
|クラス名| フォントサイズ |
|----|--------:|
|font-x-small| 12.32px |
|font-small| 14.08px |
|font-medium|    16px |
|font-large| 17.92px |
|font-x-large|    24px |

### 定義済みのフォントサイズ
| 要素 | フォントサイズ | ウエイト | 行間 |
|----|--------:|-----:|--------:|
|html|16px|    - |-|
|body|1rem|  400 |1.5|
|.mat-display-1|3rem|  400 | 1.3|
|.mat-display-2|2.5rem|  400 |1.3|
|h1<br>.mat-h1<br>.mat-headline|2rem|  700 |1.6|
|h2<br>.mat-h2<br>.mat-title|1.5rem|  700 |1.6|
|h3<br>.mat-h3<br>.mat-subheading-2|1.125rem|  700 |1.6|
|h4<br>.mat-h4<br>.mat-subheading-1|1.0rem|  700 |1.6|
|.mat-body<br>.mat-body-1|1.0rem|  400 |1.6|
|.mat-body-strong<br>.mat-body-2|0.875rem|  400 |1.6|
|.mat-small<br>.mat-caption|0.75rem|  400 |1.6|
|button<br>a|1rem|  700 |1.8|
|input[type=text]<br>input[type=number]<br>input[type=date]<br>input[type=email]<br>input[type=tel]|1rem|  400 |1.8|
  
