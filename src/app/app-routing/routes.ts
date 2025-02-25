import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Route } from '@angular/compiler/src/core';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactus', component: ContactComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'dishdetail/:id', component: DishDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];