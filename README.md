# XY Design System コンポーネント
XY Design System コンポーネント配布用


## Current Version
V3.0.0

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## 配布方法

1. 開発者向けのアクセストークンを生成します。
   1. GitHubにログインします。
   2. 任意のページの右上で、プロフィール画像をクリックし、続いて[Settings（設定）]をクリックします。
   3. 左のサイドナビから[Developer settings.]をクリックします。
   4. Developer settings.のページの左のサイドナビから[Personal access tokens]をクリックします。
   5. [Generate new token] をクリックします。
   6. 名前、有効期限、スコープを入力してアクセストークンを生成します。  
   スコープは**repo**をすべて、**read:packages**を選択します。  
   例）  
   ![アクセストークンの生成](docs/images/generate_access_token.png)
   
      - [Personal access tokensページ](https://github.com/settings/tokens)
      - [GitHub公式 アクセストークン生成のガイド](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


2. 開発者にアクセストークンを連絡します。
[開発者向けのガイド](projects/xy-designsystem/README.md)に従って設定を依頼してください。
2022/04/現在：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


## ビルド

XY Design System コンポーネントをビルドするには`ng build xy-designsystem`を実行します。  
ビルドされたコンポーネントは`dist/`ディレクトリに出力されます。

Run `ng build xy-designsystem` to build the project. The build artifacts will be stored in the `dist/` directory.


## パッケージの公開

ビルドが完了した後、`cd dist/xy-designsystem`でdistフォルダに移動して`npm publish`を実行するとパッケージをパブリッシュします。
ただし、mainにソースコードをプッシュするとGitHub Workflowにより自動でパッケージがパブリッシュされるため、手動で`npm publish`を実行する必要はありません。

After building your library with `ng build xy-designsystem`, go to the dist folder `cd dist/xy-designsystem` and run `npm publish`.


## サンプルの実行

このプロジェクトにはサンプルアプリケーション`xy-designsystem-app`も含まれています。
サンプルアプリケーションのディレクトリに移動して`npm run start`を実行します。
```
cd projects/xy-designsystem-app
npm run start
```

## コンポーネント開発

このプロジェクトに新たにコンポーネントを追加する場合、あるいは既存のコンポーネントを修正する場合の手順について説明します。

1. ビルドします。 
    ```
    ng build xy-designsystem
    ```

2. `watch`コマンドでコンポーネントの変更を監視します。  
    ```
    npm run watch
    ```
   これによりビルドを繰り返さなくてもコンポーネントの変更がサンプルアプリケーションに適用されます。


3. サンプルアプリケーションを実行します。
    ```
    cd projects/xy-designsystem-app
    npm run start`
    ```

### コンポーネントの追加

このプロジェクトに新たにコンポーネントを追加する場合は以下の手順で行います。  
_ここでは例として`xy-compo`というコンポーネントを作成することにします。_

1. プロジェクトディレクトリ直下で以下のコマンドを実行し、Angularコンポーネントを追加します。
   ```
   ng generate component xy-compo
   ```
   以下の4ファイルが生成されます。
   ```
   projects/xy-designsystem/src/lib/xy-compo/xy-compo.component.css
   projects/xy-designsystem/src/lib/xy-compo/xy-compo.component.html
   projects/xy-designsystem/src/lib/xy-compo/xy-compo.component.spec.ts
   projects/xy-designsystem/src/lib/xy-compo/xy-compo.component.ts
   ```

2. モジュールを作成します。
   ```
   ng generate module xy-compo
   ```
   以下の1ファイルが生成されます。
   ```
   projects/xy-designsystem/src/lib/xy-compo/xy-compo.module.ts
   ```

3. モジュールを編集します。  
   1.で作成した`XyCompoComponent`をモジュールに追加します。

   ```diff
   import {NgModule} from '@angular/core';
   import {CommonModule} from '@angular/common';
   + import {XyCompoComponent} from "./xy-compo.component";
   
   
   @NgModule({
      declarations: [
   +    XyCompoComponent
      ],
      imports: [
         CommonModule
   +  ],
   +  exports: [
   +     XyCompoComponent,
      ]
   })
   export class XyCompoModule { }
   ```

4. `projects/xy-designsystem/src/lib/xy.module.ts`を編集します。  
　　1.でxy-designsystemのメインのモジュールファイルにも`XyCompoComponent`が追加されているので2.で作成した`XyCompoModuleに差し替えます。`

   ```diff
   import {NgModule} from '@angular/core';
   import {XyButtonModule} from './xy-button/xy-button.module';
   ... 略
   - import { XyCompoComponent } from './xy-compo/xy-compo.component';

   @NgModule({
      exports: [
         XyButtonModule,
         ... 略
   +     XyCompoModule
      ],
      declarations: [
   -     XyCompoComponent
      ],
      imports: []
   })
   export class XyModule {
   }
   ```

5. テンプレートHTML、TypeScriptファイルを編集します。  
   作成しようとしているコンポーネントの要件に従ってコンポーネントを実装してください。

### カスタムアイコンの追加
#### アイコンを定義する
1. 画像アイコン(PNG/JPEG/GIF)を追加する
   1. 画像ファイルを使用して追加する。
      1. アイコン名を決めます。（例：「hoge」）
      2. 画像ファイルを`projects/xy-designsystem/assets/images`にコピーします。
      3. `projects/xy-designsystem/src/lib/xy-icon/xy-icon.component.scss`でアイコンを指定します。
         ```scss
         .hoge {
            width: 24px;
            height: 24px;
            content: url("../../../assets/images/hoge.png");
         }
         ```
      4. `projects/xy-designsystem/src/lib/xy-icon/xy-icon.component.html`にタグを追加します。  
         ```html
         <ng-container *ngIf="content == 'hoge'"><div [className]="content"></div></ng-container>
         ```
         `*ngIf="content == 'hoge'"`のとすることで`hoge`が指定されたときに3のスタイルシートが適用されてアイコンが表示されます。

   2. base64エンコードされたデータを使用して追加する。
      1. アイコン名を決めます。（例：「hoge」）
      2. アイコン画像をbase64エンコードします。  
       例えばPHPでは以下の方法でエンコードできます。
         ```php
         $img_data = base64_encode(file_get_contents('画像URL'));
         ```
      3. `projects/xy-designsystem/src/lib/xy-icon/xy-icon.component.html`にエンコードされたデータを埋め込みます。
         ```html
         <ng-container *ngIf="content == 'hoge'"><img src="data:image/png;base64,2でエンコードしたデータ($img_dataの中身)"></ng-container>
         ```
         `*ngIf="content == 'hoge'"`のとすることで`hoge`が指定されたときにこのアイコンが表示されます。

2. SVGアイコンを追加する
   1. 画像ファイルを使用して追加する。 
      1. 1の画像ファイルの場合と同様に組み込みます。
   2. SVGソースコードを使用して追加する。
      1. アイコン名を決めます。（例：「hoge」）
      2. `projects/xy-designsystem/src/lib/xy-icon/xy-icon.component.html`にソースコードを埋め込みます。   
         ```html
         <ng-container *ngIf="content == 'hoge'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs><style>.a{fill:#bbb;}</style></defs><path class="a" d="M3,6H1V1H6V3H3Zm7-5V3h3V6h2V1ZM3,10H1v5H6V13H3Zm10,3H10v2h5V10H13ZM11,9V7H9V5H7V7H5V9H7v2H9V9Z"/></svg></ng-container>
         ```
         `*ngIf="content == 'hoge'"`のとすることで`hoge`が指定されたときにこのアイコンが表示されます。


3. フォントアイコンを追加する 
   1. アイコン名を決めます。（例：「hoge」） 
   2. フォントファイルを`projects/xy-designsystem/assets/fonts`にコピーします。
   3. `projects/xy-designsystem/src/lib/xy-icon/xy-icon.component.scss`でアイコンを指定します。
      ```scss
      // フォントファイルの読み込み
      @font-face {
        font-family: 'icomoon';
        src:  url('../../../assets/fonts/icomoon.eot?u8bcog');
        src:  url('../../../assets/fonts/icomoon.eot?u8bcog#iefix') format('embedded-opentype'),
        url('../../../assets/fonts/icomoon.ttf?u8bcog') format('truetype'),
        url('../../../assets/fonts/icomoon.woff?u8bcog') format('woff'),
        url('../../../assets/fonts/icomoon.svg?u8bcog#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
      }
      
      // フォントアイコン全体のスタイル設定
      [class^="icon-"], [class*=" icon-"] {
        font-family: 'icomoon' !important;
        speak: never;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      // 個々のアイコンの定義
      .icon-hoge:before {
        content: "\e916"; // アイコンの文字コードを指定します
      }
      ```
   4. `projects/xy-designsystem/src/lib/xy-icon/xy-icon.component.html`にタグを追加します。
      ```html
      <ng-container *ngIf="content == 'hoge'"><div class="icon-hoge"></div></ng-container>
      ```
      `*ngIf="content == 'hoge'"`のとすることで`hoge`が指定されたときに3のスタイルシートが適用されてアイコンが表示されます。


#### アイコンを使用する
コンポーネント利用者は`xy-icon`を使用することで定義されたアイコンを利用できます。
```html
<xy-icon>hoge</xy-icon>
```

### XY Design Systemのテーマを使用する

コンポーネントのスタイルシートscssファイルの先頭でテーマファイルを読み込みます。
 ```scss
 @use 'sass:map';
 @use '@angular/material' as mat;
 @use '../../../theme/xy-theme' as theme;
 ```
   
 #### フォントを指定する
 ```scss
 font-family: theme.$base-font;
 ```
 場合によっては`!important`の指定が必要な場合があります。
 ```scss
 font-family: theme.$base-font !important;
 ```

#### フォントサイズを指定する
基本となるフォントサイズからの相対サイズ(`rem`)で指定します。
   ```scss
   font-size: 1.2rem; /* 16px * 1.2 = 19.2px */
 ```

 #### カラーを指定する
 ```scss
 color: mat.get-color-from-palette(theme.$xy-base, 900);
 background-color: mat.get-color-from-palette(theme.$xy-base, 900);
 ```
XY Design Systemのカラーパレットは<a href="docs/color_pallet.md">こちら</a>を参照してください。

不透明のカラーを指定する場合は以下のように指定します。
```scss
color mat.get-color-from-palette(theme.<パレット名>, <パレット番号>);
```
半透明のカラーを指定する場合は以下のように指定します。
```scss
color mat.get-color-from-palette(theme.<パレット名>, <パレット番号>, <透明度>);
```
※ 透明度には0〜1.0の数値を指定します。  
  


 #### マージンを指定する

スタイルシートの先頭で`xy-spacing`を読み込みます。
 ```scss
@use '../../../theme/xy-spacing' as spacing;
```
任意の要素にマージンを指定します。
 ```scss
margin: spacing.$spacing-m 0;
 ```
XY Design Systemに定義されているスペーシングは以下の通りです。

| 変数名           |    サイズ |
|---------------|-------:|
| $spacing-base |    4px |
| $spacing-xxs  |    4px |
| $spacing-xs   |    8px |
| $spacing-s    |   16px |
| $spacing-m    |   24px |
| $spacing-l    |   32px |
| $spacing-xl   |   48px |
| $spacing-xxl  |   64px |
| $spacing-xxxl |   96px |


### 単体テスト/Unit test

コンポーネント毎に単体テストコードを作成してください。  
Angularの標準に則りKarmaフレームワークを使用してテストを行います。
`xy-<コンポーネント名>.component.spec.ts`にテストコードを記述してください。

以下のコマンドでテストを実行します。
```
ng test xy-designsystem
```

## Storybookの実行

Storybookにコンポーネントを追加するため、以下のコマンドを実行してStorybookを起動します。
```
npm run storybook
```

### Storyを追加する
`stories`ディレクトリに<コンポーネント名>.stories.tsファイルを追加します。  
例: `XyCompo.stories.ts`

```ts
export default {
    title: 'XyComponents/XyCompo',
    component: XyCompoComponent,
    options: {
        // ...略
    },
    argTypes: {
        // プロパティの詳細
    },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyCompoModule],
    }),
  ]
} as Meta;

