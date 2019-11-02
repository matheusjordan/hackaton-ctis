import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryService } from './category.service';
import { CatC } from '../../shared/mocks/mock';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  catList = CatC.categories;

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

  delete(category: Category) {
    this.service.delete(category);
    this.catList = CatC.categories;
  }
}
