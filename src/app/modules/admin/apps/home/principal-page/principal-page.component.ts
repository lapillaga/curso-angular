import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {

  constructor() { }
  now = new Date();
  data: any [] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "lpillaga@gmail.com",
      "dollar": 1.2,
      "saldo": 1.243,
      "percentage": 0.221,
    },
    {
      "id": 1,
      "name": "leanne graham",
      "username": "Bret",
      "email": "lpillaga@gmail.com",
      "dollar": 1.2,
      "saldo": 1.2,
      "percentage": 11.2,
    },
  ]
  search: string = '';

  ngOnInit(): void {
  }

}