const Template: Story<XyCompoComponent> = (args) => ({
  props: args,
  template: `
    <xy-compo color="${args.color}" disabled="${args._disabled}">${args.content}</xy-compo>`,
});
export const Basic = Template.bind({});
Basic.args = {
};
```
`argTypes`にコンポーネントのプロパティ、メソッドの詳細を記述します。  
プロパティの詳細の書式は<a href="https://storybook.js.org/docs/react/api/argtypes#automatic-argtype-inference">Storybookのドキュメント</a>を参照してください。

プロパティ、メソッドを隠したい場合は以下の様に記述します。
```ts
'<プロパティ名>': { table: {disable: true}}
```

コードプレビューを出力するには、`const Template`の`template`にテンプレートタグを記述します。
```ts
template: `
    <xy-compo color="${args.color}" disabled="${args._disabled}">${args.content}</xy-compo>`,
```
Storybook上でプロパティの値を変更してコードを動的にプレビューするには変数を`${args.<プロパティ>}`の形式で指定します。

## Storybookをchromaticにデプロイ(2022/5 Chromatic不使用）

Storybookを<a href="https://www.chromatic.com/">chromatic</a>にデプロイして利用者に公開します。

### chromaticにプロジェクトを作成する(2022/5 Chromatic不使用）

- <a href="https://www.chromatic.com/">chromatic</a>にサインアップし、プロジェクトを追加します。<br/>
- プロジェクト・トークンが含むコマンドが表示されるのでメモします。

### GitHubにプロジェクト・トークンを登録し権限設定する(2022/5 Chromatic不使用）

1. GitHubにサインインし、リポジトリ画面から`Actions secrets`画面を開きます（`Setting`→`Secrets`→`Actions`）
2. `New repository secret`ボタンを押し、以下の内容で登録します。
   - `Name`: `CHROMATIC_PROJECT_TOKEN`
   - `Value`: プロジェクト・トークン
3. `Actions permissions`の設定画面を開きます（`Setting`→`Actions`→`General`）
4. workflowを実行する権限を設定します。
   - GitHub、Chromaticおよびプロジェクトのworkflowが実行できる必要があります。
   - `Allow all actions and reusable workflows`を選択すると、全てのworkflowが実行可能になります。

### 手動でChromaticにStorybookを登録する。(2022/5 Chromatic不使用）

1. chromaticパッケージのインストールします。
    ```bash 
    npm install --save-dev chromatic
    ```
2. プロジェクトルートでStorybookを登録します。
    ```bash 
    npx chromatic --project-token=<PROJECT_TOKEN>
    ```

### Chromaticの自動デプロイを設定する(2022/5 Chromatic不使用）

1. `.github\workflows\`にworkflowファイル`chromatic.yml`を追加します。
   - ブランチへのプッシュを監視し、依存関係の更新、Storybookをビルド後にChromaticにアップロードします。 
2. 監視対象のブランチを`on.push.braches`に指定します（main部分）。
```yaml
# .github/workflows/chromatic.yml

