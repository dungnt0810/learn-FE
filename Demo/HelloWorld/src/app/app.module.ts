import { StudentService } from './services/student.service';
import { Demo7Component } from './demo7.component';
import { Demo6Component } from './demo6.component';
import { Demo5Component } from './demo5.component';
import { Demo4Component } from './demo4.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { Demo2Component } from './demo2.component';
import { StudentComponent } from './student.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    StudentComponent,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [Demo7Component]
})
export class AppModule { }
