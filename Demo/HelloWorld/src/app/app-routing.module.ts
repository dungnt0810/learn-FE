import { Contact2Component } from './components/contact/components/contact2.component';
import { Contact1Component } from './components/contact/components/contact1.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailComponent } from './components/product/detail.component';
import { ProductComponent } from './components/product/product.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileService] },
  {
    path: 'contact', component: ContactComponent, children: [
      { path: 'contact1', component: Contact1Component },
      { path: 'contact2', component: Contact2Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
