import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { CatC } from '../../shared/mocks/mock';

@Injectable()
export class CategoryService {

  constructor() { }

  delete(category: Category) {
    CatC.categories = CatC.categories.filter( item => item.id !== category.id );
  }

  add(category: Category) {
    category.id = CatC.size;
    CatC.size += 1;
    CatC.categories.push(category);
  }

  edit(category: Category) {
    CatC.categories = CatC.categories.map( item => {
      if (item.id === category.id) {
        item = category;
      }
      return item;
    });
  }
}
