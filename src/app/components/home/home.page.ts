import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  catCount = 0;
  prodCount = 0;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.requestCategories();
    this.requestProducts();
  }

  private requestProducts() {
    this.productService.get().subscribe(
      (res: any[]) => this.prodCount = res.length
    );
  }

  private requestCategories() {
    this.categoryService.get().subscribe(
      (res: any[]) => this.catCount = res.length
    );
  }

}
