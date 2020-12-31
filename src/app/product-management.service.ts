
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private http: HttpClient) { }

  public cumpara(user_id: number, titlu: string, pret: string, descriere: string): void {
    this.http.post<any>(`${environment.serverUrl}/add`, { user_id: user_id, title: titlu, pret: pret, descriere: descriere}).subscribe(data => {
      console.log(data);
      if (data === 'ok') {
        // User logged in. Redirect to main page
        console.log('User logged in. Redirect to main page');
      }
    });
  }
}