# Workflow name
name: 'Chromatic'

# Event for the workflow
on:
  push:
    branches:
      - main

# List of jobs
jobs:
  chromatic-deployment:
    # Operating System
    runs-on: ubuntu-latest
    # Job steps
    steps:
      - uses: actions/checkout@v1
      - name: Install dependencies
        run: yarn
        # 👇 Adds Chromatic as a step in the workflow
      - name: Publish to Chromatic
        uses: chromaui/action@v1
        # Chromatic GitHub Action options
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # 👇 Chromatic projectToken, refer to the manage page to obtain it.
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```
「GitHubにプロジェクト・トークンを登録し権限設定する」でGitHubにトークンを登録しない場合は、`chromatic.yml`の最後の行にトークンを埋め込むこともできます。
```yaml
          # 👇 Chromatic projectToken, refer to the manage page to obtain it.
          projectToken: 517faa7dd6c4
 ```

3. GitHubの監視対象ブランチにプッシュするとStorybookが更新されます。
4. 実行結果の確認
   - workflowの実行結果はGitHubのリポジトリ画面で`Actions`タブより確認できます。
   - chromaticの`Builds`画面に、最新ビルドが追加されます。ビルド詳細画面を開くと、エラーや変更内容が表示されます。`View Storybook`を押すとStorybookを表示します。

### Chromaticを利用者に公開する(2022/5 Chromatic不使用）

- chromaticの`Manage`画面の`Collaborate`タブでアクセス制限を行います。
  - `VISIBILITY`項目の`Make pulbic`ボタンよりインターネットに一般公開します。
  - 特定ユーザーに役割を割り当てる場合は、`COLLABORATORS`項目から、`Invite via email`ボタンにより、メールアドレスと役割を入力して招待します。
  - 役割は以下があります。 

| 役割                 | 内容                                                                                 |
|--------------------|------------------------------------------------------------------------------------|
| Owner              | プロジェクトを管理、削除し、共同編集者に役割を管理/割り当てることができます。                                            |
| Developer(default) | プロジェクトの管理、テストのレビュー、PRの承認、およびレビュー担当者の割り当てを行うことができます。<br/>共同編集者に役割を割り当てることはできません。    |
| Reviewer           | レビュー担当者コメントを残したり、テストをレビューしたり、割り当てられたPRを承認したりできます。<br/>他人を割り当てたり、自己承認したりすることはできません。 |
| Viewer             | プロジェクトへの読み取り専用アクセス。                                                                |


## StorybookをGitHub Pagesに公開する

1. `.github\workflows\`にworkflowファイル`storybook.yml`を追加します。
    - ブランチへのプッシュを監視し、依存関係の更新、Storybookをビルド後にGitHub Pages用のブランチ(gh-pages)にプッシュします。
```yaml
# .github/workflows/storybook.yml

