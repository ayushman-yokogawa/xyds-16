import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ExampleComponent} from "./example/example.component";
import {TreeExampleComponent} from "./tree-example/tree-example.component";
import {HomeComponent} from "./home/home.component";
import {ButtonExampleComponent} from "./button-example/button-example.component";
import {SlideToggleExampleComponent} from "./slide-toggle-example/slide-toggle-example.component";
import {CheckboxExampleComponent} from "./checkbox-example/checkbox-example.component";
import {RadioExampleComponent} from "./radio-example/radio-example.component";
import {ContainerExampleComponent} from "./container-example/container-example.component";
import {InputExampleComponent} from "./input-example/input-example.component";
import {SelectExampleComponent} from "./select-example/select-example.component";
import {TypographyExampleComponent} from "./typography-example/typography-example.component";
import {CardExampleComponent} from "./card-example/card-example.component";
import {ElevationExampleComponent} from "./elevation-example/elevation-example.component";
import {DialogExampleComponent} from "./dialog-example/dialog-example.component";
import {ButtonToggleExampleComponent} from "./button-toggle-example/button-toggle-example.component";
import {TabExampleComponent} from "./tab-example/tab-example.component";
import {MenuExampleComponent} from "./menu-example/menu-example.component";
import {FormExampleComponent} from "./form-example/form-example.component";
import {BreadcrumbExampleComponent} from "./breadcrumb-example/breadcrumb-example.component";
import { Child1ExampleComponent } from './breadcrumb-example/breadcrumb-child-components/child1-example/child1-example.component';
import { Child2ExampleComponent } from './breadcrumb-example/breadcrumb-child-components/child2-example/child2-example.component';
import { BadgeExampleComponent } from './badge-example/badge-example.component';
import { SliderExampleComponent } from './slider-example/slider-example.component';
import { ProgressbarExampleComponent } from './progressbar-example/progressbar-example.component';
import { ProgressSpinnerExampleComponent } from './progress-spinner-example/progress-spinner-example.component';
import { SnackbarExampleComponent } from './snackbar-example/snackbar-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { StepperExampleComponent } from './stepper-example/stepper-example.component';
import { HeaderExampleComponent } from './header-example/header-example.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { FooterExampleComponent } from './footer-example/footer-example.component';
import { ExpensionPanelExampleComponent } from './expension-panel-example/expension-panel-example.component';
import { AutocompletExampleComponent } from './autocomplet-example/autocomplet-example.component';
import { ChipsExampleComponent } from './chips-example/chips-example.component';
import { DatePickerExampleComponent } from './date-picker-example/xy-date-picker-example.component';
import { BottomSheetExampleComponent } from './bottom-sheet-example/bottom-sheet-example.component';
import { DividerExampleComponent } from './divider-example/divider-example.component';
import { SidenavExampleComponent } from './sidenav-example/sidenav-example.component';

