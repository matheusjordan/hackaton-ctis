import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddProductComponent } from './add-product/add-product.component';
import { products } from '../../shared/mocks/mock';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  prodList = products;

  constructor(
    private modalCtrl: ModalController
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

}
