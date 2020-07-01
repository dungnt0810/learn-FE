import { MobileService } from './services/mobile.service';
import { Contact2Component } from './components/contact/components/contact2.component';
import { Contact1Component } from './components/contact/components/contact1.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailComponent } from './components/product/detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { NewsComponent } from './components/news/news.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { Demo8Component } from './demo8.component';
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
import { HttpClientModule} from '@angular/common/http';
import { MobileComponent } from './components/mobileProduct/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    StudentComponent,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    HomeComponent,
    AboutUsComponent,
    NewsComponent,
    ProductComponent,
    DetailComponent,
    ProfileComponent,
    ContactComponent,
    Contact1Component,
    Contact2Component,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    StudentService,
    ProductService,
    ProfileService,
    MobileService
  ],
  bootstrap: [MobileComponent]
})
export class AppModule { }
