import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  title: string = 'Cuentas de ahorros';
  constructor() { }

  ngOnInit(): void {
  }

  selectProduct() {
    console.log('Seleccionar producto');
  }
}
