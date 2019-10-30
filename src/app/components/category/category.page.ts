import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCategoryComponent } from './add-category/add-category.component';
import { categories } from '../../shared/mocks/mock';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  catList = categories;

  constructor(
    private modalCtrl: ModalController,
    private service: CategoryService
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