# Workflow name
name: deploy-storybook

# Event for the workflow
on:
  push:
    branches:
      - main

# List of jobs
jobs:
  deploy-storybook:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: install packages
        run: yarn install
      - name: build storybook
        run: npm run output-storybook
      - name: deploy storybook
        uses: JamesIves/github-pages-deploy-action@4.1.0
        with:
          branch: gh-pages
          folder: docs/storybook
```
2. 監視対象のブランチを`on.push.braches`に指定します（main部分）。
3. GitHubの監視対象ブランチにプッシュするとStorybookがgh-pagesブランチにプッシュされます。
4. 実行結果の確認
    - workflowの実行結果はGitHubのリポジトリ画面で`Actions`タブより確認できます。
5. GitHub Pagesへの公開
    - リポジトリ画面で`Settings`タブより設定画面を開きます。
    - 左のメニューから`Pages`を選択します。
    - ソースに`gh-pages`、フォルダに`/(root)`を選択して`Save`ボタンをクリックします。
    ![](docs/images/github_pages.png)
    - パブリッシュされたページのURLが表示されます。
    ![](docs/images/github_pages2.png)


## 開発版Storybookを別リポジトリのGitHub Pagesに公開する

1. 開発版Storybook用のリポジトリを作成します。  
   - 例) yokogawaelectric/XYDS-dev
2. `.github\workflows\`にworkflowファイル`storybook-dev.yml`を追加します。
   - ブランチへのプッシュを監視し、依存関係の更新、Storybookをビルド後にXYDS-devブランチをチェックアウトし、差分をコミット、プッシュします。
```yaml
# .github/workflows/storybook-dev.yml

