import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private http: HttpClient) { }

  sendScale(scale:any,code:string) {
    const auth = localStorage.getItem("auth");
    const headers = new HttpHeaders({"auth":auth});
    return this.http.post<any>(`${environment.baseURL}/platform/createScale/${code}`,scale,{headers});
  }
  
  getScalesEdit() {
    const auth = localStorage.getItem("auth");
    const headers = new HttpHeaders({"auth":auth});
    return this.http.get<any>(`${environment.baseURL}/platform/scales`,{headers});
  }

  getScale(code:string) {
    const auth = localStorage.getItem("auth");
    const headers = new HttpHeaders({"auth":auth});
    return this.http.get<any>(`${environment.baseURL}/platform/scale/${code}`,{headers});
  }

  getResults(data:any){
    const auth = localStorage.getItem("auth");
    const headers = new HttpHeaders({"auth":auth});
    return this.http.post<any>(`${environment.baseURL}/results/filter`,data,{headers});
  }

  getFilterData(){
    const auth = localStorage.getItem("auth");
    const headers = new HttpHeaders({"auth":auth});
    return this.http.get<any>(`${environment.baseURL}/users/filter`,{headers});
  }

  getScalesResults() {
    const auth = localStorage.getItem("auth");
    const headers = new HttpHeaders({"auth":auth});
    return this.http.get<any>(`${environment.baseURL}/results/scales`,{headers});
  }
}
