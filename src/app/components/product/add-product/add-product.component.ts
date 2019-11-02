import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  private createForm() {
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      value: [null, [Validators.required]],
      category: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

}
