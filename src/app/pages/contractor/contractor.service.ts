import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contractor} from "src/app/contractor";


@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/users/';

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }
}
