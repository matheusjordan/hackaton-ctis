import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryService } from './category.service';
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
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
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

    modal.onDidDismiss().then(
      res => {
        if (res.data) {
          this.requestCategories();
        }
      }
    );

    return await modal.present();
  }

  async openEditModal(category: Category) {
    const modal = await this.modalCtrl.create({
      component: AddCategoryComponent,
      componentProps: { isEdit: true, data: category }
    });

    modal.onDidDismiss().then(
      res => {
        if (res.data) {
          this.requestCategories();
        }
      }
    )

    return await modal.present();
  }

  delete(category: Category) {
    this.showAlert(`Deseja remover a categoria ${category.name} ?`, category);
  }

  private requestCategories() {
    this.categoryService.get().subscribe(
      (res: any[]) => this.catList = res
    );
  }

  private async showAlert(msg: string, category: Category) {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: [
        { text: 'cancelar', role: 'CANCEL' },
        { text: 'excluir', role: 'OK', handler: () => this.requestDelete(category) }
      ]
    });

    return await alert.present();
  }

  private requestDelete(category: Category) {
    this.categoryService.delete(category).subscribe(
      res => {
        if (res) {
          this.showToast('Categoria removida com sucesso!');
          this.requestCategories();
        }
      }
    );
  }

  private async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });

    return await toast.present();
  }
}
