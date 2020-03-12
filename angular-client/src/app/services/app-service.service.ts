import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AppConstant } from '../constants/app-constant';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  currentUser: User;
  constructor(private httpClient: HttpClient) { }

  checkUser(user: User): Observable<User> {
    return <Observable<User>>this.httpClient.post(`${AppConstant.API_V1_URL}/checkLogin`, user);
  }

  private buildHttpOptions() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application-json' }) };
    return httpOptions;
  }
}
