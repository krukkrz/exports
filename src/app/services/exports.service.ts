import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Export } from '../models/export.model';

@Injectable({
  providedIn: 'root'
})
export class ExportsService {

  constructor(
    private http: HttpClient
  ) { }

  public getExports(): Observable<Export[]>{
    const url = 'http://localhost:3000/exports'
    return this.http.get<Export[]>(url)
  }
}
