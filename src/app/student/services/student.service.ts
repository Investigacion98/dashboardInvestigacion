import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getScalesStudentAllowed() {
    const auth = localStorage.getItem("auth");
    const headers = new HttpHeaders({"auth":auth});
    return this.http.get<any>(`${environment.baseURL}/student/scales`,{headers});
  }

  // sendResults(scale:any,code:string) {
  //   const auth = localStorage.getItem("auth");
  //   const headers = new HttpHeaders({"auth":auth});
  //   return this.http.post<any>(`${environment.baseURL}/platform/createScale/${code}`,scale,{headers});
  // }
  
}
