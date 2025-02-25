import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'orders', loadChildren: () => import('orders/OrdersModule').then(m => m.OrdersModule) },
  { path: 'customers', loadChildren: () => import('customers/CustomersModule').then(m => m.CustomersModule) },
  { path: 'products', loadChildren: () => import('products/ProductsModule').then(m => m.ProductsModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