const routes:Routes = [
  { path: 'inbox', component: HomeComponent },
  { path: 'products', component: HomeComponent },
  { path: 'invoices', component: HomeComponent },
  { path: 'customers', component: HomeComponent },
  { path: 'chat_room', component: HomeComponent },
  { path: 'calendar', component: HomeComponent },
  { path: 'help_center', component: HomeComponent },
  { path: 'setting', component: HomeComponent },
 
  { path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: ExampleComponent,
        data:{breadcrumb:'Dashboard'}
      },
      {
        path: 'button',
        component: ButtonExampleComponent,
        data:{breadcrumb:'Button'}
      },
      {
        path: 'button_toggle',
        component: ButtonToggleExampleComponent,
        data:{breadcrumb:'Button Toggle'}
      },
      {
        path: 'slide-toggle',
        component: SlideToggleExampleComponent,
        data:{breadcrumb:'Slide Toggle'}
      },
      {
        path: 'checkbox',
        component: CheckboxExampleComponent,
        data:{breadcrumb:'Checkbox'}
      },
      {
        path: 'radio',
        component: RadioExampleComponent,
        data:{breadcrumb:'Radio'}
      },
      {
        path: 'container',
        component: ContainerExampleComponent,
        data:{breadcrumb:'Container'}
      },
      {
        path: 'input',
        component: InputExampleComponent,
        data:{breadcrumb:'Input'}
      },
      {
        path: 'select',
        component: SelectExampleComponent,
        data:{breadcrumb:'Select'}
      },
      {
        path: 'tab',
        component: TabExampleComponent,
        data:{breadcrumb:'Tab'}
      },
      {
        path: 'typography',
        component: TypographyExampleComponent,
        data:{breadcrumb:'Typography'}
      },
      {
        path: 'card',
        component: CardExampleComponent,
        data:{breadcrumb:'Card'}
      },
      {
        path: 'dialog',
        component: DialogExampleComponent,
        data:{breadcrumb:'Dialog'}
      },
      {
        path: 'elevation',
        component: ElevationExampleComponent,
        data:{breadcrumb:'Elevations'}
      },
      {
        path: 'tree',
        component: TreeExampleComponent,
        data:{breadcrumb:'Tree'}
      },
      {
        path: 'menu',
        component: MenuExampleComponent,
        data: { breadcrumb: 'menu'},
      },
      {
        path: 'form',
        component: FormExampleComponent,
        data: { breadcrumb: 'form'},
      },
      {
        path: 'breadcrumb',
        data: { breadcrumb: 'Home'}, component: BreadcrumbExampleComponent,
        children:[
          {
            path: 'child1',
            component:Child1ExampleComponent,
            data: { breadcrumb: 'Library'},
            children:[
              {
                path: 'child2',
                component:Child2ExampleComponent,
                data: { breadcrumb: 'Data'},
              }
            ]
          }        ]
      },
      {
        path: 'badge',
        component: BadgeExampleComponent,
        data:{breadcrumb:'Badge'}
      },
      {
        path: 'slider',
        component: SliderExampleComponent,
        data:{breadcrumb:'Slider'}
      },
      {
        path: 'progressbar',
        component: ProgressbarExampleComponent,
        data:{breadcrumb:'Progress Bar'}
      },
      {
        path: 'progress-spinner',
        component: ProgressSpinnerExampleComponent,
        data:{breadcrumb:'Progress Spinner'}
      },{
        path: 'snackbar',
        component: SnackbarExampleComponent,
        data:{breadcrumb:'Snackbar'}
      },
      {
        path: 'table',
        component: TableExampleComponent,
        data:{breadcrumb:'Table'}
      },
      {
        path: 'stepper',
        component: StepperExampleComponent,
        data:{breadcrumb:'Stepper'}
      },
      {
        path: 'xytopAppBar',
        component: HeaderExampleComponent,
        data:{breadcrumb:'Top App Bar'}
      },
      {
        path: 'tooltip',
        component: TooltipExampleComponent,
        data:{breadcrumb:'Tooltip'}
      },
      {
        path: 'footer',
        component: FooterExampleComponent,
        data:{breadcrumb:'Footer'}
      },
      {
        path: 'expention-panel',
        component: ExpensionPanelExampleComponent,
        data:{breadcrumb:'Expention Panel'}
      },
      {
        path: 'autocomplete',
        component: AutocompletExampleComponent,
        data:{breadcrumb:'Auto Complete'}
      },
      {
        path: 'chips',
        component: ChipsExampleComponent,
        data:{breadcrumb:'Chips'}
      },
      {
        path: 'datePicker',
        component: DatePickerExampleComponent,
        data:{breadcrumb:'Date Picker'}
      },
      {
        path: 'bottomSheet',
        component: BottomSheetExampleComponent,
        data:{breadcrumb:'Bottom Sheet'},
       
      },
      {
        path: 'divider',
        component: DividerExampleComponent,
        data:{breadcrumb:'Divider'}
      },
      {
        path: 'sidenav',
        component: SidenavExampleComponent,
        data:{breadcrumb:'Side Nav'}
      },
      {
        path: 'autoCompletes',
        loadChildren: () => import('../app/autocomplet-example/autocomplete.module').then(m => m.AutoCompleteModule),
        data:{breadcrumb:'Auto Complete'},
      },
      {
        path: 'badges',
        loadChildren: () => import('../app/badge-example/badge.module').then(m => m.BadgeModule),
        data:{breadcrumb:'Badge'}
      },
   
    ],
    
  },

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        paramsInheritanceStrategy: 'always',
        preloadingStrategy: PreloadAllModules
      }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
