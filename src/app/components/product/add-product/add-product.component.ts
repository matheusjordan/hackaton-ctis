import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from '../product.service';
import { CategoryService } from '../../category/category.service';
import { Category } from 'src/app/shared/models/category.model';

const enum Form {
  NAME = 'name',
  VALUE = 'value',
  CATEGORY = 'category',
  DESCRIPTION = 'description'
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Input() isEdit: boolean;
  @Input() data: Product;
  @Input() categories: Category[];

  productForm: FormGroup;

  categoryList: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private fb: FormBuilder,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.createForm();

    if (this.isEdit) {
      this.editForm(this.data);
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  saveProduct() {
    const product = new Product(this.productForm.value);

    let observer: any;
    if (this.isEdit) {
      product.id = this.data.id;
      observer = this.productService.put(product);
    } else {
      observer = this.productService.post(product);
    }

    observer.subscribe(
      res => {
        if (res) {
          this.closeModal();
          this.showToast(`Produto ${this.isEdit ? 'editado' : 'criado'} com sucesso!`);
        }
      }
    );
  }

  private createForm() {
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      value: [null, [Validators.required]],
      category: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  private editForm(product: Product) {
    this.productForm.get(Form.NAME).setValue(product.name);
    this.productForm.get(Form.VALUE).setValue(product.value);
    this.productForm.get(Form.CATEGORY).setValue(product.category);
    this.productForm.get(Form.DESCRIPTION).setValue(product.description);
  }

  private async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500
    });

    return await toast.present();
  }
}
