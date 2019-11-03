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
  catList: any[];

  constructor(
    private modalCtrl: ModalController,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.requestCategories();
  }

  async openAddModal() {
    const modal = await this.modalCtrl.create({
      component: AddCategoryComponent,
      componentProps: { isEdit: false }
    });

    return await modal.present();
  }

  async openEditModal(category: Category) {
    const modal = await this.modalCtrl.create({
      component: AddCategoryComponent,
      componentProps: { isEdit: true, data: category }
    });

    return await modal.present();
  }

  delete(category: Category) {
    this.categoryService.delete(category).subscribe(
      res => res
    );
  }

  private requestCategories() {
    this.categoryService.get().subscribe(
      (res: any[]) => this.catList = res
    );
  }
}
