import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from 'src/app/model/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  url: string = environment.apiBaseUrl + 'product-types';

  constructor(private http: HttpClient) { }

  getProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.url);
  }
}
