import { NgModule } from '@angular/core';
import { DragDropModule } from "@angular/cdk/drag-drop";

const MaterialComponent = [DragDropModule];

@NgModule({
    imports: [MaterialComponent],
    exports: [MaterialComponent]
})
export class MaterialModule { }
