import { Component, Input, OnInit } from '@angular/core';
import { PublicProduct } from 'src/app/model/public-product';

@Component({
  selector: 'app-public-product-card',
  templateUrl: './public-product-card.component.html',
  styleUrls: ['./public-product-card.component.scss']
})
export class PublicProductCardComponent implements OnInit {
  @Input() publicProduct: PublicProduct | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
