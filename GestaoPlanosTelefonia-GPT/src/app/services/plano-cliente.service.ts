import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientePlanoService {

  private apiUrl = 'https://localhost:7206/api/ClientePlano'; // Ajuste conforme sua API

  constructor(private http: HttpClient) {}

  getPlanoClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPlanoCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }

  // updatePlanoCliente(id: string, cliente: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${id}`, cliente);
  // }

  deletePlanoCliente(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}