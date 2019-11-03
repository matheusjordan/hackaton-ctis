import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
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
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.requestProducts();
    this.requestCategories();
  }

  delete(product: Product) {
    this.showAlert(`Deseja remover o o produto ${ product.name } ?`, product);
  }

  async openAddModal() {
    const modal = await this.modalCtrl.create({
      component: AddProductComponent,
      componentProps: { isEdit: false, categories: this.categoryList }
    });

    modal.onDidDismiss().then(
      res => {
        if (res.data) {
          this.requestProducts();
        }
      }
    );

    return await modal.present();
  }

  async openEditModal(product: Product) {
    const modal = await this.modalCtrl.create({
      component: AddProductComponent,
      componentProps: { isEdit: true, data: product, categories: this.categoryList },
    });

    modal.onDidDismiss().then(
      res => {
        if (res.data) {
          this.requestProducts();
        }
      }
    );

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

  private async showAlert(msg: string, product: Product) {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: [
        { text: 'cancelar', role: 'CANCEL' },
        { text: 'excluir', role: 'OK', handler: () => this.requestDelete(product) }
      ],
    });

    return await alert.present();
  }

  private requestDelete(product: any) {
    this.productService.delete(product).subscribe(
      res => {
        if (res) {
          this.showToast('Produto removido com sucesso!');
          this.requestProducts();
        }
      }
    );
  }

  private async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500
    });

    return await toast.present();
  }

}
