import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  private apiUrl = 'https://localhost:7206/api/Planos'; // Ajuste conforme sua API

  constructor(private http: HttpClient) {}

  getPlanos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPlano(cliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }

  updatePlano(id: string, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, cliente);
  }

  deletePlano(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}