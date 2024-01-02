import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorLogsService {
  constructor(private http: HttpClient) {}

  getErrorLogs() {
    return this.http.get('https://dummyjson.com/products');
  }
}
