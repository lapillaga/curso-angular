import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = environment.apiBaseUrl + 'contacts';
  constructor(private http: HttpClient) { }

  getContacts(name: string): Observable<Contact[]> {
    const params: HttpParams = new HttpParams()
      .set('name', name);
    return this.http.get<Contact[]>(this.url, {params});
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url, contact);
  }
}
