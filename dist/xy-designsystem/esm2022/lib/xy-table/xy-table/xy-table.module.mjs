import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyTableComponent } from '../components/xy-table/xy-table.component';
import { MatTableModule } from '@angular/material/table';
import { XyTableCellComponent } from '../components/xy-table-cell/xy-table-cell.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableActionDirective } from '../components/directives/table-action.directive';
import { ActionButtonsComponent } from '../components/components-table/action-buttons/action-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { XyInputModule } from '../../xy-input/xy-input.module';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { XySelectModule } from '../../xy-select/xy-select.module';
import { XyHintModule } from '../../xy-hint/xy-hint.module';
import { XyButtonModule } from '../../xy-button/xy-button.module';
import { XyMenuModule } from '../../xy-menu/xy-menu.module';
import { XyCheckboxModule } from '../../xy-checkbox/xy-checkbox.module';
import * as i0 from "@angular/core";
export class XyTableModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.1", ngImport: i0, type: XyTableModule, declarations: [XyTableComponent,
            XyTableCellComponent,
            TableActionDirective,
            ActionButtonsComponent], imports: [CommonModule,
            MatTableModule,
            MatButtonModule,
            MatIconModule,
            CdkTableModule,
            MatMenuModule,
            MatPaginatorModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatInputModule,
            FormsModule,
            MatSortModule,
            XyInputModule,
            MatOptionModule,
            MatSelectModule,
            XySelectModule,
            ReactiveFormsModule,
            XyHintModule,
            XyButtonModule,
            XyMenuModule,
            XyCheckboxModule], exports: [XyTableComponent,
            XyTableCellComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTableModule, imports: [CommonModule,
            MatTableModule,
            MatButtonModule,
            MatIconModule,
            CdkTableModule,
            MatMenuModule,
            MatPaginatorModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatInputModule,
            FormsModule,
            MatSortModule,
            XyInputModule,
            MatOptionModule,
            MatSelectModule,
            XySelectModule,
            ReactiveFormsModule,
            XyHintModule,
            XyButtonModule,
            XyMenuModule,
            XyCheckboxModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: XyTableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        XyTableComponent,
                        XyTableCellComponent,
                        TableActionDirective,
                        ActionButtonsComponent
                    ],
                    imports: [
                        CommonModule,
                        MatTableModule,
                        MatButtonModule,
                        MatIconModule,
                        CdkTableModule,
                        MatMenuModule,
                        MatPaginatorModule,
                        MatCheckboxModule,
                        MatToolbarModule,
                        MatInputModule,
                        FormsModule,
                        MatSortModule,
                        XyInputModule,
                        MatOptionModule,
                        MatSelectModule,
                        XySelectModule,
                        ReactiveFormsModule,
                        XyHintModule,
                        XyButtonModule,
                        XyMenuModule,
                        XyCheckboxModule
                    ],
                    exports: [
                        XyTableComponent,
                        XyTableCellComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHktdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMveHktZGVzaWduc3lzdGVtL3NyYy9saWIveHktdGFibGUveHktdGFibGUveHktdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFDaEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7QUFDbkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUF1Q3hFLE1BQU0sT0FBTyxhQUFhOzhHQUFiLGFBQWE7K0dBQWIsYUFBYSxpQkFqQ3RCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLHNCQUFzQixhQUd0QixZQUFZO1lBQ1osY0FBYztZQUNkLGVBQWU7WUFDZixhQUFhO1lBQ2IsY0FBYztZQUNkLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsV0FBVztZQUNYLGFBQWE7WUFDYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixjQUFjO1lBQ2QsWUFBWTtZQUNaLGdCQUFnQixhQUdoQixnQkFBZ0I7WUFDaEIsb0JBQW9COytHQUdYLGFBQWEsWUEzQnRCLFlBQVk7WUFDWixjQUFjO1lBQ2QsZUFBZTtZQUNmLGFBQWE7WUFDYixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlO1lBQ2YsZUFBZTtZQUNmLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGNBQWM7WUFDZCxZQUFZO1lBQ1osZ0JBQWdCOzsyRkFPUCxhQUFhO2tCQW5DekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3FCQUNyQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFh5VGFibGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3h5LXRhYmxlL3h5LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBYeVRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMveHktdGFibGUtY2VsbC94eS10YWJsZS1jZWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHtNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRhYmxlQWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kaXJlY3RpdmVzL3RhYmxlLWFjdGlvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25CdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRzLXRhYmxlL2FjdGlvbi1idXR0b25zL2FjdGlvbi1idXR0b25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0VG9vbGJhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgWHlJbnB1dE1vZHVsZSB9IGZyb20gJy4uLy4uL3h5LWlucHV0L3h5LWlucHV0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdE9wdGlvbk1vZHVsZSwgTWF0T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IFh5U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4veHktc2VsZWN0L3h5LXNlbGVjdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBYeUhpbnRNb2R1bGUgfSBmcm9tICcuLi8uLi94eS1oaW50L3h5LWhpbnQubW9kdWxlJztcclxuaW1wb3J0IHsgWHlCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi8uLi94eS1idXR0b24veHktYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFh5TWVudU1vZHVsZSB9IGZyb20gJy4uLy4uL3h5LW1lbnUveHktbWVudS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBYeUNoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vLi4veHktY2hlY2tib3gveHktY2hlY2tib3gubW9kdWxlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFh5VGFibGVDb21wb25lbnQsXHJcbiAgICBYeVRhYmxlQ2VsbENvbXBvbmVudCxcclxuICAgIFRhYmxlQWN0aW9uRGlyZWN0aXZlLCBcclxuICAgIEFjdGlvbkJ1dHRvbnNDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdFRhYmxlTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIENka1RhYmxlTW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSxcclxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRTb3J0TW9kdWxlLFxyXG4gICAgWHlJbnB1dE1vZHVsZSxcclxuICAgIE1hdE9wdGlvbk1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIFh5U2VsZWN0TW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIFh5SGludE1vZHVsZSxcclxuICAgIFh5QnV0dG9uTW9kdWxlLFxyXG4gICAgWHlNZW51TW9kdWxlLFxyXG4gICAgWHlDaGVja2JveE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgWHlUYWJsZUNvbXBvbmVudCxcclxuICAgIFh5VGFibGVDZWxsQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWHlUYWJsZU1vZHVsZSB7IH1cclxuIl19