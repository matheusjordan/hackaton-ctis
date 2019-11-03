import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { Category } from '../../shared/models/category.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root'} )
export class CategoryService {
  private baseUrl = environment.apiUrl + 'categories';

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

  post(category: Category) {
    return this.http.post(this.baseUrl, category).pipe(
      tap(
        res => res
      )
    );
  }

  put(category: Category) {
    return this.http.put(`${this.baseUrl}/${category.id}`, category).pipe(
      tap(
        res => res
      )
    );
  }

  delete(category: Category) {
    return this.http.delete(`${this.baseUrl}/${category.id}`).pipe(
      tap(
        res => res
      )
    );
  }
}
