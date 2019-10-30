import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductPage } from './product.page';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './product.service';

const routes: Routes = [
  {
    path: '',
    component: ProductPage,
    children: [
      {
        path: 'add-product',
        component: AddProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductPage, AddProductComponent],
  providers: [
    ProductService
  ]
})
export class ProductPageModule {}
