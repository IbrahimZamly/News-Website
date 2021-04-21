import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  signUp(credentials: any) {
    return this.http.post(this.baseUrl + 'reporters', credentials)
  }

  login(credentials: any) {
    return this.http.post(this.baseUrl + 'reporters/login', credentials)
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
