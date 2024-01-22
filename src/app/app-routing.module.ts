import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductStoreComponent } from './product-store/product-store.component';

const routes: Routes = [ 
  {path: 'products',  component: ProductListComponent},
  {path: 'create-product', component:CreateProductComponent},
  {path :'' , redirectTo:'products' , pathMatch: 'full'},
  {path: 'update-product/:id', component: UpdateProductComponent},
  {path: 'product-details/:id', component:ProductDetailsComponent},
  {path: 'product-store', component: ProductStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
