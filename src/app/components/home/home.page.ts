import { Component } from '@angular/core';
import { CatC, ProdC } from '../../shared/mocks/mock';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catCount = CatC.size;
  prodCount = ProdC.size;

  constructor() {}

}
