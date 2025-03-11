import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  private apiUrl = '/api/web/20240403172734/https://api.publicapis.org/entries';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // La API devuelve datos generales de "entries"
  }
}
