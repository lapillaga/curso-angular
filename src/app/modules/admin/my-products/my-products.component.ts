import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductInfo } from 'src/app/model/product';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  title: string = 'Cuentas de ahorros';
  products$: Observable<Product[]> = new Observable<Product[]>();

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  selectProduct(account: ProductInfo) {
    this.router.navigate(['movements', account.code], { relativeTo: this.activatedRoute });
  }
}
