import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProductComponent } from './add-product/add-product.component';
import { ProdC } from '../../shared/mocks/mock';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  prodList = ProdC.products;

  constructor(
    private modalCtrl: ModalController,
    private service: ProductService
  ) { }

  ngOnInit() {
  }

  async openAddModal() {
    const modal = await this.modalCtrl.create({
      component: AddProductComponent,
      componentProps: { data: 'teste' }
    });

    return await modal.present();
  }

  delete(product: Product) {
    this.service.delete(product);
    this.prodList = ProdC.products;
  }

}
