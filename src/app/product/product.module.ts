import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../product-detail/Guard/product-detail-guard.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: "products" ,component: ProductListComponent},
      { 
        path: "products/:id",
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
