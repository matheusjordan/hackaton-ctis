import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { CatC } from '../../shared/mocks/mock';

@Injectable()
export class CategoryService {

  constructor() { }

  delete(product: Category) {
    CatC.categories = CatC.categories.filter( item => item.id !== product.id );
  }

  add(product: Category) {
    product.id = CatC.size;
    CatC.size += 1;
    CatC.categories.push(product);
  }

  edit(product: Category) {
    CatC.categories = CatC.categories.map( item => {
      if (item.id === product.id) {
        item = product;
      }
      return item;
    });
  }
}
