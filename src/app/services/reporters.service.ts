import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporters } from '../interfaces/reportersModel';

@Injectable({
  providedIn: 'root'
})
export class ReportersService {

  baseUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getProfile(){
    return this.http.get<Reporters>(this.baseUrl + 'profile')
  }
}
