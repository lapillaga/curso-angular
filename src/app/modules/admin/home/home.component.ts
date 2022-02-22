import { Component, OnInit } from '@angular/core';
import { PublicProductService } from 'src/app/shared/services/public-product/public-product.service';
import { Observable } from 'rxjs';
import { PublicProduct } from 'src/app/model/public-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<PublicProduct[]> = new Observable<PublicProduct[]>();

  constructor(
    private publicProductService: PublicProductService
  ) { }

  ngOnInit(): void {
    this.products$ = this.publicProductService.getPublicProducts('');
  }

  reloadProducts(query: string) {
    this.products$ = this.publicProductService.getPublicProducts(query);
  }
}