# Workflow name
name: deploy-storybook-dev

# Event for the workflow
on:
  push:
    branches:
      - dev

# List of jobs
jobs:
  deploy-storybook-dev:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: install packages
        run: yarn install

      - name: build storybook
        run: npm run output-storybook

      - name: Checkout storybook repository
        uses: actions/checkout@v3
        with:
          repository: yokogawaelectric/XYDS-dev
          token: ${{ secrets.STORYBOOK_PAT }}
          path: docs/storybook-dev

      - name: Copy storybook to storybook-dev
        run: |
          chmod 755 ./.github/sync.sh
          ./.github/sync.sh

      - name: Deploy pages
        run: |
          git config --global user.email "<your@mail.address>"
          git config --global user.name "<your acount name>"
          cd docs/storybook-dev
          if ! git diff --cached --quiet; then
            git commit -m "Deploy $GITHUB_SHA by GitHub Actions"
            git push
          fi
```
3. `storybook-dev.yml`をリポジトリに合わせて変更します。  
    - 監視対象のブランチを`on.push.braches`に指定します（dev部分）
    - yokogawaelectricのメインアカウントのメールアドレスを`<your@mail.address>`の箇所に設定します。
    - yokogawaelectricのメインアカウントのアカウント名を`<your acount names>`の箇所に設定します。
    *2022/5 the Organization owner is ayumi.oka@yokogawa.com YHQ Cloud Promotion Sec. Global Infra & Security Center, Infra Management Dept.Digital Strategy Headquarters
4. yokogawaelectricのメインアカウントでGitHubにログインして、「配布方法/Distribute」と同様にPersonal Access Tokenを設定します。
    - 権限は`repo`のみチェックする。  
    ![](docs/images/generate_access_token2.png)
5. XY-designsystemリポジトリの`Settings` > `Secrets` > `Actions`に4で生成したPersonal Access Tokenを登録します。
    - 名称は`STORYBOOK_PAT`とします。  
    ![](docs/images/register_actions_secrets.png)
6. XY-designsystemのdevブランチにソースをプッシュするとStorybookをビルドしXYDS-devリポジトリのmainブランチにプッシュされます。
7. 実行結果の確認
    - workflowの実行結果はXY-designsystemリポジトリの`Actions`タブより確認できます。
5. GitHub Pagesへの公開
    - XYDS-devリポジトリの`Settings` > `Pages`で設定します。
    - ソースに`main`、フォルダに`/(root)`を選択して`Save`ボタンをクリックします。
  

## List of component
   
   1.  Table -  <Xy-Table>
   2.  Radio - <Xy-Radio>
   3.  Input - <xy-input>
   4.  Select - <xy-select>
   4.  Menu - <xy-menu>
   5.  Badge <xy-badge>​
   6.  Breadcrumb <xy-breadcrumb>​
   7.  Button <xy-button>​
   8.  Button toggle <xy-button-toggle>​
   9.  Text field <xy-input>​
   10. Search box <xy-searchbox>​
   11. Dropdown box <xy-select>​
   12. Radio button <xy-radio>​
   13. Checkbox <xy-checkbox>​
   14. Slide toggle <xy-slide-toggle>​
   15. Container <xy-container>​
   16. Card <xy-card>​
   17. Dialog <xy-dialog>​
   18. Menu <yds-menu>​ 
   19. Side navigation <xy-sidenav>​
   20. Tab <xy-tab>​
   21. Tool bar <xy-toolbar>​
   22. Tree menu <xy-tree>
   ​

## Note :
   Please add version **(14.2.0)** while installing **@angular/material@14.2.0** .

## List of component available with this version
   ### V1.1.2

   1.  Table components is available with this build.
   2.  Radio button bug fixes
   3.  Input box bug fixes
   4.  Select dropdown option bug fixes.
   5.  Icon related bug fixes

## List of component available with this version
   ### V1.1.3

   1. Xy-input - Input Validation fixed
   2. Xy-Select - Select Option Two-way Binding Fixed
   3. Xy-sidenav - Sidenav default Collapse added
   4. xy-toolbar - Toolbar color change option added
   

## List of component available with this version
   ### V1.1.4

   1. Xy-select - Select Validation
 
## List of component available with this version
   ### V1.1.5 - 7

   1. Internal testing with module

## List of component available with this version
   ### V1.1.5 - 8

   1. Dependency node modules updated.

## List of component available with this version
   ### V1.1.9

   1.	XY tab related issue related fixes.
   2. XY tab Icon display issue related fixes.
   3. XY tool bar component added
   4. Search box related issue has been updated.
   5. Dynamic checkbox implementation issue related fixes.

## List of component available with this version
   ### V2.0.0

   1. XyProgressbar new component added.
   2. XyProgressSpinner new component added.
   3. XySlider new component added.
   4. XySnackbar new component added.
   5. XyFooter dark theame added.
   6. XyTooltip Position related issue has been updated.
   7. XyStepper new component added.
   8. XyToolBar renamed with XyTopAppBar.
   9. Reorganized (TOC) components on the left navigation in alphabetical order.
   
   
## List of fixes available with this version
   ### V2.1.16

   1. xy-tooltip Bug Fixes 
   2. Xy-tooltip support in xy-sidebar

      
## List of fixes available with this version
   ### V2.1.18

   1. Xy-breadcrumb is now support Lazy Loading
   2. Xy-sidebar fixes avaiable


## List of fixes available with this version
   ### V3.0.0

   #### Mobile Support [New]

   1. Xy-tab is support on Mobile
   2. Xy-footer is support on Mobile
   3. Xy-card is support on Mobile
   4. Xy-side-navigation is support on Mobile

   #### Component Updates
   1. Xy-snackbar Support custom Actions
   2. Xy-side-nav styling (font-size, Hierarchy) is updated,
   3. Xy-breadcrumb is styling (Active routs, and previous routes) is updated
   4. Xy-tooltip changes is added

   #### Storybook Changes
   1. Xy-tooltip Info Updated
   2. Xy-sid-nav Info Updated
   3. Xy-breadcrumb Info Updated
   4. Xy-snackbar Info Updated

    #### Sample Page Changes
   1. Xy-card example Updated
   2. Xy-tooltip is Updated
   3. Xy-snackbar example is added


    
## List of fixes available with this version
   ### V3.1.0

   #### Component Updates
   1. Xy-autocomplete (Added error message and hint message option)
   2. Xy-searchbox (Big fixes)
   3. Xy-card (Bug Fixes) - Icon overlapping issue fixed
   4. Xy-Card component content gapping updated

   #### Sample Page Changes
   1. Xy-Breadcrumb example Added
   2. Xy-datepicker (simple) example is added
   3. Xy-Sidenav naming changes


## List of fixes available with this version
   ### V3.2.0

   #### Sample Page Changes
   1. Xy-Chips example Added
   2. Xy-datepicker (simple) example is added [DD/MM/YYYY]
  