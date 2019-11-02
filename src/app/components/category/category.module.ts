import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category.page';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryService } from './category.service';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage,
    children: [
    {
      path: 'add-category',
      component: AddCategoryComponent,
    }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryPage, AddCategoryComponent],
  providers: [
    CategoryService
  ]
})
export class CategoryPageModule {}
