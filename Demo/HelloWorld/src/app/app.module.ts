
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { Demo2Component } from './demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Demo2Component]
})
export class AppModule { }
