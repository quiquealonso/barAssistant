import { Routes } from '@angular/router';
import { ProductTypeManagement } from './components/product-type-management/product-type-management';
import { LoadBarProducts } from './components/load-bar-products/load-bar-products';
import { LoginComponent } from './components/login-component/login-component';
import { SelectTable } from './components/select-table/select-table';
import { Comanda } from './components/comanda/comanda';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'product-type-management', component: ProductTypeManagement },
  { path: 'select-table', component: SelectTable },
  { path : 'comanda', component: Comanda},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

