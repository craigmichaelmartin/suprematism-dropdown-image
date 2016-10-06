import { CommonModule } from '@angular/common';
import { DropdownImageComponent } from './dropdown-image.component';
import { NgModule } from '@angular/core';

export * from './dropdown-image.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DropdownImageComponent,
    ],
    exports: [
        DropdownImageComponent,
    ],
    entryComponents: [
        DropdownImageComponent,
    ]
})
export class DropdownImageModule {

}
