import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from '../category.service';

const enum Form {
  NAME = 'name'
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  @Input() isEdit: boolean;
  @Input() data: Category;

  categoryForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.createForm();

    if (this.isEdit) {
      this.editForm();
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveCategory() {
    const category = new Category(this.categoryForm.value);

    let observable: any;
    if (this.isEdit) {
      category.id = this.data.id;
      observable = this.categoryService.put(category);
    } else {
      observable = this.categoryService.post(category);
    }

    observable.subscribe(
      (res: any) => {
        if (res) {
          this.closeModal();
          this.showToast(`Categoria ${ this.isEdit ? 'editada' : 'criada' } com sucesso!`);
        }
      }
    );
  }

  private createForm() {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]]
    });
  }

  private editForm() {
    this.categoryForm.get(Form.NAME).setValue(this.data.name);
  }

  private async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });

    return await toast.present();
  }
}
