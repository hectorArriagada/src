import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry, catchError } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
  }

  apiUrl = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient, private storage: StorageService) { }

  getUser(): Observable<any> {
    return this.http.get(this.apiUrl + "/users/"
    );
  }

  postUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl + "/users/", data);
  }

  updateUser(id: string, data:any): Observable<any> {
    return this.http.put(this.apiUrl + "/users/" + id, data)
  }

  deleteUser(id:any): Observable<any> {
    return this.http.delete(this.apiUrl + "/users/" + id);
  }

}
