import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Product } from '../../shared/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = environment.apiUrl + 'products';

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get(this.baseUrl).pipe(
      tap(
        res => res
      )
    );
  }

  post(product: Product) {
    return this.http.post(this.baseUrl, product).pipe(
      tap(
        res => res
      )
    );
  }

  put(product: Product) {
    return this.http.put(`${this.baseUrl}/${product.id}`, product).pipe(
      tap(
        res => res
      )
    );
  }

  delete(product: Product) {
    return this.http.delete(`${this.baseUrl}/${product.id}`).pipe(
      tap(
        res => res
      )
    );
  }
}
