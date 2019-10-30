import { Injectable } from '@angular/core';
import { ProdC } from '../../shared/mocks/mock';
import { Product } from '../../shared/models/product.model';

@Injectable()
export class ProductService {

  constructor() { }

  delete(product: Product) {
    ProdC.products = ProdC.products.filter( item => item.id !== product.id );
  }

  add(product: Product) {
    product.id = ProdC.size;
    ProdC.size += 1;
    ProdC.products.push(product);
  }

  edit(product: Product) {
    ProdC.products = ProdC.products.map( item => {
      if (item.id === product.id) {
        item = product;
      }
      return item;
    });
  }
}
