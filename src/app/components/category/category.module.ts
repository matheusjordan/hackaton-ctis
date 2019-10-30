import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category.page';
import { AddCategoryComponent } from './add-category/add-category.component';

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
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryPage, AddCategoryComponent],
  // entryComponents: [AddCategoryComponent]
})
export class CategoryPageModule {}
