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

  public getExports(local?:string, from?:string, to?:string): Observable<Export[]>{
    let url = 'http://localhost:3000/exports?'
    if(local){
      url = url + "local=" + local
    }
    if(from){
      url = url + "&date_time_gte=" + from
    }    
    if(to){
      url = url + "&date_time_lte=" + to
    }
    console.log(url);
    
    return this.http.get<Export[]>(url)
  }
}
