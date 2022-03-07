import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bank} from "../../../model/bank";
import {AccountType} from "../../../model/account-type";
import {IdType} from "../../../model/id-type";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  url: string = environment.apiBaseUrl + 'catalogo/';

  constructor(private http: HttpClient) { }

  getBanks(): Observable<Bank[]>{
    return this.http.get<Bank[]>(this.url + 'banks');
  }

  getAccountTypes(): Observable<AccountType[]>{
    return this.http.get<AccountType[]>(this.url + 'account-types');
  }

  getIdTypes(): Observable<IdType[]>{
    return this.http.get<IdType[]>(this.url + 'id-types');
  }
}
