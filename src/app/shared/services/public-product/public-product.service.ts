import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PublicProduct } from 'src/app/model/public-product';

@Injectable({
  providedIn: 'root'
})
export class PublicProductService {
  url: string = environment.apiBaseUrl + 'public-products/';

  constructor(private http: HttpClient) { }

  getPublicProducts(type: string): Observable<PublicProduct[]> {
    const params: HttpParams = new HttpParams()
      .set('productType', type);
    return this.http.get<PublicProduct[]>(this.url, { params });
  }
}
