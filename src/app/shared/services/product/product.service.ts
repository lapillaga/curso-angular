import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Transaction } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = environment.apiBaseUrl + 'products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getMovements(accountCode?: string | null): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url + '/movements/' + accountCode);
  }
}
