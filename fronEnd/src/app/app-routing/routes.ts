import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import {LoginComponent } from '../login/login.component'
import {RegisterComponent } from '../register/register.component'
import {ProfileComponent} from '../profile/profile.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contactus',     component: ContactComponent },
   { path: 'login',     component: LoginComponent},
   {path: 'about', component: AboutComponent },
   {path: 'register', component: RegisterComponent },
   {path: 'profil', component: ProfileComponent}
];