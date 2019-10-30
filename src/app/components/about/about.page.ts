import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  ctisLogo = 'https://www.ctis.com.br/assets/Ctis/Imagens/logo_ctis_grayscale.png';
  facisaLogo = 'https://static.fabapp.com/8d6d98e332f3f8f74d042dcd65ec52f600a32336';

  constructor() { }

  ngOnInit() {
  }

}
