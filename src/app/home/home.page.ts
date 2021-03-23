import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  img1 = '../../assets/img/dice1.png';
  img2 = '../../assets/img/dice2.png'

  constructor() {}

  tirarDados() {
   

    const numero1 = Math.floor(Math.random() * 6) + 1;
    const numero2 = Math.floor(Math.random() * 6) + 1;
    this.img1 = '../../assets/img/dice' + numero1 + '.png';
    this.img2 = '../../assets/img/dice' + numero2 + '.png';
  }
}
