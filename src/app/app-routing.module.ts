import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)},
  { path: 'about', loadChildren: () => import('./components/about/about.module').then( m => m.AboutPageModule)},
  { path: 'product', loadChildren: () => import('./components/product/product.module').then( m => m.ProductPageModule)},
  { path: 'category', loadChildren: () => import('./components/category/category.module').then( m => m.CategoryPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
