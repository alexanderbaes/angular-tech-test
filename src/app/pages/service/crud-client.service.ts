import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudClientService {
  private apiUrl = environment.ENDPOINT_DummyJSON;

  constructor(private http: HttpClient) {}

  // GET: Obtener todos los clientes
  getClients(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(catchError(this.handleError));
  }
  // POST: Agregar un nuevo cliente
  addClient(client: any): Observable<any> {
    const url = `${this.apiUrl}/add`;
    return this.http.post(url, client).pipe(catchError(this.handleError));
  }

  // PUT: Actualizar un cliente
  updateClient(id: number, client: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, client).pipe(catchError(this.handleError));
  }

  // DELETE: Eliminar un cliente
  deleteClient(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // Control de errores
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
