import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductType } from 'src/app/model/product-type';
import { ProductTypeService } from 'src/app/shared/services/product-type/product-type.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Output() selectedProductType: EventEmitter<string> = new EventEmitter<string>();
  productTypes$: Observable<ProductType[]> = this.productTypeService.getProductTypes();

  constructor(
    private productTypeService: ProductTypeService
  ) { }

  ngOnInit(): void {
  }

  changeType(value: string) {
    this.selectedProductType.emit(value);
  }
}
