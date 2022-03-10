import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponse} from "../../../model/login";
import {User} from "../../../model/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.apiBaseUrl + 'login/';

  constructor(private http: HttpClient) { }

  login(body: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, body);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

  getUser(): User {
    const user = localStorage.getItem('user');
    // @ts-ignore
    return JSON.parse(user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
