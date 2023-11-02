# XY Design System Components（@yokogawaelectric/XY-designsystem）

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Developer's Guide
 
1. Preparation
   1. Get the access token from administrator.  
   　　2022 April now : `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`

   2. Save the access token in the `.npmrc` file. Do either of the following.
       1. Create or edit a file named `.npmrc` under your home directory (e.g. `/Users/hogehoge`, `C:\Users\hogehoge`).
       2. Ceate or edit a file named `.npmrc` in the same directory as the project's package.json.
       
       ※To edit the file, use any IDE such as VisualSourceCode or a text editor such as MS Notepad.
　   　※Please make sure that the file extension is ..npmrc.
  
      .npmrc:

      ```
      @yokogawaelectric:registry=https://npm.pkg.github.com  
      //npm.pkg.github.com/:_authToken=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
      ```

2. Installation of Angular Material in a project
   `ng add @angular/material`


3. Installation on a project
   `npm install --save @yokogawaelectric/xy-designsystem`


4. Incorporate modules 
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

5. Incorporate style sheets into your project
    Incorporate the stylesheet `node_modules/@yokogawaelectric/xy-designsystem/theme/xy-theme.scss` into angular.json.

    angular.json:
    ```json
    {
        "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
        "version": 1,
        "newProjectRoot": "projects",
        "projects": {
            "<Project name>": {
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

6. Setting the color theme in HTML
   Specify the theme in the `<body>` tag.  

   src/app/index.html:
    - Light theme (Default)
      - Indigo theme  
        `<body class="light-theme xy-indigo-theme">`
      - Blue theme  
        `<body class="light-theme xy-blue-theme">`
    - Dark theme  
        `<body class="dark-theme">`  

    - If nothing is specified, the Light theme - Indigo theme is used

7. Use components
   Use `<xy-*****>` in app.component.html or component templates.


## Components provided
1. Button `<xy-button>`
2. Button toggle `<xy-button-toggle>`
3. Text field  `<xy-input>`
4. Search box `<xy-searchbox>`
5. Dropdown box `<xy-select>`
6. Radio button `<xy-radio>`
7. Checkbox `<xy-checkbox>`
9. Slide toggle `<xy-slide-toggle>`
10. Container `<xy-container>`
11. Card `<xy-card>`
12. Dialog `<xy-dialog>`
13. Menu `<yds-menu>`
15. Side navigation `<xy-sidenav>`
16. Tab `<xy-tab>`
17. Tool bar `<xy-toolbar>`
18. Tree menu `<xy-tree>`

## Specify font size

To specify the font size for the entire application, specify a class for the `html` element.
```html
<html class="large">
...
</html>
```
HTML要素(`div`、`table`等)にクラス指定します。/ Specify a class for HTML elements (`div`, `table`, etc.).
```html
<div class="large">
...
</div>
```
### Class of font size that can be specified
|Class name| Font size |
|----|--------:|
|font-x-small| 12.32px |
|font-small| 14.08px |
|font-medium|    16px |
|font-large| 17.92px |
|font-x-large|    24px |

### Predefined font size
| Element | Font size | Weight | Line height |
|----|--------:|----:|--------:|
|html|16px|-|-|
|body|1rem|400|1.5|
|.mat-display-1|3rem|400| 1.3|
|.mat-display-2|2.5rem|400|1.3|
|h1<br>.mat-h1<br>.mat-headline|2rem|700|1.6|
|h2<br>.mat-h2<br>.mat-title|1.5rem|700|1.6|
|h3<br>.mat-h3<br>.mat-subheading-2|1.125rem|700|1.6|
|h4<br>.mat-h4<br>.mat-subheading-1|1.0rem|700|1.6|
|.mat-body<br>.mat-body-1|1.0rem|400|1.6|
|.mat-body-strong<br>.mat-body-2|0.875rem|400|1.6|
|.mat-small<br>.mat-caption|0.75rem|400|1.6|
|button<br>a|1rem|700|1.8|
|input[type=text]<br>input[type=number]<br>input[type=date]<br>input[type=email]<br>input[type=tel]|1rem|400|1.8|
  
