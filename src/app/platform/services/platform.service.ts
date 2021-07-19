import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private http: HttpClient) { }

  sendScale(scale:any) {
    const auth = localStorage.getItem("auth");
    const headers = new HttpHeaders({"auth":auth});
    return this.http.post<any>(`${environment.baseURL}/platform/createScale`,scale,{headers});
  }
}
