import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
  { path: 'product-list', loadComponent: () => import('./product-list/product-list.component').then(c => c.ProductListComponent) },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
