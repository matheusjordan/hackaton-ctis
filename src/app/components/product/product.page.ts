import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProductComponent } from './add-product/add-product.component';
import { ProdC } from '../../shared/mocks/mock';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from './product.service';
import { CategoryService } from '../category/category.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  productList: any[];
  categoryList: any[];

  constructor(
    private modalCtrl: ModalController,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.requestProducts();
    this.requestCategories();
  }

  delete(product: Product) {
    this.productService.delete(product).subscribe(
      res => {
        if (res) {
          this.requestProducts();
        }
      }
    );
  }

  async openAddModal() {
    const modal = await this.modalCtrl.create({
      component: AddProductComponent,
      componentProps: { isEdit: false, categories: this.categoryList }
    });

    return await modal.present();
  }

  async openEditModal(product: Product) {
    const modal = await this.modalCtrl.create({
      component: AddProductComponent,
      componentProps: { isEdit: true, data: product, categories: this.categoryList }
    });

    return await modal.present();
  }

  private requestProducts() {
    this.productService.get().subscribe(
      (res: any[]) => this.productList = this.transformEachProduct(res)
    );
  }

  private transformEachProduct(list: any[]) {
    return list.map( item => new Product(item));
  }

  private transformEachCategory(list: any[]) {
    return list.map( item => new Category(item) );
  }

  private requestCategories() {
    this.categoryService.get().subscribe(
      (res: any[]) => this.categoryList = this.transformEachCategory(res)
    );
  }

}
