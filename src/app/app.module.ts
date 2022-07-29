import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CanvasAreaComponent } from './components/canvas-area/canvas-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NodeComponent } from './components/node/node.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        CanvasAreaComponent,
        NodeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
