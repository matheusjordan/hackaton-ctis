import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openAddModal() {
    const modal = await this.modalCtrl.create({
      component: AddCategoryComponent,
      componentProps: { data: 'teste' }
    });

    return await modal.present();
  }

}
